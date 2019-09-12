import search from 'NeteaseCloudMusicApi/module/search'
import request from 'NeteaseCloudMusicApi/util/request'

search({ keywords: 'helo' }, request).then(res => {
  console.log(res.body)
})
