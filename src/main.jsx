import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RiderButton from './components/riderButton.jsx'
import RiderObjProps from './components/riderObjProps.jsx'
import RiderObjProps1 from './components/riderObjProps1.jsx'
import RiderRafc from './components/riderRafc.jsx'
import RiderRCompAnidado from './components/riderRCompAnidado.jsx'
import RiderSaltoLinea from './components/riderSaltoLinea.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RiderButton />
    <RiderObjProps />
    <RiderObjProps1 nombre='Geovanny' apellido='Barcenas' />
    <RiderObjProps1 nombre='Maria' apellido='Cuellar' />
    <RiderRafc />

    <RiderRCompAnidado>
      <button>Menu1</button>
      <button>Menu2</button>
      <RiderRafc />
    </RiderRCompAnidado>

    <RiderSaltoLinea/>

    <App />
  </StrictMode>,
)
