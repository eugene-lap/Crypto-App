import './ModalWindow.scss'
import { Calculator } from '../Calculator'
import { iCryptoConstants } from "../../constants/cryptoConstants"
import { useEffect } from 'react'

interface IModal {
    active: boolean,
    setActive: Function,
    cryptoActive: iCryptoConstants
}

const ModalWindow =({active, setActive, cryptoActive}: IModal) =>{
    const onKeydown = ({key} : KeyboardEvent) =>{
        if(key === 'Escape'){
            setActive(false)
        }
    }
    useEffect(()=>{
        document.addEventListener('keydown', onKeydown)
        return ()=>{
            document.removeEventListener('keydown', onKeydown)
        }
    })
    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                <button className="modal-header__close" onClick={() => setActive(false)}>Close</button>
                </div>
                <Calculator cryptoActive={cryptoActive}/>
            </div>
        </div>
    )
}

export default ModalWindow;