/**
 * @name app
 * @author jardenliu jarden@qq.com
 * @createDate 2019/9/2 上午10:47:45
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './app.vue'
import Topbar from 'components/tags/topbar'
@Component({
  name: 'page-app',
  mixins: [template],
  components: {
    Topbar
  }
})
export default class App extends Vue {
  get currentPlatform() {
    return this.$store.state.currentPlatform
  }
}
