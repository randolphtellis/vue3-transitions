<div align="center">
<a target="_blank" href="https://randolphtellis.github.io/vue3-transitions"><img width="350" src="https://randolphtellis.github.io/vue3-transitions/static/media/vue3-transitions-logo.png"/></a>

[![Build Status](https://travis-ci.com/randolphtellis/vue3-transitions.svg?token=hXpsA9tqveCqkXWMHjxp&branch=main)](https://travis-ci.com/randolphtellis/vue3-transitions) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/vue3-transitions)](https://bundlephobia.com/result?p=vue3-transitions@latest) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/vue3-transitions) ![npm](https://img.shields.io/npm/dt/vue3-transitions)

![vue supported version](https://img.shields.io/badge/vue-3.x-brightgreen) [![npm](https://img.shields.io/npm/v/vue3-transitions)](https://www.npmjs.com/package/vue3-transitions/v/latest) [![NPM](https://img.shields.io/npm/l/vue3-transitions)](https://github.com/randolphtellis/vue3-transitions/blob/main/LICENSE.md)

#### <a target="_blank" href="https://randolphtellis.github.io/vue3-transitions">DEMO</a>

</div>

## Install

```bash
npm i vue3-transitions
or
yarn add vue3-transitions
```

## Usage

##### Demo code can be found under the docs section <a href="https://randolphtellis.github.io/vue3-transitions/?path=/docs/entry-exit-animations-fadeinout--single">here</a>.

### Import globally
```ts
import { createApp } from 'vue'
import App from './App.vue'
import Vue3Transitions from 'vue3-transitions'

const app = createApp(App)
app.use(Vue3Transitions)
app.mount('#app')
```

### Router view
##### Vue recommends using a transition `mode` - more info <a href="https://v3.vuejs.org/guide/transitions-enterleave.html#transition-modes">here</a>
```ts
<template>
  <router-view v-slot="{ Component }">
    <FadeInOut entry="left" exit="left" :duration="500" mode="out-in">
      <component :is="Component" />
    </FadeInOut>
  </router-view>
</template>

<script>
import { defineComponent } from 'vue'
import { FadeInOut } from 'vue3-transitions'

export default defineComponent({
  components: { FadeInOut }
})
</script>
```

### As a component
```ts
<template>
  <button @click="triggerFade = !triggerFade" >
    Trigger animation
  </button>
  <FadeInOut entry="left" exit="left" :duration="500">
    <h1 v-if="triggerFade">Fade in and out transition</h1>
  </FadeInOut>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { FadeInOut } from 'vue3-transitions'

export default defineComponent({
  components: { FadeInOut },
  setup() {
    const triggerFade = ref(false)
    return {
      triggerFade
    }
  }
})
</script>
```

### Tree Shaking
#### Import components from the `esm` folder to enable tree shaking.
```ts
<script>
import { defineComponent } from 'vue'
import { FadeInOut } from 'vue3-transitions/esm'

export default defineComponent({
  components: { FadeInOut }
})
</script>
```

### Available components

1. FadeInOut - <a target="_blank" href="https://randolphtellis.github.io/vue3-transitions/?path=/story/entry-exit-animations-fadeinout--single">Single</a>, <a target="_blank" href="https://randolphtellis.github.io/vue3-transitions/?path=/story/entry-exit-animations-fadeinout--group">Group</a>
2. SlideInOut - <a target="_blank" href="https://randolphtellis.github.io/vue3-transitions/?path=/story/entry-exit-animations-slideinout--single">Single</a>, <a target="_blank" href="https://randolphtellis.github.io/vue3-transitions/?path=/story/entry-exit-animations-slideinout--group">Group</a>
3. ZoomInOut  (coming soon)
4. RollInOut  (coming soon)

...plus more coming soon
