export interface HTMLEvent<T extends EventTarget> extends Event {
  target: T
}

export class Article {
  id: number
  title?: string
  subTitle?: string
  imageURL?: string
  categoryTag?: string
  content?: string
  createTimeStamp?: string
  updateTimeStamp?: string
  publicFlg?: boolean
  deleteFlg?: boolean
}
