const CFCAKeyboard = window.CFCAKeyboard
const KEYBOARD_TYPE_COMPLETE = window.KEYBOARD_TYPE_COMPLETE
export default {
    install(Vue, options) {
        if (this.installed) {
            return
        }
        this.installed = true
        if (!options || !options.eid) {
            console.error("配置项与eid是必须的")
            return
        }
        if (!CFCAKeyboard) {
            console.error("CFCAKeyboard必须的")
            return
        }
        let keyboard = new CFCAKeyboard(options.eid, KEYBOARD_TYPE_COMPLETE)

        keyboard.hideKeyboard()
        Vue.prototype.$CFCAKeyboard = keyboard
    }
}
