/**
 * @name home
 * @author jardenliu jarden@qq.com
 * @createDate 2019/9/2 上午11:31:23
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './home.vue'
import Sidebar from 'components/tags/home/sidebar'
import Playbar from 'components/tags/home/playbar'
import MainContainer from 'components/tags/home/main'

@Component({
  mixins: [template],
  components: {
    Sidebar,
    MainContainer,
    Playbar
  }
})
export default class Home extends Vue {}
