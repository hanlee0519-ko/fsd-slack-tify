import { render, screen } from "@testing-library/react";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import { ChannelGroup } from "./channel-group";

test("NextLink can be rendered", () => {
  render(
    <ChannelGroup
      path="/workspace"
      items={[
        { id: 1, name: "First" },
        { id: 2, name: "Second" },
      ]}
    />,
    {
      wrapper: MemoryRouterProvider,
    }
  );

  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(2);
});
