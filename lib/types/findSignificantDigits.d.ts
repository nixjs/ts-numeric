/**
 * Finds the significant digits and text representation of a given value.
 * @param {string | number} value - The value to find the significant digits for.
 * @param {boolean} [isCommas=false] - Whether to include commas in the digit representation.
 * @returns An object containing the significant digit and text representation.
 *          - digit: The significant digit as a string or null if no significant digit exists.
 *          - text: The text representation or null if no text representation exists.
 *
 * Example:
 *
 * - 1e-8 => {digit: "0.00000001", text: ""}
 *
 * - 1000.1 => {digit: "1000.1", text: ""}
 *
 * - 1000 => {digit: "1000", text: ""}
 *
 * - 100.000.000 => {digit: null, text: null}
 *
 * - 100.000 => {digit: "100.", text: "000"}
 *
 * - 1000.000 => {digit: "1000.", text: "000"}
 *
 * - 1000.1000 => {digit: "1000.1", text: "000"}
 *
 * - true => {digit: null, text: null}
 *
 * - false => {digit: null, text: null}
 *
 * - NaN => {digit: null, text: null}
 *
 * - 0.0001 => {digit: "0.0001", text: ""}
 *
 * - 0.00010 => {digit: "0.0001", text: "0"}
 *
 * - 1e+8 => {digit: "1e+8", text: ""}
 *
 * - 1e-8 => {digit: "0.00000001", text: ""}
 *
 * - 0.000000000012130 => {digit: "0.00000000001213", text: "0"}
 */
declare const findSignificantDigits: (value: string | number, isCommas?: boolean) => {
    digit: string | null;
    text: string | null;
};
export default findSignificantDigits;
