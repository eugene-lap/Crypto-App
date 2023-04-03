import './burgerMenu.css'

export const Menu = ({visible}: { visible: boolean}): JSX.Element => {
    return (
        <ul className="menu" data-visible={`${visible}`}>
            {<li className='menu__item'>
            <a className='home link'>Home</a>
            <a className='add-post link'>Profile</a>
            </li>}
      </ul>
    )  
}