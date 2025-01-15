import clsx from "clsx";
import Icon from "@tookscan/components/ui/Icon/Icon";
import CheckButton from "@tookscan/components/ui/CheckButton";
import React from "react";

interface ConsentLabelProps {
  content: string;
  consentStatus: boolean;
  setConsentStatus: (status: boolean) => void;
  size: "sm" | "lg";
  onClick?: () => void;
}

const ConsentLabel = ({
  content,
  consentStatus,
  setConsentStatus,
  size,
  onClick,
}: ConsentLabelProps) => {
  return (
    <div className={clsx("flex items-center justify-between py-0.5")}>
      <div
        className={clsx(
          "flex flex-row items-center",
          "font-normal leading-[1.25rem] tracking-[-0.00438rem]",
          "text-black-600",
          size === "sm" && "text-2xs",
          size === "lg" && "text-sm",
          consentStatus ? "text-blue-primary" : "text-black-600"
        )}
      >
        <CheckButton
          size={size}
          isChecked={consentStatus}
          onClick={() => setConsentStatus(!consentStatus)}
        />
        <p>{content}</p>
      </div>
      {onClick && (
        <button>
          <Icon id="rightArrow" width={6} height={10} className="text-white" />
        </button>
      )}
    </div>
  );
};

export default ConsentLabel;
