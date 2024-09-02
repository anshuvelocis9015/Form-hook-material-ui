// import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth';
import DisplayFormData from './components/displayFormData';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <h1>Form Hook</h1>
      <Form />
      <DisplayFormData />
      <Auth />
    </div>
  );
}

export default App;
