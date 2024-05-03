/**
 * Checks if a given number is a decimal.
 * @param {number} value - The number to check.
 * @returns {boolean} - True if the number is a decimal, false otherwise.
 */
/**
 * Checks if the key pressed in an input field is a valid number with decimals.
 * @param {React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>} e - The keyboard event object.
 * @returns {boolean} - True if the key is a valid number with decimals, false otherwise.
 */
const isInputNumberWithDecimals = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (
        ['ArrowRight', 'ArrowLeft', 'Backspace', 'Delete', 'Clear', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(
            e.key
        ) ||
        (e.metaKey && ['a', 'c', 'v', 'x'].includes(e.key))
    ) {
        return true
    }
    return false
}

export default isInputNumberWithDecimals
