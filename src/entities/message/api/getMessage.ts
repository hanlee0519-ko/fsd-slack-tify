import { createSupabaseBrowserClient } from "@/src/shared/api";

const SUPABASE_API_CLIENT = createSupabaseBrowserClient();

export type MessageListType = {
  id: number;
  channel: string;
  created_at: string;
  message: string;
};

export const getMessage = async (
  channelName: string
): Promise<MessageListType[] | null> => {
  const { data } = await SUPABASE_API_CLIENT.from("workspace")
    .select("*")
    .eq("channelName", channelName);
  return data;
};
