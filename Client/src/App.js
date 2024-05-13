import './App.css';
import Index from './components/index';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import { ThemeProvider } from './components/ThemeMode';





function App() {
  return (
<ThemeProvider>    
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
   </BrowserRouter>
   </ThemeProvider>
  );
}

export default App;
