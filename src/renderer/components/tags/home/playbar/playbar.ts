/**
 * @name playbar
 * @author jardenliu jarden@qq.com
 * @createDate 2019/9/2 上午11:37:59
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './playbar.vue'

@Component({
  mixins: [template],
  components: {
  }
})
export default class Playbar extends Vue {}
