<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { EntryExitPropsType } from './props/entry-exit-props-type'
import { props } from './props/entry-exit-props'

interface BaseUniqueProps {
  name: string
}

export type BasePropsType = BaseUniqueProps & EntryExitPropsType

export default defineComponent({
  name: 'base-transition-component',

  props: {
    ...props,
    name: {
      type: String,
      default: null,
      required: true
    }
  },

  setup(props: BasePropsType, { emit }) {

    /**
     * Removes the custom props so they aren't rendered within the HTML
     */
    const baseProps = computed(() => {

      const { ['entry']: entry, ...withoutEntry } = props;

      const { ['exit']: exit, ...withoutEntryExit } = withoutEntry;

      const { ['group']: group, ...defaultProps } = withoutEntryExit;
      
      return defaultProps;
    })

    const defaultDuration = ref(500)

    const durationObj = computed(() => {

      let enter = props.duration || defaultDuration.value
      let leave = props.duration || defaultDuration.value

      if (typeof props.duration === 'object') {
        enter = props.duration?.enter || defaultDuration.value
        leave = props.duration?.leave || defaultDuration.value
      }

      return {
        enter,
        leave
      }
    })

    const insertDuration = (el: HTMLElement) => {
      if (el) {
        if (props.group) {
          const slotItems = el.children
          for (let i = 0; i < slotItems.length; i++) {
            if ((slotItems[i] as HTMLElement)?.style) {
              (slotItems[i] as HTMLElement).style.transitionDuration = durationObj.value?.enter + 'ms'
            }
          }
        } else {
          if (el.style) {
            el.style.transitionDuration = durationObj.value?.enter + 'ms'
          }
        }
        emit('onEnter', el)
      }
    }

    const insertLeaveDuration = (el: HTMLElement) => {
      if (el) {
        if (props.group) {
          const slotItems = el.children
          for (let i = 0; i < slotItems.length; i++) {
              if ((slotItems[i] as HTMLElement)?.style) {
                (slotItems[i] as HTMLElement).style.transitionDuration = durationObj.value?.leave + 'ms'
              }
          }
        } else {
          if (el.style) {
            el.style.transitionDuration = durationObj.value?.leave + 'ms'
          }
        }
        emit('onLeave', el)
      }
    }

    return {
      baseProps,
      insertDuration,
      insertLeaveDuration
    }
  },
})
</script>

<template>
	<transition-group
    v-if="group"
    v-bind="baseProps"
    @enter="insertDuration($el)"
    @before-leave="insertLeaveDuration($el)"
    :name="name"
  >
    <!-- @slot The default slot -->
    <slot></slot>
  </transition-group>

  <transition
    v-else
    v-bind="baseProps"
    @enter="insertDuration($el)"
    @before-leave="insertLeaveDuration($el)"
    :name="name"
  >
    <!-- @slot The default slot -->
    <slot></slot>
  </transition>
</template>

