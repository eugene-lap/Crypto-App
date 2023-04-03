import {Burger} from './Burger'
import {Menu} from './Menu'
import { useState } from "react"

export const BurgerMenu = (): JSX.Element => {
    const [active, setActive] = useState(false)

    return (
        <div className="burger-menu">
            <Burger active={active} callback={()=>setActive(!active)}/>
            <Menu visible={active}/>
        </div>
     )    
}
export default BurgerMenu