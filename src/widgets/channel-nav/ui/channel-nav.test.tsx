import { renderHook, waitFor } from "@testing-library/react";
import { useGetChannels } from "@/src/shared/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

const handlers = [
  http.get("/channelList", () => {
    return HttpResponse.json({
      data: [
        { id: 1, name: "First" },
        { id: 2, name: "Second" },
        { id: 3, name: "Third" },
      ],
    });
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const createQueryClientWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

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

jest.mock("@/src/shared/supabase", () => ({
  createSupabaseBrowserClient: () => ({
    from: () => ({
      select: async () => {
        const response = await fetch("/channelList");
        return response.json();
      },
    }),
  }),
}));

test("Test for React-Query Hook - GET Method ", async () => {
  const { result } = renderHook(() => useGetChannels(), {
    wrapper: createQueryClientWrapper(),
  });

  await waitFor(() => expect(result.current).toHaveLength(4));
});
