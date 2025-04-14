import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Sidebar from './components/Sidebar'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: `${theme.palette.primary.main}FF`,
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: (theme.vars ?? theme).palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    
          <Header/>
          <Sidebar/>
          

     
    </>
    
   
  )
}

export default App
