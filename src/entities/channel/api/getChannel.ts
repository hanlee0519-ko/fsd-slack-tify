import { createSupabaseBrowserClient } from "@/src/shared/api";

export type ChannelListType = {
  id: number;
  name: string;
};

const SUPABASE_API_CLIENT = createSupabaseBrowserClient();

export const getChannel = async (): Promise<ChannelListType[] | null> => {
  let { data } = await SUPABASE_API_CLIENT.from("channelList").select("*");

  return data;
};
