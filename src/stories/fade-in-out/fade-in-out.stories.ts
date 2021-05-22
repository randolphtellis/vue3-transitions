import { ref } from 'vue'
import '../css/page.scss'
import { Meta } from '@storybook/vue3'
import FadeInOut from '../../components/fade-in-out/fade-in-out.vue'
import { templateSourceCode } from '../utilities/template-source'
import { singleSource, groupSource } from './source-code'

const entryValues = ['center', 'left'];
const exitValues = ['center', 'left', 'right', 'top', 'bottom'];

export default {
  title: 'Entry & Exit Animations/FadeInOut',
  component: FadeInOut,
  argTypes: {
    entry: { control: { type: 'select', options: entryValues } },
    exit: { control: { type: 'select', options: exitValues } },
    duration: { control: { type: 'object' }, defaultValue: { enter: 500, leave: 800 } },
    mode: { control: { type: 'select', required: false, options: ['out-in', 'in-out'] } },
    appear: { control: { type: 'boolean', required: false } },
    tag: { control: { type: 'text', required: false } },
    group: { control: { type: 'boolean', required: false } },
  },
} as Meta;

export const Single = (args: any, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FadeInOut },
  setup() {
    const fade = ref<boolean>(true)

    const autoTrigger = () => {
      fade.value = !fade.value
    }

    return { args, fade, autoTrigger }
  },
  template: `
  <div>
    <button class="story-buttons" @click="autoTrigger">Trigger fade</button>
    <div class="single-wrap">
      <FadeInOut v-bind="args">
        <div v-if="fade" class="card single-item"></div>
      </FadeInOut>
    </div>
  </div>
  `
});

Single.args = {
  entry: 'center',
  exit: 'center',
  duration: 800,
  appear: true
};


Single.parameters = {
  docs: { source: { code: templateSourceCode(singleSource, Single.args) } },
};

export const Group = (args: any) => {

  return {
    components: { FadeInOut },
    setup() {
      const items = ref<number[]>([1])

      const nextNum = ref<number>(10)

      const addItem = () => {
        items.value.push(nextNum.value++)
      }

      const removeItem = () => {
        if (items.value.length !== 1) {
          items.value.pop();
        }
      }

      return { args, items, addItem, removeItem }
    },
    template: `
    <div>
      <button class="story-buttons" @click="addItem">Add item</button>
      <button class="story-buttons" @click="removeItem">Remove item</button>
      <FadeInOut v-bind="args" class="group-wrap">
        <div v-for="(item, i) in items.slice().reverse()" class=" card group-item" :key="item"></div>
      </FadeInOut>
    </div>
    `
  };
};


Group.args = {
  entry: 'left',
  exit: 'bottom',
  duration: 700,
  group: true,
  tag: 'div',
  'move-class': 'group-move-enter',
  'leave-active-class': 'group-move-leave'
};

Group.parameters = {
  docs: { source: { code: templateSourceCode(groupSource, Group.args) } },
};
