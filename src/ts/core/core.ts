import { CHECKED_DATA_ATTRIBUTE } from "../common/constants";
import { ProfileChecker } from "./profileChecker";
import { Settings } from "../@types/common/settings";
import { TweetChecker } from "./tweetChecker";

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

    /**
     * Callback function of the timeline observer.
     */
    private timelineObserverCallback() {
        const tweets = document.querySelectorAll(`[data-testid="tweet"]:not([${CHECKED_DATA_ATTRIBUTE}]`);
        for (const tweet of tweets) {
            const tweetChecker = new TweetChecker(tweet, this.settings);
            tweetChecker.run();
            this.onMessageCallback();
        }

        const userName = document.querySelector(
            `:not([data-testid="tweet"]) [data-testid="UserName"]:not([${CHECKED_DATA_ATTRIBUTE}])`
        );
        if (userName) {
            const profileChecker = new ProfileChecker(userName);
            profileChecker.run();
            this.onMessageCallback();
        }
    }
}

export { Core };
