export const getSplittedPrise = (prise: string, watermark: string, reduction: number) => {
    return `${(Number(prise).toFixed(reduction).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))} ${watermark}`
}