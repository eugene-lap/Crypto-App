import Marquee from 'react-fast-marquee'
import './PopularCrypto.scss'
import { start } from 'repl'

const PopularCrypto = () => {
    return (
        <Marquee style={{justifyContent: 'space-between'}} className='popular-crypto'>
            <p className="popular-crypto__content">Bitcoin</p>
            <p className="popular-crypto__content">Bitcoin32</p>
            <p className="popular-crypto__content">Bitcoin24</p>
        </Marquee>
    )
}

export default PopularCrypto