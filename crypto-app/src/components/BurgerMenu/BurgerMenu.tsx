import Burger from './Burger'
import Menu from './Menu'
import { useState } from "react"

const BurgerMenu = () => {
    const [active, setActive] = useState(false)

    return (
        <div className="burger-menu">
            <Burger active={active} callback={()=>setActive(!active)}/>
            <Menu visible={active}/>
        </div>
     )    
}
export default BurgerMenu