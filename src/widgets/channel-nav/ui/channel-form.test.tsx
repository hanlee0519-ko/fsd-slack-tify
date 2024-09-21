import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChannelForm } from "./channel-form";

const user = userEvent.setup();

test("ChannelForm에 대해 검증한다", async () => {
  const mockFn = jest.fn();
  render(<ChannelForm onSubmit={mockFn} />);

  // (1) 사용자가 등록을 원하는 채널 이름을 입력한다.
  const inputChannel = screen.getByRole("textbox");
  const valueChannel = "TEXT";
  await user.type(inputChannel, valueChannel);

  // (2) 해당 채널 등록을 위해 추가 Button을 클릭한다.
  const addBtn = screen.getByRole("button", { name: "추가" });
  await user.click(addBtn);

  // (3) Button을 클릭함에 따라 onSubmit 이벤트 핸들러에 등록된 콜백함수가 실행된다.
  expect(mockFn).toHaveBeenCalledWith("TEXT");
});
