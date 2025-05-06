import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Card from './Components/Card/Card';
import Stack from './Components/Stack/Stack';
import Contact from './Components/TouchComp/Contact';
function App() {

    return(
      <>
        <Header></Header>
        <Hero></Hero>
        <Card />
        <Stack />
        <Contact></Contact>
      </>
    )
}

export default App
