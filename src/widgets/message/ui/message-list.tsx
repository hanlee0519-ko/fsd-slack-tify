import { type MessageListType } from "@/src/entities/message";

type Props = {
  messageList: MessageListType[];
};

export const MessageList = ({ messageList }: Props) => {
  return (
    <ul>
      {messageList.map((item) => (
        <li key={item.id}>{item.message}</li>
      ))}
    </ul>
  );
};
