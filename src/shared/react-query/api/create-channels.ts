import { createSupabaseBrowserClient } from "@/src/shared/supabase";

const SUPABASE_API_CLIENT = createSupabaseBrowserClient();

export const createChannel = async (channelName: string) => {
  await SUPABASE_API_CLIENT.from("channelList")
    .insert([{ name: channelName }])
    .select();
};
