import { renderHook, waitFor } from "@testing-library/react";
import { useTestChannels } from "@/src/entities/channel/api/get-channel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

const handlers = [
  http.get("/channelList", () => {
    return HttpResponse.json([
      { id: 1, name: "First" },
      { id: 2, name: "Second" },
      { id: 3, name: "Third" },
    ]);
  }),
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

test("Test for React-Query Hook - GET Method ", async () => {
  const { result } = renderHook(() => useTestChannels(), {
    wrapper: createQueryClientWrapper(),
  });

  await waitFor(() => expect(result.current).toHaveLength(3));
});
