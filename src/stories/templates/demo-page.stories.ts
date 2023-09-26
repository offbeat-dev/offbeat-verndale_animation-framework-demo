import type { Meta, StoryObj } from '@storybook/html';
import template from '../../html/templates/demo-page.hbs';
export type InviewProps = {
  items: {
    container?: {
      className?: string;
    };
    animatedElement: {
      title: string;
      className?: string;
      opacity?: string;
      translateX?: string;
      translateY?: string;
      scale?: string;
    };
  }[];
};

const meta: Meta<InviewProps> = {
  title: 'Demo Page',
  render: template,
  argTypes: {
    items: { control: 'object' }
  }
};

export default meta;
type Story = StoryObj<InviewProps>;

export const DemoPage: Story = {
  args: {
    items: [
      {
        container: {
          className: 'inview-section gold'
        },
        animatedElement: {
          title: 'Item 1',
          opacity: '0, 1',
          translateX: '-100, 0'
        }
      },
      {
        container: {
          className: 'inview-section purple'
        },
        animatedElement: {
          title: 'Item 2',
          opacity: '0, 1',
          translateX: '-100, 0'
        }
      },
      {
        container: {
          className: 'inview-section gold'
        },
        animatedElement: {
          className: 'fit-content',
          title: 'Item 3',
          scale: '1.5'
        }
      }
    ]
  },
  parameters: {
    layout: 'fullscreen'
  }
};
