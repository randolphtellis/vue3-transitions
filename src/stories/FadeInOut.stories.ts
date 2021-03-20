import { onMounted, ref } from 'vue';
import { Meta } from '@storybook/vue3';
import FadeInOut from '../components/fade-in-out/fade-in-out.vue';

const entryExitValues = ['center', 'left', 'right', 'top', 'bottom'];

export default {
  title: 'FadeInOut/Default',
  component: FadeInOut,
  argTypes: {
    entry: { control: { type: 'select', options: entryExitValues }, defaultValue: 'center' },
    exit: { control: { type: 'select', options: entryExitValues },  defaultValue: 'center' },
    duration: { control: { type: 'number'}, defaultValue: 500 }
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
      <h1 v-show="fade">Fade In Out</h1>
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
