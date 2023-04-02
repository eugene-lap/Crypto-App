import './Table.scss'
import { cryptoConstants, iCryptoConstants } from '../../constants/cryptoConstants'
import {getSplittedPrise} from '../../utils'
import { useState } from 'react'
import { ModalWindow } from '../ModalWindow'

const Table = () => {
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

export default Table