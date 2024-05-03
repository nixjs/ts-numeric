import BigNumber from 'bignumber.js'

/**
 * Converts a value to a decimal representation with a specified number of decimal places.
 * @param {string | number} value - The value to convert.
 * @param {number} dec - The number of decimal places to include in the result.
 * @returns {string} The decimal representation of the value.
 */
const toDecimal = (value: string | number, dec: number) => {
    if (!value) return '0'
    if (!dec) return String(value)
    return new BigNumber(value).times(new BigNumber(10).pow(dec)).toFixed()
}

export default toDecimal
