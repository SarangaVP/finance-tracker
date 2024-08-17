import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from './pages/dashboard';
import { Auth } from './pages/auth';
import { FinancialRecordsProvider } from './contexts/financial-record-context';

function App() {
  
  return (
      <Router>
        <div className='app-container'>
        <Routes>
          <Route path="/" element={<FinancialRecordsProvider><Dashboard/></FinancialRecordsProvider>}></Route>
          <Route path="/auth" element={<Auth/>}></Route>
        </Routes>
        </div>
      </Router>
  )
}

export default App
