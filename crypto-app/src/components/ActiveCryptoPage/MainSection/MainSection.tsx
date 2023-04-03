import { iCryptoConstants } from "../../../types/Interfaces"
import { useState } from "react"
import { getSplittedPrise,getConvertedPrise } from "../../../utils/utils"
import { Calculator } from "../../Calculator/Calculator"
import './MainSection.scss'
import { Chart } from "../../Chart/Chart"

export const MainSection = ({cryptoActive}: {cryptoActive: iCryptoConstants}): JSX.Element => {
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
            <Calculator cryptoActive={cryptoActive}/>
            </div>
        </div>
        </div>
    )
}