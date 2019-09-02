/**
 * @name sidebar
 * @author jardenliu jarden@qq.com
 * @createDate 2019/9/2 上午11:38:10
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './sidebar.vue'

@Component({
  mixins: [template],
  components: {
  }
})
export default class Sidebar extends Vue {}
