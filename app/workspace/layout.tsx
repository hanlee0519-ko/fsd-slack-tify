import { WorkspaceChannel } from "@/src/pages/workspace-page";

export default async function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <WorkspaceChannel />
      </div>
      <main>{children}</main>
    </div>
  );
}
