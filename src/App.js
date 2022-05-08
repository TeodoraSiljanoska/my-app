import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Message from './Message';
import Profile from './Profile';
import Counter from "./Counter";



function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <Profile name="Teodora" lastname="Siljanoska"/>
      <Message messagetxt="Ova e poraka za Zdravo!"/>
      <Counter/>


    </div>
  );
}

export default App;
