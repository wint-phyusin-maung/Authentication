import './App.css';
import Navigation from './component/navigation'
import { Routes, Route } from 'react-router-dom'
import Home from './component/home'



function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={< Home />} />
      </Routes>
    </>
  )
}
export default App;