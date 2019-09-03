/**
 * @name topbar
 * @author jardenliu jarden@qq.com
 * @createDate 2019/9/2 上午11:37:59
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './topbar.vue'
import { ipcRenderer as IPC } from 'electron'

@Component({
  mixins: [template],
  components: {}
})
export default class Topbar extends Vue {
  broadcastIPCEvent(event: string) {
    IPC.send(event)
  }
}
