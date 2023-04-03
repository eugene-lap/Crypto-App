import { IBurger } from "./Burger.type"

export const Burger = ({ active, callback }:IBurger): JSX.Element => {
    return(
        <div className="burger" data-active={`${active}`} onClick = {()=>callback()}>
            <div className="burger__stripe1"></div>
            <div className="burger__stripe2"></div>
            <div className="burger__stripe3"></div>
      </div>
    )
}