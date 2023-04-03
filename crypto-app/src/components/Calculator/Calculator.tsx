import { getSplittedPrise,getConvertedPrise } from "../../utils/utils"
import { iCryptoConstants } from "../../types/Interfaces"
import { useState } from "react"
import './Calculator.scss'

export const Calculator = ({cryptoActive}: {cryptoActive:iCryptoConstants}): JSX.Element => {
    const [cryptoPrise, setCryptoPrise] = useState(0)
    return (
        <div className="calculator">
                <p className="calculator__name">{cryptoActive.symbol} Price Calculator</p>
                <div className="calculator-form">
                    <input type="text" className="calculator-form__input" value={cryptoPrise} onChange={(event) => setCryptoPrise(+event.target.value)}/>
                    <div className="calculator-form-crypto">
                        <img src="#" alt="#" className="calculator-calculator-form-crypto__img" />
                        <p className="calculator-form-crypto__symdol">({cryptoActive.symbol})</p>
                    </div>
                    </div>
                    <div className="calculator-prise">
                        <label className="calculator-prise__active">{cryptoPrise}  {cryptoActive.symbol}= </label>
                        <p className="calculator-prise__convert">USD ${getConvertedPrise(cryptoPrise, cryptoActive.priceUsd)}</p>
                    </div>
                <button className="calculator__button">Buy {cryptoActive.symbol}</button>
            </div>
    )
}