import './App.scss';
import BodyHeader from './components/BodyHeader/bodyHeader';
import Charts from './components/Charts/charts';

import Header from './components/Header/header'
import SideMenu from './components/SideMenu/sideMenu';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <section className='body-section'>
        <SideMenu></SideMenu>
        <div className="body-container">
          <BodyHeader></BodyHeader>
          <Charts></Charts>
        </div>
      </section>
    </div>
  );
}

export default App;
