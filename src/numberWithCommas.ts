/**
 * Formats a number with commas for better readability.
 * @param {string | number} value - The number to format.
 * @returns The formatted number with commas.
 */
const numberWithCommas = (value: string | number, isFr?: boolean) => {
    const n = isFr ? String(value).replace('.', ',') : String(value)
    const divided = isFr ? '.' : ','
    let regex = /\d(?=(?:\d{3})+(?:\.|$))/g
    let p = n.indexOf('.')
    if (isFr) {
        regex = /\d(?=(?:\d{3})+(?:,|$))/g
        p = n.indexOf(',')
    }

    return n.replace(new RegExp(regex), (m, i) => (p < 0 || i < p ? `${m}${divided}` : m))
}

export default numberWithCommas
