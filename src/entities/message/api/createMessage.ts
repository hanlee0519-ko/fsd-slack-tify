import { createSupabaseBrowserClient } from "@/src/shared/api";

const SUPABASE_API_CLIENT = createSupabaseBrowserClient();

export const createMessage = async (channelName: string, message: string) => {
  await SUPABASE_API_CLIENT.from("workspace")
    .insert([{ channelName: channelName, message: message }])
    .select();
};
