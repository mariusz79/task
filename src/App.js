import Dropdown from "./components/Dropdown/Dropdown";
import Expenses from "./components/Expenses/Expenses";

import './App.css';

const App = () => {
  return (
    <div className="container">
      <Dropdown />
      <Expenses />
    </div>
  );
};

export default App;
