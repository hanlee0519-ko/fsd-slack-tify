import { ChannelNavigation } from "@/src/widgets/channel-nav";

export default async function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <aside>
        <ChannelNavigation />
      </aside>
      <main>{children}</main>
    </>
  );
}
