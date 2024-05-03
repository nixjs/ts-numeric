/**
 * Counts the number of decimal places in a given number or string representation of a number.
 * @param {number | string} value - The number or string representation of a number to count decimal places for.
 * @returns {number} The number of decimal places in the given value. Returns 0 if the value is not a valid number or does not have decimal places.
 */
const countDecimals = (value: number | string) => {
    if (!isNaN(parseFloat(String(value))) && isFinite(Number(value)) && Number(value) % 1 !== 0)
        return value.toString().split('.')[1].length
    return 0
}

export default countDecimals
