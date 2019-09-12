declare module 'NeteaseCloudMusicApi/module/search' {
  import { Request, ResponceData } from 'NeteaseCloudMusicApi/util/request'
  export interface searchQuery {
    keywords: string
    type?: 1 | 10 | 100 | 1000 | 1002 | 1004 | 1006 | 1009 | 1014
    limit?: number
    offset?: number
  }

  export interface searchResponce extends ResponceData {
    body: {
      code: number
      result: {
        songCount: number
        songs?: any[]
      }
    }
  }

  export default function searchApi<S extends searchQuery, T extends Request>(
    query: S,
    request: T
  ): Promise<searchResponce>
}
