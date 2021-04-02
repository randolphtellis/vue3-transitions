export const props = {
  /**
   * Duration of the entry/exit animations in milliseconds
   */
  duration: {
    type: Number,
    default: 500,
  },
  entry: {
    type: String,
    default: 'center',
    validator: (value: string) => ['center', 'left', 'right', 'top', 'bottom'].includes(value),
  },
  exit: {
    type: String,
    default: 'center',
    validator: (value: string) => ['center', 'left', 'right', 'top', 'bottom'].includes(value),
  },
  mode: {
    type: String,
    required: false,
    validator: (value: string) => ['out-in', 'in-out'].includes(value),
  },
}