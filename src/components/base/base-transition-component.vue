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
        emit('onEnter', el)
        if (props.group) {
          const slotItems = el.children
          for (let i = 0; i < slotItems.length; i++) {
            (slotItems[i] as HTMLElement).style.transitionDuration = durationObj.value?.enter + 'ms'
          }
        } else {
          el.style.transitionDuration = durationObj.value?.enter + 'ms'
        }
      }
    }

    const insertLeaveDuration = (el: HTMLElement) => {
      if (el) {
        if (props.group) {
          const slotItems = el.children
          for (let i = 0; i < slotItems.length; i++) {
            (slotItems[i] as HTMLElement).style.transitionDuration = durationObj.value?.leave + 'ms'
          }
        } else {
          el.style.transitionDuration = durationObj.value?.leave + 'ms'
        }
        emit('onLeave', el)
      }
    }

    return {
      props,
      insertDuration,
      insertLeaveDuration
    }
  },
})
</script>

<template>
	<transition-group
    v-if="group"
    v-bind="props"
    @enter="insertDuration($el)"
    @before-leave="insertLeaveDuration($el)"
    :name="name"
  > 
    <slot></slot>
  </transition-group>

  <transition
    v-else
    v-bind="props"
    @enter="insertDuration($el)"
    @before-leave="insertLeaveDuration($el)"
    :name="name"
  >
    <slot></slot>
  </transition>
</template>

