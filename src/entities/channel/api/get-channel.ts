import { createSupabaseBrowserClient } from "@/src/shared/supabase";
import { useQuery } from "@tanstack/react-query";

export type ChannelListType = {
  id: number;
  name: string;
};

const SUPABASE_API_CLIENT = createSupabaseBrowserClient();

// const response = await fetch(
//   "https://xmhlrtpwdnxooamdrfjg.supabase.co/rest/v1/channelList"
// );

export const getChannel = async (): Promise<ChannelListType[]> => {
  const { data } = await SUPABASE_API_CLIENT.from("channelList").select("*");

  return data ? data : [];
};

const getChannelTest = async (): Promise<ChannelListType[]> => {
  const response = await fetch(
    "https://xmhlrtpwdnxooamdrfjg.supabase.co/rest/v1/channelList"
  );
  const data = await response.json();

  return data ? data : [];
};

export const useChannels = () => {
  const channelsQuery = {
    queryKey: ["channels"],
    queryFn: () => getChannel(),
  };

  const response = useQuery(channelsQuery);
  return response.data ? response.data : [];
};
