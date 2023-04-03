import './styles/config/normalize.scss'
import './styles/config/reset.scss';
import './styles/App.scss';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import { RunningLine } from './components/RunningLine/RunningLine';
import {HeaderTittle} from './components/HeaderTittle/HeaderTittle';
import { Table } from './components/Table/Table';
import { ActiveCryptoPage } from './components/ActiveCryptoPage/ActiveCryptoPage';

function App() {
  return (
   <div className='main-wrapper'>
    <header className="main-header">
    <div className="main-header__container">
    <BurgerMenu/>
    <RunningLine/>
    <HeaderTittle/>
    </div>
    </header>
    <main className="main">
      <Table/>
      <ActiveCryptoPage/>
    </main>
    <footer className="main-footer"></footer>
   </div>
  );
}

export default App;
