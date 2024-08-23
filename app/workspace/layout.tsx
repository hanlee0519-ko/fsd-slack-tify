import { ChannelNavigation } from "@/src/widgets/channel-group";

export default async function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <ChannelNavigation />
      </div>
      <main>{children}</main>
    </div>
  );
}
