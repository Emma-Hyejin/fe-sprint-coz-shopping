import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const ModalOnOff = {
  args: {
    click: false,
  },
};

