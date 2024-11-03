import { renderHook, waitFor } from "@testing-library/react";
import * as SUPABASE_API from "@/src/entities/channel";
import { useChannel } from "./use-channel";

jest.mock("@/src/entities/channel");

const mockChannelList = [
  { id: 1, name: "Mock First-Channel" },
  { id: 2, name: "Mock Second-Channel" },
];

const mockGetChannel = () => {
  return jest
    .spyOn(SUPABASE_API, "getChannel")
    .mockResolvedValueOnce(mockChannelList);
};

test("useChannel 훅은 SUPABASE API 호출해, 배열('channelList') 반환한다.", async () => {
  mockGetChannel();
  const { result } = renderHook(() => useChannel());

  await waitFor(() => {
    const mockChannelList = result.current.channelList;
    expect(mockChannelList).toMatchObject([
      { id: 1, name: "Mock First-Channel" },
      { id: 2, name: "Mock Second-Channel" },
    ]);
  });
});

// ** 질문사항
test("useChannel 훅은 SUPABASE API 호출해, 새로운 채널이름을 등록할 수 있는 함수('addChannelList') 반환한다.", () => {
  // addChannelList 함수를 통해 사용자가 입력한 채널 이름을 새롭게 등록할 수 있다.
  // 해당 함수를 통해 새로운 채널 이름을 SUPABASE API에게 등록 요청을 할 수 있어야 한다.
});
