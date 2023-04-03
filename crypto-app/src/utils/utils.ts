export const getSplittedPrise = (prise: string, watermark: string, reduction: number):string =>  `${(Number(prise).toFixed(reduction).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))} ${watermark}`

export const getConvertedPrise = (cryptoCount:number, cryptoPrise: string) => (cryptoCount*Number(cryptoPrise)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")

