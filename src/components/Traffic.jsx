import { useState, useEffect } from 'react';

const Traffic = () => {
  const [trafficData, setTrafficData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000')
      .then((response) => response.json())
      .then((traffic) => {
        setTrafficData(traffic);
      })
      .catch((error) => {
        console.error('Error fetching traffic data:', error);
      });
  }, []);

  return (
      <ul className='w-full h-full my-5 flex text-l text-wrap items-center font-semibold'>
        {trafficData.map((data, index) => (
          <li key={index} className='border-solid border-2 border-black rounded-xl mx-1 my-2 h-1/2 w-full hover:text-slate-500 transition ease-out delay-150 hover:-translate-y-1 hover:cursor-pointer bg-sky-950 text-gray-300 flex items-center'>{`Puerto: ${data.port} ${data.origin} ${data.status}`}</li>
        ))}
      </ul>
  );
};

export default Traffic;