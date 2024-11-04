import { Meta, StoryObj } from "@storybook/react";

import { ChannelGroup } from "./channel-group";

import { expect, userEvent, within } from "@storybook/test";
import { getRouter } from "@storybook/nextjs/navigation.mock";

const meta: Meta<typeof ChannelGroup> = {
  component: ChannelGroup,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  title: "ChannelGroup",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ChannelGroup>;

export const Default: Story = {
  args: {
    path: "test",
    items: [
      { id: 1, name: "First" },
      { id: 2, name: "Second" },
      { id: 3, name: "Third" },
    ],
  },
};

export const ChannelClicked: Story = {
  args: Default.args,

  async play({ canvasElement }) {
    const canvas = within(canvasElement);
    const firstLink = await canvas.findByText("First");

    await userEvent.click(firstLink);
    await expect(getRouter().push).toHaveBeenCalledWith("test/First", {
      scroll: true,
    });
  },
};
