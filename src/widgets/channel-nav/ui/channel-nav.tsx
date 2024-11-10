"use client";

import { ChannelGroup } from "./channel-group";
import { ChannelForm } from "./channel-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createChannel, getChannel } from "@/src/entities/channel";

export const ChannelNavigation = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["channels"],
    queryFn: () => getChannel(),
  });

  const addChannelClient = useMutation({
    mutationFn: (channelName: string) => createChannel(channelName),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["channels"] }),
  });

  if (data === undefined || data === null) return;

  const channelList = [{ id: 0, name: "Home" }, ...data];

  if (isLoading) return <div>{"...Loading"}</div>;

  return (
    <div>
      <div>
        <ChannelGroup path="/workspace" items={channelList} />
      </div>
      <div>
        <ChannelForm onSubmit={addChannelClient.mutate} />
      </div>
    </div>
  );
};
