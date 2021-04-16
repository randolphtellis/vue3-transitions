export interface EntryExitPropsType {
  duration: number | { enter: number | null, leave: number| null }
  entry: string
  exit: string
  mode?: string
  appear?: boolean
  group?: boolean
  tag?: string
  persisted?: boolean
}