export const singleSource = `
<button @click="fade = !fade">Trigger fade</button>

<FadeInOut
 v-bind="$props">
  <div v-if="fade">
    <!--  Place content here -->
  </div>
</FadeInOut>
`;

export const groupSource = `
/** template **/
<button @click="addItem">Add item</button>
<button @click="removeItem">Remove item</button>

<FadeInOut
 v-bind="$props">
  
  <!-- Group content must be keyed -->
  <div v-for="item in items" :key="item" class="list-item">
    {{ item }}
  </div>

</FadeInOut>
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