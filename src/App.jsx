import { useState } from "react";
import PropTypes from "prop-types";

import Header from "./components/Header";
import BarChart from "./components/BarChart";
import { PieChart } from "./components/PieChart";

const Button = ({ component }) => {
  const [showElement, setShowElement] = useState(true)

  const toggleElement = () => {
    setShowElement(!showElement)
  }

  return (
    <div className="flex flex-col w-full h-full items-center ">
      <button onClick={toggleElement} className="border-2 rounded-xl p-3 my-5 mx-3 bg-sky-950 text-gray-300 font-extrabold hover:bg-sky-800 transition ease-out">
        {showElement ? 'Ocultar' : 'Mostrar'}
      </button>
      {showElement && component }
    </div>
  )
}

Button.propTypes = { // Valida las props
  component: PropTypes.element.isRequired,
};

function App() {
  return (
    <>
      <Header />
      <div className="flex mx-5">
        <Button component={<BarChart/>}/>
        <Button component={<PieChart />}/>
      </div>
    </>
  );
}

export default App;
