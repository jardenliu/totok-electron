/**
 * @name app
 * @author jardenliu jarden@qq.com
 * @createDate 2019/9/2 上午10:47:45
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './app.vue'

@Component({
  name: 'page-app',
  mixins: [template],
  components: {}
})
export default class App extends Vue {}
