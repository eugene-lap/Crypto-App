import { iCryptoConstants } from "../../../constants/cryptoConstants"
import { useState } from "react"
import { getSplittedPrise,getConvertedPrise } from "../../../utils"
import './MainSection.scss'
import { Chart } from "./Chart"

const MainSection = ({cryptoActive}: {cryptoActive: iCryptoConstants}) => {
    const [cryptoPrise, setCryptoPrise] = useState(0)
    return (
            <div className="section-main">
            <nav className="section-main-breadcrumb">
                <ul className="section-main-breadcrumb-link">
                    <li><a className="section-main-breadcrumb-link__main-page">Home</a></li>
                    <li className="section-main-breadcrumb-link__figure">{'>'}</li>
                    <li><a className="section-main-breadcrumb-link__active-page">{cryptoActive.name}</a></li>
                </ul>
            </nav>
        <div className="section-main-info">
            <div className="section-main-info-names">
            <div className="flex-container">
                <img src="#" alt="#" className="section-main-info-names__img" />
                <h3 className="section-main-info-names__name">{cryptoActive.name} Price</h3>
                <p className="section-main-info-names__symbol">({cryptoActive.symbol})</p>
                </div>
                <div className="flex-container">
                <p className="section-main-info-names__prise">{getSplittedPrise(cryptoActive.priceUsd, '$', 2)}</p>
                <p className="section-main-info-names__percent">{getSplittedPrise(cryptoActive.changePercent24Hr, '%', 2)}</p>
                </div>
            </div>
            <div className="flex-container-calc">
            <Chart/>
            <div className="section-main-calculator">
                <p className="section-main-calculator__name">{cryptoActive.symbol} Price Calculator</p>
                <div className="section-main-calculator-form">
                    <input type="text" className="section-main-calculator-form__input" value={cryptoPrise} onChange={(event) => setCryptoPrise(+event.target.value)}/>
                    <div className="section-main-calculator-form-crypto">
                        <img src="#" alt="#" className="section-main-calculator-calculator-form-crypto__img" />
                        <p className="section-main-calculator-form-crypto__symdol">({cryptoActive.symbol})</p>
                    </div>
                    </div>
                    <div className="section-main-calculator-prise">
                        <label className="section-main-calculator-prise__active">{cryptoPrise}  {cryptoActive.symbol}= </label>
                        <p className="section-main-calculator-prise__convert">USD ${getConvertedPrise(cryptoPrise, cryptoActive.priceUsd)}</p>
                    </div>
                <button className="section-main-calculator__button">Buy {cryptoActive.symbol}</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default MainSection