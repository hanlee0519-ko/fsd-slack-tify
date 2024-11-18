import "@testing-library/jest-dom";

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
