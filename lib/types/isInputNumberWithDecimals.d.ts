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
declare const isInputNumberWithDecimals: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => boolean;
export default isInputNumberWithDecimals;
