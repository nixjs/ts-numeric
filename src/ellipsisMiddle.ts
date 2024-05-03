/**
 * Returns a modified version of the input string with ellipsis in the middle.
 * @param {string} str - The input string.
 * @param {number} [start=0] - The starting index of the substring to include in the result.
 * @param {number} [end=7] - The ending index of the substring to include in the result.
 * @param {number} [limitEndChars=8] - The maximum number of characters to include at the end of the string.
 * @param {string} [separator='...'] - The separator to insert between the truncated parts of the string.
 * @returns The modified string with ellipsis in the middle.
 *
 * Example:
 * - 0x364707969DC3234F4B18DA8cE2b719eCfAC6609e => 0x36470...fAC6609e
 * - 0x36 => 0x36
 * - 0x365n => 0x365n
 */
const ellipsisMiddle = (str: string, start = 0, end = 7, limitEndChars = 8, separator = '...'): string => {
    if (!str) return ''
    const stLeng = str.length
    if (stLeng <= end) return str
    if (stLeng <= limitEndChars) return `${str.substring(start, end)}${separator}`
    return `${str.substring(start, end)}${separator}${str.substring(str.length - limitEndChars, str.length)}`
}

/**
 * The `ellipsisStart` function takes a string and returns a modified version of the string with
 * ellipsis at the start, if the string length exceeds a certain limit.
 * @param {string} str - The `str` parameter is a string that you want to apply the ellipsis to. It
 * represents the original string that you want to truncate.
 * @param [limitEndChars=4] - The `limitEndChars` parameter is the number of characters from the end of
 * the string that you want to keep. Any characters beyond this limit will be replaced with the
 * `separator` character.
 * @param [separator=*] - The `separator` parameter is a string that will be used to create the
 * ellipsis mask. It will be repeated multiple times to create a mask that is the same length as the
 * characters that are being replaced by the ellipsis.
 * @returns The function `ellipsisStart` returns a modified version of the input string `str`. If the
 * input string is empty or falsy, an empty string is returned. Otherwise, if the length of the input
 * string `str` is greater than the `limitEndChars`, the function returns a string with `limitEndChars`
 * number of characters from the end of the input string replaced with the `separator
 * 
 * Example:
 * - 90819371939775777999 => ***************7999
 */
export const ellipsisStart = (str: string, limitEndChars = 4, separator = '*'): string => {
    if (!str) return ''
    const stLeng = str.length
    const mskLeng = stLeng - limitEndChars
    const masks = [...new Array(mskLeng)].join(separator)
    return stLeng > limitEndChars ? masks + str.slice(mskLeng, stLeng) : str
}

export default ellipsisMiddle
