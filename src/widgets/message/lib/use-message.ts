import { useEffect, useState } from "react";
import { type MessageListType, getMessage } from "@/src/entities/message/index";

type WorkSpace = MessageListType[];

export function useMessage(channelName: string) {
  const [messageList, setMessageList] = useState<WorkSpace>([]);

  const getMessageList = async (channelName: string) => {
    let messages = await getMessage(channelName);

    if (!messages) return;
    setMessageList(messages);
  };

  useEffect(() => {
    getMessageList(channelName);
  }, [channelName]);

  return { messageList };
}
