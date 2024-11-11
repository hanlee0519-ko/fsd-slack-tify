"use client";

import { ChannelGroup } from "./channel-group";
import { ChannelForm } from "./channel-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createChannel, getChannel } from "@/src/entities/channel";

export const ChannelNavigation = () => {
  const queryClient = useQueryClient();

  const channelsQuery = {
    queryKey: ["channels"],
    queryFn: () => getChannel(),
  };

  const { data, isLoading } = useQuery(channelsQuery);

  const addChannelsMutation = {
    mutationFn: (channelName: string) => createChannel(channelName),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["channels"] }),
  };

  const addChannelClient = useMutation(addChannelsMutation);

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
