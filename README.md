# vue3-transitions

Reusable Vue 3 component transitions.

## Install

```bash
npm i vue3-transitions
or
yarn add vue3-transitions
```

## Usage

### Import globally
```js
import { createApp } from 'vue'
import App from './App.vue'
import Vue3Transitions from 'vue3-transitions'

const app = createApp(App)
app.use(Vue3Transitions)
app.mount('#app')
```

### Router view
#### Vue recommends using a transition `mode` - more info <a href="https://v3.vuejs.org/guide/transitions-enterleave.html#transition-modes">here</a>
```js
<template>
  <router-view v-slot="{ Component }">
    <FadeInOut entry="left" exit="left" mode="out-in">
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
```js
<template>
  <button @click="triggerFade = !triggerFade" >
    Trigger animation
  </button>
  <FadeInOut entry="left" exit="left">
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
```js
<script>
import { defineComponent } from 'vue'
import { FadeInOut } from 'vue3-transitions/esm'

export default defineComponent({
  components: { FadeInOut }
})
</script>
```

### Available components

1. FadeInOut
2. SlideInOut (coming soon)
3. ZoomInOut  (coming soon)
4. RollInOut  (coming soon)

...plus more coming soon
