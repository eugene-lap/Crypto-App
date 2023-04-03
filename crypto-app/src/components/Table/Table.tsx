import './Table.scss'
import { cryptoConstants} from '../../utils/constants/cryptoConstants'
import { iCryptoConstants } from '../../types/Interfaces'
import {getSplittedPrise} from '../../utils/utils'
import {useState} from 'react'
import { ModalWindow } from '../ModalWindow/ModalWindow'

export const Table = (): JSX.Element => {
    const [modalActive, setModalActive] = useState(false)
    const [cryptoActive, setCryptoActive] = useState({} as iCryptoConstants)
    return (
        <table className="table">
            <tr className="table-line-inform">
                <td className="table-line-inform__title">Name</td>
                <td className="table-line-inform__title">Last prise</td>
                <td className="table-line-inform__title">Change in 24h</td>
                <td className="table-line-inform__title">Capitalization</td>
                <td className="table-line-inform__title"></td>
            </tr>
            {
            cryptoConstants.map((el: iCryptoConstants) => <tr className="table-line-crypto">
                <td className="table-line-crypto__content">{el.name} {el.symbol}</td>
                <td className="table-line-crypto__content">{getSplittedPrise(el.priceUsd, '$', 2)}</td>
                <td className="table-line-crypto__content">{getSplittedPrise(el.changePercent24Hr, '%', 2)}</td>
                <td className="table-line-crypto__content">{getSplittedPrise(el.marketCapUsd, '$', 0)}</td>
                <td className="table-line-crypto__content"><button className='table-line-crypto__btn' onClick={() => {setModalActive(true); setCryptoActive(el)}}></button></td>
            </tr> )
            }
            <ModalWindow active = {modalActive} setActive={setModalActive} cryptoActive={cryptoActive}></ModalWindow>
        </table>
    )
}