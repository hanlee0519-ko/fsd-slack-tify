import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import { ChannelGroup, ChannelItem } from "./channel-group";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

test("Props 전달 받은 items 갯수만큼 ChannelItem 컴포넌트가 생성된다", async () => {
  // (1) 3개의 item을 가진 items 배열을 Props로 전달한다
  const testItems = [
    { id: 0, name: "channel" },
    { id: 1, name: "first" },
    { id: 0, name: "second" },
  ];
  render(<ChannelGroup path="/test" items={testItems} />);

  // (2) 3개의 item만큼 ChannelItem 컴포넌트가 생성되었는지 검증한다.
  const itemComponents = screen.getAllByRole("list");
  expect(itemComponents).toHaveLength(3);
});

test("채널 이름을 클릭하면 해당 채널 이름으로 navigation 된다", async () => {
  // (1) 첫번째 채널 Item을 Props 전달하여 하나의 NavItem을 렌더링 한다
  const firstItem = { id: 1, name: "first" };
  render(<ChannelItem path="/workspace" item={firstItem} />, {
    wrapper: MemoryRouterProvider,
  });

  // (2) 사용자가 해당 채널 이름을 클릭하면, 해당 이름에 따른 URL로 navigation 된다
  const channelName = screen.getByText("first");
  await user.click(channelName);
  expect(mockRouter.asPath).toEqual("/workspace/first");
});
