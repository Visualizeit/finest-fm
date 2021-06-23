//@ts-check
const cloud = require('wx-server-sdk')
const crypto = require('crypto')
const { Buffer } = require('buffer')

cloud.init()

exports.main = async (event, context) => {
    delete event['userInfo']

    const { OPENID } = cloud.getWXContext()

    Object.assign(event, {
        device_id: OPENID,
    })

    const sortArray = dictionarySort(event)

    const url = parameterSplicing(sortArray)

    const base64Url = transformToBase64(url)

    const sha1Key = appSecret

    const byteArray = transformToSha1(sha1Key, base64Url)

    const md5 = transformtoMD5(byteArray)

    const fullUrl = '?' + url + '&sig=' + md5

    return {
        sortArray,
        url,
        base64Url,
        sha1Key,
        byteArray,
        md5,
        fullUrl,
    }
}

const appSecret = 'cf0b885827236cd64cad87ea265a3282'

/**
 * @param {Object} object
 */
const dictionarySort = (object) => {
    const result = []

    Object.keys(object)
        .sort()
        .forEach((key) => result.push([key, object[key]]))

    return result
}

/**
 * @param {string[][]} array
 */
const parameterSplicing = (array) => new URLSearchParams(array).toString()

/**
 * @param {string} string
 */
const transformToBase64 = (string) =>
    Buffer.from(string, 'utf-8').toString('base64')

/**
 * @param {string} key
 * @param {string} data
 */
const transformToSha1 = (key, data) => {
    const hmacSha1 = crypto.createHmac('sha1', key)
    hmacSha1.update(data)

    return hmacSha1.digest()
}

/**
 * @param {Buffer} data
 */
const transformtoMD5 = (data) => {
    const md5 = crypto.createHash('md5')

    return md5.update(data).digest('hex')
}
