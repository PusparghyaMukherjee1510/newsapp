import logo from './logo.svg';
import NewsApp from './Components/newsApp';
import NavBar from './Components/navbar';
import LeftBar from './Components/leftbar';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <LeftBar/>
     <NewsApp/> 
     
    </div>
  );
}

export default App;
