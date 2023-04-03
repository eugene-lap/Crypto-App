import {cryptoConstants} from '../../utils/constants/cryptoConstants'
import { iCryptoConstants } from '../../types/Interfaces'
import { useState, useEffect} from 'react'
import { MainSection } from './MainSection/MainSection'
import { InformationSection } from './InformationSection/InformationSection'

export const ActiveCryptoPage = (): JSX.Element => {
    const [cryptoActive, setCryptoActive] = useState({} as iCryptoConstants)
    useEffect(() => {
        setCryptoActive(cryptoConstants.find((crypto) => String(crypto.name) === 'Bitcoin') || {} as iCryptoConstants)
    },[])
    return (
        <div>
            <MainSection cryptoActive={cryptoActive}/>
            <InformationSection cryptoActive={cryptoActive}/>
        </div>
    )
}