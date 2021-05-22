<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import BaseTransitionComponent from '../base/base-transition-component.vue'
import { EntryExitPropsType } from '../base/props/entry-exit-props-type'

export default defineComponent({
  name: 'slide-in-out',

  components: { BaseTransitionComponent },

  props: {
    /**
     * Specifies the duration of the transition in milliseconds. 
     * Also accepts separate values for enter and leave durations `e.g { enter: 500, leave: 800 }`
     */
    duration: {
      type: [Number, Object],
      default: 500,
    },
    /**
     * The entry style animation type. 
     * Accepts `left` `right`
     */
    entry: {
      type: String,
      default: 'left',
    validator: (value: string) => ['left', 'right'].includes(value),
    },
    /**
     * The exit style animation type.
     * Accepts left` `right` `top` `bottom`
     */
    exit: {
      type: String,
      default: 'left',
    validator: (value: string) => ['left', 'right', 'top', 'bottom'].includes(value),
    },
    /**
     * Whether to apply the transition on initial render.
     */
    appear: {
      type: Boolean,
      required: false,
    },
    /**
     * Controls the timing sequence of leaving/entering transitions. 
     * Accepts `out-in` or `in-out` 
     * Required when used with router-view. 
     * Only exposed when group is false
     */
    mode: {
      type: String,
      required: false,
      validator: (value: string) => ['out-in', 'in-out'].includes(value),
    },
    /**
     * Whether transition effects are for multiple elements/components. 
     * Every child in a group must be uniquely keyed for the animations to work properly.
     */
    group: {
      type: Boolean,
      required: false,
    },
    /**
     * If not defined, renders without a root element. 
     * Only usable if group is true.
     */
    tag: {
      type: String,
      required: false
    },
    /**
     * Speed up transitions by skipping hooks. 
     * Only to be used if elements are show/hidden, e.g v-show. 
     * Does not work if elements are inserted/removed, e.g v-if
     */
    persisted: {
      type: Boolean,
      required: false
    }
  },

  setup(props: EntryExitPropsType) {

    const transitionType = ref('sio') // SlideInOut

    const firstChar = (type: string): string => {
      return type.substring(0, 1)
    }

    const transitionName = computed(() => `vt_${transitionType.value}-${firstChar(props.entry)}-${firstChar(props.exit)}`)

    return {
      props,
      transitionType,
      transitionName,
    }
  },
})
</script>

<template>
  <BaseTransitionComponent
    v-bind="props"
    :name="transitionName"
  >
    <slot></slot>
  </BaseTransitionComponent>
  
</template>

<style lang="scss">

.vt_sio {
  // Slide in left slide out right
  &-l-r-enter-active {
    transition: all ease-in;
    transform: translate3d(-100%, 0, 0);
  }
  &-l-r-leave-active {
    transition: all ease-in;
    transform: translate3d(100%, 0, 0);
  }
  &-l-r-enter-to,
  &-l-r-leave-from {
    transition: all ease-in;
    transform: translate3d(0, 0, 0);
  }

  // Slide in left slide out left
  &-l-l-enter-active {
    transition: all ease-in;
    transform: translate3d(-100%, 0, 0);
  }
  &-l-l-leave-active {
    transition: all ease-in;
    transform: translate3d(-100%, 0, 0);
  }
  &-l-l-enter-to,
  &-l-l-leave-from {
    transform: translate3d(0, 0, 0);
  }

  // Slide in left slide out top
  &-l-t-enter-active {
    transition: all ease-in;
    transform: translate3d(-100%, 0, 0);
  }
  &-l-t-leave-active {
    transition: all ease-in;
    transform: translate3d(0, -100%, 0);
  }
  &-l-t-enter-to,
  &-l-t-leave-from {
    transform: translate3d(0, 0, 0);
  }

  // Slide in left slide out bottom
  &-l-b-enter-active {
    transition: all ease-in;
    transform: translate3d(-100%, 0, 0);
  }
  &-l-b-leave-active {
    transition: all ease-in;
    transform: translate3d(0, 100%, 0);
  }
  &-l-b-enter-to,
  &-l-b-leave-from {
    transform: translate3d(0, 0, 0);
  }

  // Slide in right slide out right
  &-r-r-enter-active {
    transition: all ease-in;
    transform: translate3d(100%, 0, 0);
  }
  &-r-r-leave-active {
    transition: all ease-in;
    transform: translate3d(100%, 0, 0);
  }
  &-r-r-enter-to,
  &-r-r-leave-from {
    transform: translate3d(0, 0, 0);
  }

  // Slide in right slide out left
  &-r-l-enter-active {
    transition: all ease-in;
    transform: translate3d(100%, 0, 0);
  }
  &-r-l-leave-active {
    transition: all ease-in;
    transform: translate3d(-100%, 0, 0);
  }
  &-r-l-enter-to,
  &-r-l-leave-from {
    transform: translate3d(0, 0, 0);
  }

  // Slide in right slide out top
  &-r-t-enter-active {
    transition: all ease-in;
    transform: translate3d(100%, 0, 0);
  }
  &-r-t-leave-active {
    transition: all ease-in;
    transform: translate3d(0, -100%, 0);
  }
  &-r-t-enter-to,
  &-r-t-leave-from {
    transform: translate3d(0, 0, 0);
  }

  // Slide in right slide out bottom
  &-r-b-enter-active {
    transition: all ease-in;
    transform: translate3d(100%, 0, 0);
  }
  &-r-b-leave-active {
    transition: all ease-in;
    transform: translate3d(0, 100%, 0);
  }
  &-r-b-enter-to,
  &-r-b-leave-from {
    transform: translate3d(0, 0, 0);
  }
}
</style>
