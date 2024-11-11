import { createSupabaseBrowserClient } from "@/src/shared/supabase";
import { useQuery } from "@tanstack/react-query";

export type ChannelListType = {
  id: number;
  name: string;
};

const SUPABASE_API_CLIENT = createSupabaseBrowserClient();

const getChannel = async (): Promise<ChannelListType[] | null> => {
  const { data } = await SUPABASE_API_CLIENT.from("channelList").select("*");

  return data;
};

export const useChannels = () => {
  const channelsQuery = {
    queryKey: ["channels"],
    queryFn: () => getChannel(),
  };

  return useQuery(channelsQuery);
};
