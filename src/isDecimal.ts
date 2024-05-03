/**
 * Checks if a given number is a decimal.
 * @param {number} value - The number to check.
 * @returns {boolean} - True if the number is a decimal, false otherwise.
 */
const isDecimal = (value: number) => {
    return (value ^ 0) !== value
}

export default isDecimal
