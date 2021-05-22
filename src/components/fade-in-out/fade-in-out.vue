<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue'
import BaseTransitionComponent from '../base/base-transition-component.vue'
import { EntryExitPropsType } from '../base/props/entry-exit-props-type'

export default defineComponent({
  name: 'fade-in-out',

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
     * Accepts `center` `left`
     */
    entry: {
      type: String,
      default: 'center',
    validator: (value: string) => ['center', 'left'].includes(value),
    },
    /**
     * The exit style animation type.
     * Accepts `center` `left` `right` `top` `bottom`
     */
    exit: {
      type: String,
      default: 'center',
    validator: (value: string) => ['center', 'left', 'right', 'top', 'bottom'].includes(value),
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

    const transitionType = ref('fio') // FadeInOut

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

.vt_fio {
  // Classic Fade in center and fade out center
  &-c-c-enter-active {
    transition: opacity ease-in;
  }

  &-c-c-leave-to {
    opacity: 0;
    transition: opacity ease-in;
  }

  &-c-c-enter-from {
    opacity: 0;
    transition: opacity ease-in;
  }
  &-c-c-enter-to,
  &-c-c-leave-from {
    opacity: 1;
  }

  // Fade in center fade out left
  &-c-l-enter-active {
    transition: opacity ease-in;
  }
  &-c-l-leave-to {
    opacity: 0;
    transition: all ease-in;
    transform: translate3d(-10%, 0, 0);
  }
  &-c-l-enter-from {
    opacity: 0;
    transition: all ease-in;
    transform: translate3d(-10%, 0, 0);
  }
  &-c-l-enter-to,
  &-c-l-leave-from {
    opacity: 1;
  }

  // Fade in center fade out right
  &-c-r-enter-active {
    transition: opacity ease-in;
  }
  &-c-r-leave-to {
    opacity: 0;
    transition: all ease-in;
    transform: translate3d(10%, 0, 0);
  }
  &-c-r-enter-from {
    opacity: 0;
    transition: all ease-in;
    transform: translate3d(10%, 0, 0);
  }
  &-c-r-enter-to,
  &-c-r-leave-from {
    opacity: 1;
  }

  // Fade in center fade out top
  &-c-t-enter-active {
    transition: opacity ease-in;
  }
  &-c-t-leave-to {
    opacity: 0;
    transition: all ease-in;
    transform: translate3d(0, -10%, 0);
  }
  &-c-t-enter-from {
    opacity: 0;
  }
  &-c-t-enter-to,
  &-c-t-leave-from {
    opacity: 1;
  }

  // Fade in center fade out bottom
  &-c-b-enter-active {
    transition: opacity ease-in;
  }
  &-c-b-leave-to {
    opacity: 0;
    transition: all ease-in;
    transform: translate3d(0, 10%, 0);
  }
  &-c-b-enter-from {
    opacity: 0;
    transition: all ease-in;
    transform: translate3d(0, 10%, 0);
  }
  &-c-b-enter-to,
  &-c-b-leave-from {
    opacity: 1;
  }

  // Fade in left fade out center
  &-l-c-enter-active {
    transition: all ease-in;
    transform: translate3d(-10%, 0, 0);
  }
  &-l-c-leave-to {
    opacity: 0;
    transition: all ease-in;
  }
  &-l-c-enter-from {
    opacity: 0;
  }
  &-l-c-enter-to,
  &-l-c-leave-from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  // Fade in left fade out left
  &-l-l-enter-active {
    transition: all ease-in;
    transform: translate3d(-10%, 0, 0);
  }
  &-l-l-leave-to {
    opacity: 0;
    transition: all ease-in;
    transform: translate3d(-10%, 0, 0);
  }
  &-l-l-enter-from {
    opacity: 0;
  }
  &-l-l-enter-to,
  &-l-l-leave-from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  // Fade in left fade out right
  &-l-r-enter-active {
    transition: all ease-in;
    transform: translate3d(-10%, 0, 0);
  }
  &-l-r-leave-to {
    opacity: 0;
    transition: all ease-in;
    transform: translate3d(10%, 0, 0);
  }
  &-l-r-enter-from {
    opacity: 0;
  }
  &-l-r-enter-to,
  &-l-r-leave-from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  // Fade in left fade out top
  &-l-t-enter-active {
    transition: all ease-in;
    transform: translate3d(-10%, 0, 0);
  }
  &-l-t-leave-to {
    opacity: 0;
    transition: all ease-in;
    transform: translate3d(0, -10%, 0);
  }
  &-l-t-enter-from {
    opacity: 0;
  }
  &-l-t-enter-to,
  &-l-t-leave-from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  // Fade in left fade out bottom
  &-l-b-enter-active {
    transition: all ease-in;
    transform: translate3d(-10%, 0, 0);
  }
  &-l-b-leave-to {
    opacity: 0;
    transition: all ease-in;
    transform: translate3d(0, 10%, 0);
  }
  &-l-b-enter-from {
    opacity: 0;
  }
  &-l-b-enter-to,
  &-l-b-leave-from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

</style>
