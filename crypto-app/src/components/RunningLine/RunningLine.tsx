import Marquee from 'react-fast-marquee'
import './RunningLine.scss'
import { start } from 'repl'

export const RunningLine = (): JSX.Element => {
    return (
        <Marquee style={{justifyContent: 'space-between'}} className='popular-crypto'>
            <p className="popular-crypto__content">Bitcoin</p>
            <p className="popular-crypto__content">Bitcoin32</p>
            <p className="popular-crypto__content">Bitcoin24</p>
        </Marquee>
    )
}