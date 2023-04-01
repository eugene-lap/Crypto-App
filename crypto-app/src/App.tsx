import './styles/config/normalize.scss'
import './styles/config/reset.scss';
import './styles/App.scss';
import { BurgerMenu, PopularCrypto, PortfolioValue } from './components';

function App() {
  return (
   <div className='main-wrapper'>
    <header className="main-header">
    <div className="main-header__container">
    <BurgerMenu/>
    <PopularCrypto/>
    <PortfolioValue/>
    </div>
    </header>
    <main className="main">
    </main>
    <footer className="main-footer"></footer>
   </div>
  );
}

export default App;
