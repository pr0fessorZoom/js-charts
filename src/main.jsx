import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-gray-300 h-screen'>
    <Header />
    <App/>
  </div>,
)
