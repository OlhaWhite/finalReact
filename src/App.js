import './App.css';
import { Footer } from './Footer/Footer';

import Navbar from './Nav/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './Pages/AppRouter';




function App() {

  return (
    <div>
   
 <Navbar />

 <AppRouter />


<Footer/>

 
 </div>
  )
}

export default App;
