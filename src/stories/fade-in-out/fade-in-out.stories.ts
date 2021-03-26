import { onMounted, ref } from 'vue';
import { Meta } from '@storybook/vue3';
import FadeInOut from '../../components/fade-in-out/fade-in-out.vue';

const entryExitValues = ['center', 'left', 'right', 'top', 'bottom'];

export default {
  title: 'Entry & Exit Animations/FadeInOut/Default',
  component: FadeInOut,
  argTypes: {
    entry: { control: { type: 'select', options: entryExitValues }, defaultValue: 'center' },
    exit: { control: { type: 'select', options: entryExitValues },  defaultValue: 'center' },
    duration: { control: { type: 'number'}, defaultValue: 1000 }
  },
  parameters: {
    storybookCodePanel: {
        disabled: false,
        files: [
            {
                fileName: 'Example',
                // Not needed if file extension was mapped globally, or file extension matches Prism language key
                language: 'html',
                code: require('!!raw-loader!./fade-in-out.example.html')
            }
        ]
    }
  }
} as Meta;

export const FadeInCenterOutCenter = (args: any) => ({
  components: { FadeInOut },
  setup() {
    const fade = ref(false)

    const autoTrigger = () => {
      fade.value = !fade.value
    }

    onMounted(() => {
      autoTrigger();
      setInterval(() => {
        autoTrigger();
      }, args.duration + 200)
    })
    return { args, fade }
  },
  template: `
    <fade-in-out v-bind="args">
      <h1 v-if="fade">Fade In Out</h1>
    </fade-in-out>
  `,
});

export const FadeInCenterOutLeft = FadeInCenterOutCenter.bind({});
FadeInCenterOutLeft.args = {
  entry: 'center',
  exit: 'left',
};

export const FadeInCenterOutRight = FadeInCenterOutCenter.bind({});
FadeInCenterOutRight.args = {
  entry: 'center',
  exit: 'right',
};

export const FadeInCenterOutTop = FadeInCenterOutCenter.bind({});
FadeInCenterOutTop.args = {
  entry: 'center',
  exit: 'top',
};

export const FadeInCenterOutBottom = FadeInCenterOutCenter.bind({});
FadeInCenterOutBottom.args = {
  entry: 'center',
  exit: 'bottom',
};

export const FadeInLeftOutCenter = FadeInCenterOutCenter.bind({});
FadeInLeftOutCenter.args = {
  entry: 'left',
  exit: 'center',
};

export const FadeInLeftOutLeft = FadeInCenterOutCenter.bind({});
FadeInLeftOutLeft.args = {
  entry: 'left',
  exit: 'left',
};

export const FadeInLeftOutRight = FadeInCenterOutCenter.bind({});
FadeInLeftOutRight.args = {
  entry: 'left',
  exit: 'right',
};

export const FadeInLeftOutTop = FadeInCenterOutCenter.bind({});
FadeInLeftOutTop.args = {
  entry: 'left',
  exit: 'top',
};

export const FadeInLeftOutBottom = FadeInCenterOutCenter.bind({});
FadeInLeftOutBottom.args = {
  entry: 'left',
  exit: 'bottom',
};
