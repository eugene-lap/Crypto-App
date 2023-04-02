import {cryptoConstants, iCryptoConstants} from '../../constants/cryptoConstants'
import { useState, useEffect} from 'react'
import { MainSection } from './MainSection'
import { InformationSection } from './InformationSection'

const ActiveCryptoPage = () => {
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

export default ActiveCryptoPage