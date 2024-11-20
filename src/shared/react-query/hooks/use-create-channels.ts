import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createChannel } from "../api/create-channels";
import { QUERY_KEYS } from "../constants/query-keys";

export const useCreateChannel = () => {
  const queryClient = useQueryClient();

  const createChannelMutation = useMutation({
    mutationFn: (channelName: string) => createChannel(channelName),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.channels] }),
  });

  return createChannelMutation.mutate;
};
