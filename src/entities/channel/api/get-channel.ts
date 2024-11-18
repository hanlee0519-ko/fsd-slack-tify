import { createSupabaseBrowserClient } from "@/src/shared/supabase";
import { useQuery } from "@tanstack/react-query";

export type ChannelListType = {
  id: number;
  name: string;
};

const SUPABASE_API_CLIENT = createSupabaseBrowserClient();

export const getChannel = async (): Promise<ChannelListType[]> => {
  const { data } = await SUPABASE_API_CLIENT.from("channelList").select("*");

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

// ** Only use TEST API Code
const getTestChannel = async (): Promise<ChannelListType[]> => {
  const response = await fetch("/channelList");
  const data = await response.json();

  return data ? data : [];
};

export const useTestChannels = () => {
  const channelsQuery = {
    queryKey: ["channels"],
    queryFn: () => getTestChannel(),
  };

  const response = useQuery(channelsQuery);
  return response.data ? response.data : [];
};
