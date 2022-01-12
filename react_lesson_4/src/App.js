
import { Header } from './Components/Partials/Header/Header'
import { Nav } from './Components/Partials/Nav/Nav'
import { Main } from './Components/Partials/Main/Main'
import { Footer } from './Components/Partials/Footer/Footer'
import Style from './Components/Partials/App/app.module.scss'

function App() {
  return (
    <div className={Style.container}>
      <Header/>
      <div className={Style.gridcontainer}>
      <Nav/>
      <Main/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
