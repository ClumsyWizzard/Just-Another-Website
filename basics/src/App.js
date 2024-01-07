import './App.css';
import { Routes, Route } from 'react-router-dom';
import { TodoWrapper } from './components/TodoWrapper';
import Form from './Next/from';
import Cards from './components/card';


function App() {
  
    
  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<TodoWrapper  /> } />
      <Route path="/cards" element={<Cards/>} />
      <Route path="/form" element={<Form/>} />
      </Routes>
    </div>
    
  );
}

export default App;
