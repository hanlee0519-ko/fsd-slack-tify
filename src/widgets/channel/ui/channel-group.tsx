"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { channelGroup, channelItem } from "./channel-group.css";

type ChannelItemProps = {
  path: string;
  item: { id: number; name: string };
};

type ChannelProps = {
  path: string;
  items: { id: number; name: string }[];
};

const ChannelItem = ({ path, item: { id, name } }: ChannelItemProps) => {
  const href = id !== 0 ? path + "/" + name : path;
  const segment = useSelectedLayoutSegment();
  const decodeURLsegment = segment && decodeURIComponent(segment);

  return (
    <Link href={href} className={channelItem}>
      {name}
    </Link>
  );
};

export const ChannelGroup = ({ path, items }: ChannelProps) => {
  return (
    <div className={channelGroup}>
      {items.map((item) => (
        <ChannelItem key={item.id} path={path} item={item} />
      ))}
    </div>
  );
};
