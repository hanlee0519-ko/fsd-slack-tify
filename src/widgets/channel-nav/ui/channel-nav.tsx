"use client";

import { useCreateChannel, useGetChannels } from "@/src/shared/react-query";
import { ChannelForm } from "./channel-form";
import { ChannelGroup } from "./channel-group";

export const ChannelNavigation = () => {
  const channels = useGetChannels();
  const createChannel = useCreateChannel();

  return (
    <div>
      <div>
        <ChannelGroup path="/workspace" items={channels} />
      </div>
      <div>
        <ChannelForm onSubmit={createChannel} />
      </div>
    </div>
  );
};
