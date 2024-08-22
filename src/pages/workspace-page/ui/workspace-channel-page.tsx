"use client";

import { useChannel } from "@/src/features/create-channel";
import { ChannelGroup } from "@/src/widgets/channel";

export const WorkspaceChannel = () => {
  const { channelList } = useChannel();

  if (channelList === null) return;
  const itemList = [{ id: 0, name: "Channel" }, ...channelList];

  return (
    <div>
      <ChannelGroup path="/workspace" items={itemList} />
    </div>
  );
};
