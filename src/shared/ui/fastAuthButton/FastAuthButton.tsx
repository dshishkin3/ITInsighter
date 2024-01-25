import { FC } from "react";

import { TwitterButton, GoogleButton } from "@/shared/ui";

interface FastAuthButtonProps {
    type: "google" | "twitter";
}

const FastAuthButton: FC<FastAuthButtonProps> = ({ type }) => {
    switch (type) {
        case "twitter":
            return <TwitterButton>Twitter</TwitterButton>;
        case "google":
            return <GoogleButton>Google</GoogleButton>;
        default:
            return null;
    }
};

export default FastAuthButton;
