export interface HTMLEvent<T extends EventTarget> extends Event {
  target: T
}

export interface Article {
  id?: number
  title?: string
  subTitle?: string
  imageUrl?: string
  categoryTag?: string[]
  content?: string
  createTimeStamp?: string
  updateTimeStamp?: string
  publicFlg?: boolean
  deleteFlg?: boolean
}
