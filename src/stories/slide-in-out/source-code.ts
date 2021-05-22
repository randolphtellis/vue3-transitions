export const singleSource = `
<button @click="slide = !slide">Trigger animation</button>

<SlideInOut
 v-bind="$props">
  <div v-if="slide">
    <!--  Place content here -->
  </div>
</SlideInOut>
`;

export const groupSource = `
/** template **/
<button @click="addItem">Add item</button>
<button @click="removeItem">Remove item</button>

<SlideInOut
 v-bind="$props">
  
  <!-- Group content must be keyed -->
  <div v-for="item in items" :key="item" class="list-item">
    {{ item }}
  </div>

</SlideInOut>
/** template **/

<style lang="css">
  .group-move-enter {
    transition: transform 800ms ease;
  }
  .group-move-leave {
    transition: transform 800ms ease;
    position: absolute;
  }
  .list-item {
    display: inline-block;
  }
</style>
`;