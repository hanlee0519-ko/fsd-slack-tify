"use client";

import { MessageList } from "@/src/widgets/message";
import { useMessage } from "@/src/widgets/message/lib/use-message";

export const WorkspaceDetailPage = ({ slug }: { slug: string }) => {
  const { messageList } = useMessage(slug);

  return (
    <>
      <h1>채널이름 : {decodeURIComponent(slug)}</h1>
      <MessageList messageList={messageList} />
    </>
  );
};
