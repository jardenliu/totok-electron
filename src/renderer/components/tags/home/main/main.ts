/**
 * @name main
 * @author jardenliu jarden@qq.com
 * @createDate 9/25/2019, 5:43:47 PM
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './main.vue'

@Component({
  mixins: [template],
  components: {
  }
})
export default class Main extends Vue {}
