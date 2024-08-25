import {
  type ChannelListType,
  getChannel,
  createChannel,
} from "@/src/entities/channel";
import { useEffect, useState } from "react";

type ItemType = ChannelListType;

export const useChannel = () => {
  const [channelList, setChannelList] = useState<ItemType[]>([]);

  const getChannelList = async () => {
    let channels = await getChannel();

    if (channels === null) return;
    setChannelList(channels);
  };

  useEffect(() => {
    getChannelList();
  }, []);

  const addChannelList = async (channelName: string) => {
    await createChannel(channelName);
    await getChannelList();
  };

  return { channelList, addChannelList };
};
