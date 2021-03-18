import { ref } from 'vue';
import FadeInOut from '../components/fade-in-out/fade-in-out.vue';

export default {
  title: 'FadeInOut/Default',
  component: FadeInOut,
  argTypes: {
    entry: { control: { type: 'select', options: ['center', 'left', 'right', 'top', 'bottom'] } },
    exit: { control: { type: 'select', options: ['center', 'left', 'right', 'top', 'bottom'] } }
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
  template: '<button @click="fade = !fade">Trigger</button><fade-in-out v-bind="args" ><div v-if="fade" class="box" style="margin:50px 25%;height:250px;width:100px;background:red;">FadeInOut-center-center</div></fade-in-out>',
});

export const Primary = Default.bind({});
Primary.args = {
  entry: { control: { type: 'select', options: ['center', 'left', 'right', 'top', 'bottom'] } },
  exit: { control: { type: 'select', options: ['center', 'left', 'right', 'top', 'bottom'] } },
  duration: '0.5s'
};

export const Secondary = Default.bind({});
Secondary.args = {
  entry: { control: { type: 'select', options: ['center', 'left', 'right', 'top', 'bottom'] } },
  exit: { control: { type: 'select', options: ['center', 'left', 'right', 'top', 'bottom'] } },
  duration: '0.5s'
};
