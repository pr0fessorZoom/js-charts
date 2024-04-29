// import { useState, useEffect } from 'react';
// import MostUsed from './MostUsed';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'; // Chartjs modulos
import {fakeData} from '../API/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)
//console.log(fakeData)
const BarChart = () => {
  const options = {}
  return (
    <div className='w-4/5 h-3/5 border-2 rounded-xl border-black mx-4 flex items-center justify-center hover:cursor-pointer'>
      <Bar options={options} data={fakeData}/>
    </div>
  );
};
export default BarChart