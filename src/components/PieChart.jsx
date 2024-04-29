import { Chart as Chartjs, Tooltip, Legend, ArcElement } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { pieData } from '../API/data'

Chartjs.register(Tooltip, Legend, ArcElement)

export const PieChart = () => {
  const options = {}

  return (
    <div className='w-2/5 h-2/5 border-2 rounded-xl border-black mx-4 flex items-center justify-center hover:cursor-pointer'>
      <Pie options={options} data={pieData}/>
    </div>
  )
}