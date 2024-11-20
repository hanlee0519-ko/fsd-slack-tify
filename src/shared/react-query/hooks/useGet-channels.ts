import { useQuery } from "@tanstack/react-query";
import { ChannelListType } from "../types";
import { QUERY_KEYS } from "../constants/query-keys";
import { getChannel } from "../api/get-channels";

export const useGetChannels = () => {
  const selectFn = (data: ChannelListType[]) => {
    return [{ id: 0, name: "Home" }, ...data];
  };

  const response = useQuery<ChannelListType[]>({
    queryKey: [QUERY_KEYS.channels],
    queryFn: () => getChannel(),
    select: (data) => selectFn(data),
  });

  const channels = response.data ? response.data : [];
  return channels;
};
