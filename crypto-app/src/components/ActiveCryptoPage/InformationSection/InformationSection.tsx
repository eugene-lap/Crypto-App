import './InformationSection.scss'
import { iCryptoConstants } from "../../../types/Interfaces"
import { getSplittedPrise,getConvertedPrise } from "../../../utils/utils"

export const InformationSection = ({cryptoActive}: {cryptoActive: iCryptoConstants}): JSX.Element => {
    return (
    <div className='information'>
        <h3 className="information__main-title">{cryptoActive.symbol} Price Live Data</h3>
        <p className="information__text">The live price of {cryptoActive.name} is {getSplittedPrise(cryptoActive.priceUsd, '$', 2)} per ({cryptoActive.symbol} / USD) today with a current market cap of {getSplittedPrise(cryptoActive.marketCapUsd, '$', 0)} USD. {cryptoActive.symbol} to USD price is updated in real-time. Bitcoin is {getSplittedPrise(cryptoActive.changePercent24Hr, '', 2)} percent in the last 24 hours. It has a circulating supply of {getSplittedPrise(cryptoActive.marketCapUsd, '$', 0)}.</p>
        <h3 className="information__title">{cryptoActive.symbol} Market Information</h3>
        <table className='information-table'>
            <tr className='information-table-line-inform'>
                <th className='information-table-line-inform__content'>Popularity</th>
                <th className='information-table-line-inform__content'>Market Cap</th>
                <th className='information-table-line-inform__content'>Price Change (24h)</th>
                <th className='information-table-line-inform__content'>Price USD</th>
                <th className='information-table-line-inform__content'>Max prise (24h)</th>
                <th className='information-table-line-inform__content'>Circulating Supply</th>
            </tr>
            <tr className='information-table-line-prise'>
                <td className='information-table-line-prise__content'>#{cryptoActive.rank}</td>
                <td className='information-table-line-prise__content'>{getSplittedPrise(cryptoActive.marketCapUsd,'$', 2)}</td>
                <td className='information-table-line-prise__content'>{getSplittedPrise(cryptoActive.changePercent24Hr,'%', 2)}</td>
                <td className='information-table-line-prise__content'>{getSplittedPrise(cryptoActive.priceUsd,'$', 2)}</td>
                <td className='information-table-line-prise__content'>{getSplittedPrise(cryptoActive.vwap24Hr, '$', 2)}</td>
                <td className='information-table-line-prise__content'>{getSplittedPrise(cryptoActive.supply, '$', 2)}</td>
            </tr>
        </table>
    </div>
    )
}