import { Briefcase } from "../../assets/Briefcase/Briefcase"
import './HeaderTittle.scss'

export const  HeaderTittle = (): JSX.Element => {
    return (
        <div className="portfolio-value">
            <p className="portfolio-value__content">Portfolio value: 134,32 USD +2,38 (1,80 %)</p>
            <Briefcase width={30} height={30} fill="black"/>
        </div>
    )
}