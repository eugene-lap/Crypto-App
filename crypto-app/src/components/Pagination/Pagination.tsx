import { iCryptoConstants } from "../../types/Interfaces";
import './Pagination.scss'

interface IPropsPagination {
    cryptoPerPage: number;
    totalCrypto: number;
    page: Function;
}

export const Pagination = ({cryptoPerPage, totalCrypto, page}: IPropsPagination) => {
    const pageNumber = []

    for (let i=1; i<= Math.ceil(totalCrypto/cryptoPerPage); i++){
        pageNumber.push(i)
    }
    return(
        <div>
            <ul className="pagination">
                {
                    pageNumber.map(number => (
                        <li className="page-item" key={number}>
                            <a className="page-link" href="#" onClick={() => page(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}