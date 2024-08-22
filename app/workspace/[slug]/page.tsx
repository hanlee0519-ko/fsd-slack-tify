import { WorkspaceDetailPage } from "@/src/pages/workspace-page";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <WorkspaceDetailPage slug={slug} />;
}
