"use client";

import { useChannel } from "@/src/features/create-channel";
import { ChannelGroup } from "./channel-group";
import { ChannelForm } from "./channel-form";

export const ChannelNavigation = () => {
  const { channelList, addChannelList } = useChannel();

  if (channelList === null) return;
  const itemList = [{ id: 0, name: "Channel" }, ...channelList];

  return (
    <div>
      <div>
        <ChannelGroup path="/workspace" items={itemList} />
      </div>
      <div>
        <ChannelForm onSubmit={addChannelList} />
      </div>
    </div>
  );
};
