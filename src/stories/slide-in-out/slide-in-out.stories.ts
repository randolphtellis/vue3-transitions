import { ref } from 'vue'
import '../css/page.scss'
import { Meta } from '@storybook/vue3'
import SlideInOut from '../../components/slide-in-out/slide-in-out.vue'
import { templateSourceCode } from '../utilities/template-source'
import { singleSource, groupSource } from './source-code'

const entryValues = ['left', 'right'];
const exitValues = ['left', 'right', 'top', 'bottom'];

export default {
  title: 'Entry & Exit Animations/SlideInOut',
  component: SlideInOut,
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

export const SingleSlide = (args: any, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SlideInOut },
  setup() {
    const slide = ref<boolean>(true)

    const autoTrigger = () => {
      slide.value = !slide.value
    }

    return { args, slide, autoTrigger }
  },
  template: `
  <div>
    <button class="story-buttons" @click="autoTrigger">Trigger animation</button>
    <div class="single-wrap">
      <SlideInOut v-bind="args">
        <div v-if="slide" class="card single-item"></div>
      </SlideInOut>
    </div>
  </div>
  `
});

SingleSlide.args = {
  entry: 'left',
  exit: 'right',
  duration: 800,
  appear: true
};


SingleSlide.parameters = {
  docs: { source: { code: templateSourceCode(singleSource, SingleSlide.args) } },
};

export const GroupSlide = (args: any) => {

  return {
    components: { SlideInOut },
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
      <SlideInOut v-bind="args" class="group-wrap">
        <div v-for="(item, i) in items.slice().reverse()" class="card group-item" :key="item"></div>
      </SlideInOut>
    </div>
    `
  };
};


GroupSlide.args = {
  entry: 'left',
  exit: 'top',
  duration: 700,
  group: true,
  tag: 'div',
  'move-class': 'group-move-enter',
  'leave-active-class': 'group-move-leave'
};

GroupSlide.parameters = {
  docs: { source: { code: templateSourceCode(groupSource, GroupSlide.args) } },
};
