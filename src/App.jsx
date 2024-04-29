import { useState } from "react";
import PropTypes from "prop-types";

import BarChart from "./components/BarChart";
import Traffic from "./components/Traffic";
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
      <div className="flex w-full h-2/4">
        <Button component={<BarChart/>}/>
        <Button component={<PieChart />}/>
      </div>
      <div className="w-full h-max flex flex-col items-center">
        <h2 className="text-2xl font-bold">Monitoreo de trafico</h2>
        <Traffic />
      </div>
    </>
  );
}

export default App;
