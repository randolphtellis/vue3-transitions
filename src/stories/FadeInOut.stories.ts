import { ref } from 'vue';
import FadeInOut from '../components/fade-in-out/fade-in-out.vue';

const entryExitValues = ['center', 'left', 'right', 'top', 'bottom'];

export default {
  title: 'FadeInOut/Default',
  component: FadeInOut,
  argTypes: {
    entry: { control: { type: 'select', options: entryExitValues }, defaultValue: 'center' },
    exit: { control: { type: 'select', options: entryExitValues },  defaultValue: 'center' },
    duration: { control: { type: 'text'}, defaultValue: '0.5s' }
  },
};

export const Default = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { FadeInOut },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const fade = ref(false)
    return { args, fade };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<button @click="fade = !fade">Trigger</button><fade-in-out v-bind="args" ><div v-if="fade"><h2>Fade In Out</h2></div></fade-in-out>',
});

export const FadeInCenterOutLeft = Default.bind({});
FadeInCenterOutLeft.args = {
  entry: 'center',
  exit: 'left',
};

export const FadeInCenterOutRight = Default.bind({});
FadeInCenterOutRight.args = {
  entry: 'center',
  exit: 'right',
};

export const FadeInCenterOutTop = Default.bind({});
FadeInCenterOutTop.args = {
  entry: 'center',
  exit: 'top',
};

export const FadeInCenterOutBottom = Default.bind({});
FadeInCenterOutBottom.args = {
  entry: 'center',
  exit: 'bottom',
};
