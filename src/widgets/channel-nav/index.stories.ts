import { Meta, StoryObj } from "@storybook/react";

import { ChannelNavigation } from "./ui/channel-nav";

const meta: Meta<typeof ChannelNavigation> = {
  component: ChannelNavigation,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ChannelNavigation>;

export const ChannelNav: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
