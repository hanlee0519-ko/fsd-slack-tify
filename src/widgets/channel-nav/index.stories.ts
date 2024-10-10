import { Meta, StoryObj } from "@storybook/react";

import { ChannelNavigation } from "./ui/channel-nav";

const meta: Meta<typeof ChannelNavigation> = {
  component: ChannelNavigation,
};
export default meta;

type Story = StoryObj<typeof ChannelNavigation>;

// If you have the actions addon,
// you can interact with the links and see the route change events there
export const ChannelNav: Story = {
  parameters: {
    nextjs: {
      router: {
        pathname: "/profile/[id]",
        asPath: "/profile/1",
        query: {
          id: "1",
        },
      },
    },
  },
};
