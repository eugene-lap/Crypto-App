import './Table.scss'
import { cryptoConstants} from '../../utils/constants/cryptoConstants'
import { iCryptoConstants } from '../../types/Interfaces'
import {getSplittedPrise} from '../../utils/utils'
import {useState, useEffect} from 'react'
import { ModalWindow } from '../ModalWindow/ModalWindow'
import axios from 'axios'
import { Pagination } from './Pagination'

export const Table = (): JSX.Element => {
    const [modalActive, setModalActive] = useState(false)
    const [cryptoActive, setCryptoActive] = useState({} as iCryptoConstants)
    const [currenPage, setCurrenPage] = useState(1)
    const [cryptoPerPage] = useState(7)



    const [cryptoChart, setCryptoChart] = useState([] as iCryptoConstants[]);

  useEffect(() => {
    axios
      .get('https://api.coincap.io/v2/assets')
      .then(data => {
        setCryptoChart(data.data.data)
      })
  }, [])

  const lastCryptoIndex = currenPage * cryptoPerPage
  const firstCryptoIndex = lastCryptoIndex - cryptoPerPage
  const currentCrypto = cryptoChart.slice(firstCryptoIndex, lastCryptoIndex)

  const paginate = (pageNumber : number) => setCurrenPage(pageNumber)


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
            currentCrypto.map((el: iCryptoConstants) => <tr className="table-line-crypto">
                <td className="table-line-crypto__content">{el.name} {el.symbol}</td>
                <td className="table-line-crypto__content">{getSplittedPrise(el.priceUsd, '$', 2)}</td>
                <td className="table-line-crypto__content">{getSplittedPrise(el.changePercent24Hr, '%', 2)}</td>
                <td className="table-line-crypto__content">{getSplittedPrise(el.marketCapUsd, '$', 0)}</td>
                <td className="table-line-crypto__content"><button className='table-line-crypto__btn' onClick={() => {setModalActive(true); setCryptoActive(el)}}></button></td>
            </tr> )
            }
            <Pagination cryptoPerPage={cryptoPerPage} totalCrypto={cryptoChart.length} page={paginate}/>
            <ModalWindow active = {modalActive} setActive={setModalActive} cryptoActive={cryptoActive}></ModalWindow>
        </table>
    )
}