import BigNumber from 'bignumber.js';
/**
 * Converts a value to a fixed-size number with a specified precision.
 * @param {string | number | BigNumber} value - The value to convert.
 * @param {number} precision - The number of decimal places to include in the result.
 * @returns An object with properties representing different parts of the converted number:
 *          - int: The integer part of the number.
 *          - dec: The decimal part of the number.
 *          - dot: A string representing the decimal point.
 *          - full: The full converted number as a string.
 *          - num: The converted number as a string without any formatting.
 *
 * Example:
 *
 * - 100,000.345345 => {int: "0", dot: ".", dec: "00000000", full: "0.00000000"}
 *
 * - -124.67 => {int: "-134", dot: ".", dec: "67000", full: "-134.67000"}
 *
 * - 100000000.345345 => {int: "100,000", dot: "", dec: "", full: "100,000"}
 *
 * - 10000.689 => {int: "10,000", dot: ".", dec: "6890", full: "10,000.6890"}
 *
 * - 100 => {int: "100", dot: ".", dec: "000000", full: "100.000000"}
 *
 * - 1 => {int: "1", dot: ".", dec: "00000000", full: "1.00000000"}
 *
 * - -1 => {int: "-1", dot: ".", dec: "0000000", full: "-1.0000000"}
 *
 * - 1e+8 => {int: "100,000", dot: "", dec: "", full: "100,000"}
 *
 * - 0.0000000298 => {int: "0", dot: ".", dec: "00000002", full: "0.00000002"}
 *
 * - true => {int: "0", dot: ".", dec: "00000000", full: "0.00000000"}
 *
 * - false => {int: "0", dot: ".", dec: "00000000", full: "0.00000000"}
 *
 * - NaN => {int: "0", dot: ".", dec: "00000000", full: "0.00000000"}
 *
 * - abc => {int: "0", dot: ".", dec: "00000000", full: "0.00000000"}
 *
 * - null => {int: "0", dot: ".", dec: "00000000", full: "0.00000000"}
 *
 */
declare const toFixedSizeNumber: (value: string | number | BigNumber, precision: number) => {
    int: string;
    dec: string;
    dot: string;
    full: string;
    num: string;
};
export default toFixedSizeNumber;
