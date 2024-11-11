"use client";

import { ChannelGroup } from "./channel-group";
import { ChannelForm } from "./channel-form";
import { useChannels, useCreateChannel } from "@/src/entities/channel";

export const ChannelNavigation = () => {
  const { data } = useChannels();
  const { mutate } = useCreateChannel();

  if (!data) return;

  return (
    <div>
      <div>
        <ChannelGroup
          path="/workspace"
          items={[{ id: 0, name: "Home" }, ...data]}
        />
      </div>
      <div>
        <ChannelForm onSubmit={mutate} />
      </div>
    </div>
  );
};
