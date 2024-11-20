import { createSupabaseBrowserClient } from "@/src/shared/supabase";
import { ChannelListType } from "../types";

const SUPABASE_API_CLIENT = createSupabaseBrowserClient();

export const getChannel = async (): Promise<ChannelListType[]> => {
  const { data } = await SUPABASE_API_CLIENT.from("channelList").select("*");

  return data ? data : [];
};
