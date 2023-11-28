import { CHECKED_DATA_ATTRIBUTE } from "../common/constants";
import { MessageDataGenerator } from "./messageDataGenerator";
import { ProfileParser } from "./parser/profileParser";
import { PropsAnalyzer } from "./propsAnalyzer";
import { SbsMessageWrapper } from "./sbsMessageWrapper";
import { Settings } from "../@types/common/settings";
import { TweetParser } from "./parser/tweetParser";

/**
 * Core of the extension.
 */
class Core {
    private readonly OBSERVER_OPTIONS = {
        childList: true,
        subtree: true
    } as const;

    private readonly settings: Settings;
    private readonly onMessageCallback: () => void;

    /**
     * Run the core process.
     * @param settings settings
     * @param onMessageCallback callback function called when the new message is inserted.
     */
    constructor(settings: Settings, onMessageCallback: () => void) {
        this.settings = settings;
        this.onMessageCallback = onMessageCallback;

        const timelineObserver = new MutationObserver(() => {
            this.timelineObserverCallback();
        });

        const loadingObserver = new MutationObserver(() => {
            const main = document.querySelector("main");
            if (!main) return;

            loadingObserver.disconnect();
            timelineObserver.observe(main, this.OBSERVER_OPTIONS);
        });

        loadingObserver.observe(document.body, this.OBSERVER_OPTIONS);
    }

    private checkProfile(userName: HTMLElement): void {
        userName.setAttribute(CHECKED_DATA_ATTRIBUTE, "true");

        const isCurrentUsersProfile = Boolean(document.querySelector("[data-testid='editProfileButton']"));
        if (isCurrentUsersProfile && !this.settings.enableForOtherUsersProfiles) return;

        const profileAnalyzer = PropsAnalyzer.analyzeProfileProps(new ProfileParser(userName).parse());
        if (!profileAnalyzer.user.shadowbanned && !this.settings.showMessagesInUnproblematicProfiles) return;

        const messageData = MessageDataGenerator.generateForProfile(profileAnalyzer, this.onMessageCallback);
        const sbsMessageWrapper = new SbsMessageWrapper(messageData);

        const bioOrUserName =
            document.querySelector("[data-testid='UserDescription']") ||
            document.querySelector("[data-testid='UserName']");
        if (!bioOrUserName) throw new Error("Failed to get user description of profile");

        sbsMessageWrapper.insertAdjacentElement(bioOrUserName, "afterend");
    }

    // eslint-disable-next-line max-statements
    private checkTweet(tweet: HTMLElement): void {
        tweet.setAttribute(CHECKED_DATA_ATTRIBUTE, "true");

        const analyzer = PropsAnalyzer.analyzeTweetProps(new TweetParser(tweet));

        if (!analyzer.meta.isTweetByCurrentUser && !this.settings.enableForOtherUsersTweets) return;
        if (analyzer.tweet.searchability === "searchable" && !this.settings.showMessagesInUnproblematicTweets) return;

        const messageData = MessageDataGenerator.generateForTweet(analyzer, this.onMessageCallback, this.settings);
        const sbsMessageWrapper = new SbsMessageWrapper(messageData);

        const analyticsButton = tweet.querySelector("[data-testid='analyticsButton']");
        if (analyticsButton) {
            sbsMessageWrapper.insertAdjacentElement(analyticsButton.parentElement as Element, "beforebegin");
            return;
        }

        sbsMessageWrapper.insertAdjacentElement(analyzer.meta.menuBar, "beforebegin");
    }

    /**
     * Callback function of the timeline observer.
     */
    private timelineObserverCallback(): void {
        const tweets = document.querySelectorAll<HTMLElement>(`[data-testid="tweet"]:not([${CHECKED_DATA_ATTRIBUTE}]`);
        for (const tweet of tweets) {
            this.checkTweet(tweet);
        }

        const userName = document.querySelector<HTMLElement>(
            `:not([data-testid="tweet"]) [data-testid="UserName"]:not([${CHECKED_DATA_ATTRIBUTE}])`
        );
        if (userName) {
            this.checkProfile(userName);
        }
    }
}

export { Core };
