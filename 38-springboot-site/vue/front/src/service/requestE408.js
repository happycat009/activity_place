import { request } from './axios'

/**
 * 根据 chi037 获取补贴项目
 * @param {String} chi037
 * @returns
 */
const requestE408 = (chi037) => {
    const data = {
        methodname: 'E408',
        chi037,
    }

    return new Promise((resolve, reject) => {
        request(
            '/frontRestService/frontCommonDataRestService/getData',
            data,
            'POST',
            false
        )
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
export { requestE408 }
