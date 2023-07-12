import CategoryNavBar from '@/components/navbar/CategoryNavBar';
import { Meta } from '@storybook/react';

export default {
  title: 'Components/NavBar',
  component: CategoryNavBar,
  argTypes: {
    mode: {
      options: ['DarkMode', 'LightMode'],
      control: { type: 'radio' },
    },
  },
} as Meta;

export const CategoryNavigator = (args: any) => <CategoryNavBar {...args} />;
