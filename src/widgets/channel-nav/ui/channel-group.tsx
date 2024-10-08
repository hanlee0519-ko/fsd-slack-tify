import Link from "next/link";
import { channelGroup, channelItem } from "./channel-group.css";

type ChannelItemProps = {
  path: string;
  item: { id: number; name: string };
};

type ChannelProps = {
  path: string;
  items: { id: number; name: string }[];
};

export const ChannelItem = ({ path, item: { id, name } }: ChannelItemProps) => {
  const href = id !== 0 ? path + "/" + name : path;

  return (
    <li>
      <Link href={href} className={channelItem}>
        {name}
      </Link>
    </li>
  );
};

export const ChannelGroup = ({ path, items }: ChannelProps) => {
  return (
    <ul className={channelGroup}>
      {items.map((item) => (
        <ChannelItem key={item.id} path={path} item={item} />
      ))}
    </ul>
  );
};
