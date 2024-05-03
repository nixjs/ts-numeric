import BigNumber from 'bignumber.js'

/**
 * Converts a decimal value to a string representation with a specified number of decimal places.
 * @param {string | number} value - The decimal value to convert.
 * @param {number} dec - The number of decimal places to include in the result.
 * @returns {string} The converted decimal value as a string.
 */
const fromDecimal = (value: string | number, dec: number) => {
    if (!value) return '0'
    if (!dec) return String(value)
    return new BigNumber(value).div(BigNumber(10).pow(dec)).toFixed()
}

export default fromDecimal
