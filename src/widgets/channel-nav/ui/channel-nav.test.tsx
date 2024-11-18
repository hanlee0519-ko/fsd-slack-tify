import { renderHook, waitFor } from "@testing-library/react";
import { useChannels } from "@/src/entities/channel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

const handlers = [
  http.get(
    "https://xmhlrtpwdnxooamdrfjg.supabase.co/rest/v1/channelList",
    () => {
      return HttpResponse.json([
        { id: 1, name: "First" },
        { id: 2, name: "Second" },
      ]);
    }
  ),
];
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const createQueryClientWrapper = () => {
  const queryClient = new QueryClient();

  return function QueryClientWrapper({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };
};

test("channel List form Custom Hook", async () => {
  const { result } = renderHook(() => useChannels(), {
    wrapper: createQueryClientWrapper(),
  });

  await waitFor(() => expect(result.current).toHaveLength(2));
});
