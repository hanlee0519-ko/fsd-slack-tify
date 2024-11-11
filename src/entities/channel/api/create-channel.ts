import { createSupabaseBrowserClient } from "@/src/shared/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const SUPABASE_API_CLIENT = createSupabaseBrowserClient();

const createChannel = async (channelName: string) => {
  await SUPABASE_API_CLIENT.from("channelList")
    .insert([{ name: channelName }])
    .select();
};

export const useCreateChannel = () => {
  const queryClient = useQueryClient();
  const addChannelMutation = {
    mutationFn: (channelName: string) => createChannel(channelName),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["channels"] }),
  };

  return useMutation(addChannelMutation);
};
