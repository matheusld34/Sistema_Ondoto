
/**
 * Converte um valor em reais (formato brasileiro) para centavos.
 * @param {string} amount - Valor em reais no formato "1.234,56"
 * @returns {number} Valor em centavos
 * @example
 * convertRealToCents("1.234,56") // retorna 123456
 */
export function convertRealToCents(amount: string) {
    const numericPrice = parseFloat(amount.replace(/\./g, '').replace(',', '.'));
    const priceInCents = Math.round(numericPrice * 100);
    return priceInCents;
}