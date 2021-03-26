import { onMounted, ref } from 'vue';
import { Meta } from '@storybook/vue3';
import SlideInOut from '../../components/slide-in-out/slide-in-out.vue';

const entryExitValues = ['left', 'right', 'top', 'bottom'];

export default {
  title: 'Entry & Exit Animations/SlideInOut/Default',
  component: SlideInOut,
  argTypes: {
    entry: { control: { type: 'select', options: entryExitValues }, defaultValue: 'left' },
    exit: { control: { type: 'select', options: entryExitValues },  defaultValue: 'right' },
    duration: { control: { type: 'number'}, defaultValue: 1000 }
  },
  parameters: {
    storybookCodePanel: {
        disabled: false,
        files: [
            {
                fileName: 'Example',
                language: 'html',
                code: require('!!raw-loader!./slide-in-out.example.html')
            }
        ]
    }
  }
} as Meta;

export const SlideInLeftOutRight = (args: any) => ({
  components: { SlideInOut },
  setup() {
    const slide = ref(false)

    const autoTrigger = () => {
      slide.value = !slide.value
    }

    onMounted(() => {
      autoTrigger();
      setInterval(() => {
        autoTrigger();
      }, args.duration + 400)
    })
    return { args, slide }
  },
  template: `
    <slide-in-out v-bind="args">
      <h1 v-if="slide">Slide In Out</h1>
    </slide-in-out>
  `,
});

export const SlideInLeftOutLeft = SlideInLeftOutRight.bind({});
SlideInLeftOutLeft.args = {
  entry: 'left',
  exit: 'left',
};

export const SlideInLeftOutTop = SlideInLeftOutRight.bind({});
SlideInLeftOutTop.args = {
  entry: 'left',
  exit: 'top',
};

export const SlideInLeftOutBottom = SlideInLeftOutRight.bind({});
SlideInLeftOutBottom.args = {
  entry: 'left',
  exit: 'bottom',
};

export const SlideInRightOutRight = SlideInLeftOutRight.bind({});
SlideInRightOutRight.args = {
  entry: 'right',
  exit: 'right',
};

export const SlideInRightOutLeft = SlideInLeftOutRight.bind({});
SlideInRightOutLeft.args = {
  entry: 'right',
  exit: 'left',
};

export const SlideInRightOutTop = SlideInLeftOutRight.bind({});
SlideInRightOutTop.args = {
  entry: 'right',
  exit: 'top',
};

export const SlideInRightOutBottom = SlideInLeftOutRight.bind({});
SlideInRightOutBottom.args = {
  entry: 'right',
  exit: 'bottom',
};
