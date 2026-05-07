import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Contacts from './pages/Contacts';
import Pipeline from './pages/Pipeline';
import Copilot from './pages/Copilot';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/copilot" element={<Copilot />} />
          <Route path="/settings" element={<div className="main-content"><h1>Settings</h1><p>Configuration panel coming soon.</p></div>} />
          <Route path="/help" element={<div className="main-content"><h1>Help Center</h1><p>How can we assist you today?</p></div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
