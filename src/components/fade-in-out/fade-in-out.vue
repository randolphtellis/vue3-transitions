<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import BaseTransitionComponent from '../base/base-transition-component.vue'
import { EntryExitPropsType } from '../base/props/entry-exit-props-type'
import { props } from '../base/props/entry-exit-props'

export default defineComponent({
  name: 'fade-in-out',

  components: { BaseTransitionComponent },

  props,

  setup(props: EntryExitPropsType) {

    const transitionType = ref('fio') // FadeInOut

    const transitionName = computed(() => `vt_${transitionType.value}-${props.entry}-${props.exit}`)

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

<style scoped lang="scss">

.vt_fio {
  // Classic Fade in center and fade out center
  &-center-center-enter-active,
  &-center-center-leave-active {
    transition: opacity ease-in;
  }

  &-center-center-enter-from,
  &-center-center-leave-to {
    opacity: 0;
  }
  &-center-center-enter-to,
  &-center-center-leave-from {
    opacity: 1;
  }

  // Fade in center fade out left
  &-center-left-enter-active {
    transition: opacity ease-in;
  }
  &-center-left-enter-from,
  &-center-left-leave-to {
    opacity: 0;
    transform: translate3d(-10%, 0, 0);
  }
  &-center-left-enter-to,
  &-center-left-leave-from {
    opacity: 1;
  }

  // Fade in center fade out right
  &-center-right-enter-active {
    transition: opacity ease-in;
  }
  &-center-right-enter-from,
  &-center-right-leave-to {
    opacity: 0;
    transform: translate3d(10%, 0, 0);
  }
  &-center-right-enter-to,
  &-center-right-leave-from {
    opacity: 1;
  }

  // Fade in center fade out top
  &-center-top-enter-active {
    transition: opacity ease-in;
  }
  &-center-top-enter-from,
  &-center-top-leave-to {
    opacity: 0;
    transform: translate3d(0, -10%, 0);
  }
  &-center-top-enter-to,
  &-center-top-leave-from {
    opacity: 1;
  }

  // Fade in center fade out bottom
  &-center-bottom-enter-active {
    transition: opacity ease-in;
  }
  &-center-bottom-enter-from,
  &-center-bottom-leave-to {
    opacity: 0;
    transform: translate3d(0, 10%, 0);
  }
  &-center-bottom-enter-to,
  &-center-bottom-leave-from {
    opacity: 1;
  }

  // Fade in left fade out center
  &-left-center-enter-active {
    transition: all ease-in;
    transform: translate3d(-10%, 0, 0);
  }
  &-left-center-leave-active {
    transition: opacity ease-in;
  }
  &-left-center-enter-from,
  &-left-center-leave-to {
    opacity: 0;
  }
  &-left-center-enter-to,
  &-left-center-leave-from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  // Fade in left fade out left
  &-left-left-enter-from,
  &-left-left-leave-to {
    opacity: 0;
    transform: translate3d(-10%, 0, 0);
  }
  &-left-left-enter-to,
  &-left-left-leave-from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  // Fade in left fade out right
  &-left-right-enter-active {
    transition: all ease-in;
    transform: translate3d(-10%, 0, 0);
  }
  &-left-right-leave-to {
    opacity: 0;
    transition: all ease-in;
    transform: translate3d(10%, 0, 0);
  }
  &-left-right-enter-from {
    opacity: 0;
  }
  &-left-right-enter-to,
  &-left-right-leave-from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  // Fade in left fade out top
  &-left-top-enter-active {
    transition: all ease-in;
    transform: translate3d(-10%, 0, 0);
  }
  &-left-top-leave-to {
    opacity: 0;
    transition: all ease-in;
    transform: translate3d(0, -10%, 0);
  }
  &-left-top-enter-from {
    opacity: 0;
  }
  &-left-top-enter-to,
  &-left-top-leave-from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  // Fade in left fade out bottom
  &-left-bottom-enter-active {
    transition: all ease-in;
    transform: translate3d(-10%, 0, 0);
  }
  &-left-bottom-leave-to {
    opacity: 0;
    transition: all ease-in;
    transform: translate3d(0, 10%, 0);
  }
  &-left-bottom-enter-from {
    opacity: 0;
  }
  &-left-bottom-enter-to,
  &-left-bottom-leave-from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }


}

</style>
