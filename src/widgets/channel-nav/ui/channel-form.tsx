"use client";

import { type FormEvent, useState } from "react";
import { formButton, formContainer, formInput } from "./channel-form.css";

type ChannelFormPros = {
  onSubmit: (channelName: string) => void;
};

export const ChannelForm = ({ onSubmit }: ChannelFormPros) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (typeof inputValue === "undefined") return;
    if (inputValue.trim().length === 0) return;

    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={formContainer}>
      <p>
        <input
          type="text"
          value={inputValue || ""}
          placeholder="채널 이름을 입력하세요"
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus
          className={formInput}
        />
        <button onClick={() => handleSubmit} className={formButton}>
          추가
        </button>
      </p>
    </form>
  );
};
