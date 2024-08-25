export const WorkspaceDetailPage = ({ slug }: { slug: string }) => {
  return (
    <>
      <h1>채널이름 : {decodeURIComponent(slug)}</h1>
    </>
  );
};
