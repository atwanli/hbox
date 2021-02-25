import axios from "axios"
const html = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    }
})
/**
 * axios 的修饰类,目前未对 axios 进行任何修饰
 *
 * @exports example/common/utils/HttpUtils
 */
export default html
