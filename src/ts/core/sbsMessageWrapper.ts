import "../components/sbsMessage";
import { SHADOW_TRANSLATION_ATTRIBUTE } from "../common/constants";
import { TranslationKey } from "../common/translator";
import { asyncQuerySelector } from "async-query";

interface SbsMessageWrapperOptionsForTweets {
    type: "tweet";

    summary: TranslationKey;
    details: TranslationKey[];
    notes: TranslationKey[];

    isAlert: boolean;
    isFocalMode: boolean;
    isExpanded: boolean;
    isTweetButtonShown: boolean;
    isNoteShown: boolean;

    sourceTweet: HTMLElement;
    sourceTweetPermalink: string;
    tweetText: string;

    onRenderedCallback?: () => void;
}

interface SbsMessageWrapperOptionsForProfiles {
    type: "profile";

    summary: TranslationKey;
    isAlert: boolean;
    onRenderedCallback?: () => void;
}

class SbsMessageWrapper {
    private readonly sbsMessage: HTMLElement;

    private readonly sourceTweet?: HTMLElement;
    private readonly sourceTweetPermalink?: string;
    private readonly tweetText?: string;

    // eslint-disable-next-line max-statements
    constructor(options: SbsMessageWrapperOptionsForTweets | SbsMessageWrapperOptionsForProfiles) {
        const sbsMessage = document.createElement("sbs-message");

        sbsMessage.textColor = SbsMessageWrapper.getTextColor();
        sbsMessage.summary = options.summary;
        sbsMessage.isAlert = options.isAlert;
        sbsMessage.onRenderedCallback = options.onRenderedCallback;

        if (options.type === "tweet") {
            sbsMessage.details = options.details;
            sbsMessage.notes = options.notes;
            sbsMessage.isFocalMode = options.isFocalMode;
            sbsMessage.isExpanded = options.isExpanded;
            sbsMessage.isTweetButtonShown = options.isTweetButtonShown;
            sbsMessage.isNoteShown = options.isNoteShown;

            this.sourceTweet = options.sourceTweet;
            this.sourceTweetPermalink = options.sourceTweetPermalink;
            this.tweetText = options.tweetText;
        } else {
            sbsMessage.isExpanded = true;
        }

        sbsMessage.setAttribute(SHADOW_TRANSLATION_ATTRIBUTE, "");
        sbsMessage.addEventListener("tweetButtonClick", this.onTweetButtonClick.bind(this));
        this.sbsMessage = sbsMessage;
    }

    /**
     * Get the text color of the tweet.
     * @returns text color of the tweet
     */
    private static getTextColor(): `rgb(${number}, ${number}, ${number})` {
        const TEXT_SELECTOR = [
            "[data-testid='User-Name'] div:first-child span",
            "[data-testid='UserName'] div:first-child span"
        ].join(",");

        const text = document.querySelector(TEXT_SELECTOR);
        if (!text) throw new Error("Failed to get user name span of tweet");

        const { color } = getComputedStyle(text);
        return color as `rgb(${number}, ${number}, ${number})`;
    }

    /**
     * Click the retweet button of the specified tweet.
     * @param sourceTweet tweet to click the retweet button
     */
    private static async clickRetweetButton(sourceTweet: HTMLElement) {
        const retweetButton = await asyncQuerySelector<HTMLElement>(
            "[data-testid='unretweet'], [data-testid='retweet']",
            sourceTweet
        );
        if (!retweetButton) throw new Error("Failed to get retweet button of tweet");
        retweetButton.click();
    }

    /**
     * Click the quote button.
     * **This method should be called after {@link clickRetweetButton}.**
     */
    private static async clickQuoteButton() {
        const quoteButton = await asyncQuerySelector<HTMLElement>(
            [
                // PC
                "[data-testid='Dropdown'] [href='/compose/tweet']",
                // Mobile
                "[data-testid='sheetDialog'] [href='/compose/tweet']"
            ].join(",")
        );
        if (!quoteButton) throw new Error("Failed to get quote button of tweet");
        quoteButton.click();
    }

    /**
     * Get the text box of the tweet composer.
     * This method should be called after {@link clickQuoteButton}.
     * @returns text box of the tweet composer
     */
    private static async getTweetTextBox() {
        const textBoxMarker = await asyncQuerySelector(
            "[data-viewportview='true'] [data-text='true'], textarea[data-testid='tweetTextarea_0']"
        );
        if (!textBoxMarker) throw new Error("Failed to get text box marker of tweet");
        const isTextArea = textBoxMarker.tagName === "TEXTAREA";
        const textBox = isTextArea ? textBoxMarker : textBoxMarker.parentElement;
        if (!textBox) throw new Error("Failed to get text box of tweet");
        return textBox;
    }

    /**
     * Quote specified tweet with specified text.
     * @param sourceTweet tweet to quote
     * @param sourceTweetPermalink permalink of the tweet to quote
     * @param text text to tweet
     */
    private static async quoteTweet(sourceTweet: HTMLElement, sourceTweetPermalink: string, text: string) {
        try {
            await SbsMessageWrapper.clickRetweetButton(sourceTweet);
            await SbsMessageWrapper.clickQuoteButton();

            const textBox = await SbsMessageWrapper.getTweetTextBox();
            textBox.innerHTML = text;
            textBox.dispatchEvent(new Event("input", { bubbles: true }));
        } catch (error) {
            const tweetText = `${text}\nhttps://twitter.com${sourceTweetPermalink}`;
            open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, "_blank");
        }
    }

    private onTweetButtonClick() {
        if (!this.sourceTweet || !this.sourceTweetPermalink || !this.tweetText) {
            throw new Error("Tweet button clicked without source tweet");
        }

        void SbsMessageWrapper.quoteTweet(this.sourceTweet, this.sourceTweetPermalink, this.tweetText);
    }

    public insertAdjacentElement(target: Element, position: InsertPosition) {
        target.insertAdjacentElement(position, this.sbsMessage);
    }
}

export { SbsMessageWrapper };
