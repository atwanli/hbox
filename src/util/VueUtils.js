import Vue from "vue"
import axios from "./HttpUtils"
import VueAxios from "vue-axios"
import keyboard from "@/components/CFCAKeyboard"

Vue.use(VueAxios, axios)
Vue.use(keyboard, { eid: "full_keyboard" })
Vue.config.productionTip = false
export default Vue
