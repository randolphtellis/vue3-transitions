/**
 * Cannot be reused as es6 does not import comments used for storybook props desc
 * Good to keep for lib export
 * */
export const props = {
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
   * Accepts `center` `left` `right` `top` `bottom`
   */
  entry: {
    type: String,
    default: 'center',
    validator: (value: string) => ['center', 'left', 'right', 'top', 'bottom'].includes(value),
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
}