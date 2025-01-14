"use client";

import React, { useState } from "react";
import clsx from "clsx";
import Icon from "@tookscan/components/ui/Icon/Icon";
import HelperLabel from "@tookscan/components/ui/Label/HelperLabel";

interface InputFieldProps {
  type: "simple" | "number" | "suffix" | "search" | "password";
  value?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  helperText?: string;
  disabled?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
}

const InputField = ({
  type,
  value,
  inputRef,
  onChange,
  placeholder,
  helperText,
  disabled,
  isError,
  isSuccess,
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(
    type !== "password"
  );

  return (
    <div className="flex w-96 flex-col gap-2">
      <div
        className={clsx(
          "flex h-[3.125rem] flex-row items-center gap-1 rounded-lg bg-blue-secondary px-[1.12rem] py-3",
          disabled && "cursor-not-allowed bg-black-200 text-black-800",
          isError && !disabled && "rounded-lg border border-status-error",
          isSuccess && !disabled && "border border-status-success"
        )}
      >
        {type === "search" && (
          <Icon
            id="search"
            width={16}
            height={16}
            className={clsx(
              disabled && "text-black-800",
              isFocused ? "text-blue-primary" : "text-black-600"
            )}
          />
        )}

        <input
          ref={inputRef}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={onChange}
          disabled={disabled}
          type={isPasswordVisible ? "text" : "password"}
          placeholder={placeholder}
          className="w-full bg-transparent text-black-800 outline-none"
        />
        {type === "suffix" && <p className="text-black-400">@gmail.com</p>}
        {type === "password" && (
          <button onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon
              id={isPasswordVisible ? "openEyes" : "closeEyes"}
              width={24}
              height={24}
              className="text-black-800"
            />
          </button>
        )}
      </div>

      {helperText && (
        <span
          className={clsx(
            "text-[0.75rem]",
            isError && "text-status-error",
            isSuccess && "text-status-success"
          )}
        >
          <HelperLabel
            size="sm"
            type={isError ? "error" : isSuccess ? "success" : "default"}
          >
            {helperText}
          </HelperLabel>
        </span>
      )}
    </div>
  );
};

export default InputField;
