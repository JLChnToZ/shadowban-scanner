import { CHECKED_DATA_ATTRIBUTE } from "../common/constants";
import { Message } from "./message";
import { MessageSummary } from "./messageSummary";
import { ProfileReactProps } from "./reactProps/profileReactProps";

/**
 * Check the user profile.
 */
class ProfileChecker {
    private readonly userName: Element;

    /**
     * Check the user profile.
     * @param userNameElement element of the user name
     */
    constructor(userNameElement: Element) {
        this.userName = userNameElement;
    }

    /**
     * Run the profile checker.
     */
    run() {
        this.userName.setAttribute(CHECKED_DATA_ATTRIBUTE, "true");
        const reactProps = new ProfileReactProps(this.userName).get();
        const isUserPossiblySensitive = Boolean(reactProps.user.possibly_sensitive);

        const message = new Message(MessageSummary.fromAccountStatus(isUserPossiblySensitive));
        message.isAlert = isUserPossiblySensitive;
        message.expand();

        const userDescription = document.querySelector("[data-testid='UserDescription']");
        if (!userDescription) throw new Error("Failed to get user description of profile");
        userDescription.insertAdjacentElement("afterend", message.getContainer());
    }
}

export { ProfileChecker };
