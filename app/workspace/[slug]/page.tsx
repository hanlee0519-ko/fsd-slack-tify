import { WorkspaceDetailPage } from "@/src/routes/workspace-page/ui/workspaceDetail-page";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <WorkspaceDetailPage slug={slug} />;
}
