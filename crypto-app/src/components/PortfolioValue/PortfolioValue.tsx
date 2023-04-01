import { Briefcase } from "../icons/Briefcase"
import './PortfolioValue.scss'

const PortfolioValue = () => {
    return (
        <div className="portfolio-value">
            <p className="portfolio-value__content">Portfolio value: 134,32 USD +2,38 (1,80 %)</p>
            <Briefcase width={30} height={30} fill="black"/>
        </div>
    )
}

export default PortfolioValue