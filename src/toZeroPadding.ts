import BigNumber from 'bignumber.js'

/**
 * Rounds a given value to a specified number of decimal places and returns the result as a string.
 * If the value is not a valid float number, null is returned.
 * @param {number} [value=0] - The value to round.
 * @param {number} [scale=4] - The number of decimal places to round to.
 * @returns {string | null} - The rounded value as a string, or null if the value is not a valid float number.
 * Example:
 *
 * - 0 ====> 0.0000
 *
 * - 1 ====> 1.
 *
 * - 0. ====> 0.0000
 *
 * - 1. ====> 1.0000
 *
 * - -1 ====> -1.0000
 *
 * - .1 ====> 0.1000
 *
 * - -.1 ====> -0.1000
 *
 * - -0.0001 ====> -0.0001
 *
 * - +0.0001 ====> 0.0001
 *
 * - 1.345345 ====> 1.3453
 *
 * - 10.23456789 ====> 10.2345
 *
 * - 1000.345345 ====> 1000.3453
 *
 * - -10.689 ====> -10.6890
 *
 * - 100 ====> 100.0000
 *
 * - 1e+8 ====> 100000000.0000
 *
 * - 1e-8 ====> 0.0000
 *
 * - true ====> null
 *
 * - false ====> null
 *
 * - NaN ====> null
 *
 * - string ====> null
 *
 * - null ====> null
 */
const toZeroPadding = (value = 0, scale = 4): string | null => {
    const regexFloatNumber = /^[+-]?\d*(\d*[.])?\d*$/
    const valueTrunc = new BigNumber(value)

    if (!regexFloatNumber.test(valueTrunc.toFixed())) {
        return null
    }

    const truncNumber = new BigNumber(10).exponentiatedBy(scale)
    const multiValue = valueTrunc.multipliedBy(truncNumber)
    const integerValue = new BigNumber(multiValue.toFixed(0, 3))
    const result = integerValue.dividedBy(truncNumber)

    const res = result.toFixed().split('.')
    if (res.length === 1 || res?.[1].length < scale) {
        return result.toFixed(scale)
    }
    return result.toFixed()
}

export default toZeroPadding
