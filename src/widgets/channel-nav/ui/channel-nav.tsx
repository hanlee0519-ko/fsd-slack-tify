"use client";

import { useCreateChannel, useGetChannels } from "@/src/shared/react-query";
import { ChannelForm } from "./channel-form";
import { ChannelGroup } from "./channel-group";

export const ChannelNavigation = () => {
  const channels = useGetChannels();
  const createChannel = useCreateChannel();

  return (
    <nav aria-label="channel navigation">
      <ChannelGroup path="/workspace" items={channels} />
      <ChannelForm onSubmit={createChannel} />
    </nav>
  );
};
