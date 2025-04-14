import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Desktop from './components/Desktop.jsx'
import { WidthFull } from '@mui/icons-material'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div class="container" style={{width:'100vw'}}>
      <div class="row" style={{marginBottom: '30px'}}>
        <Header />
      </div>
      <div class="row">
        <div class="col-6" >
          <Sidebar />
        </div>
        <div class="col-6 d-flex justify-content-end mt-2 pr-2">
          <Desktop />
        </div>
      </div>
    </div>
  </StrictMode>,
)
