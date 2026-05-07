import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Search, Bell, RefreshCw } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <div className="app-shell">
      <Sidebar />

      <div className="main-content" style={{ flex: 1 }}>
        {/* Topbar */}
        <header className="topbar">
          <div className="topbar-search">
            <Search size={14} color="var(--muted)" />
            <input placeholder="Search..." />
          </div>

          <nav className="topbar-links">
            <span className="topbar-link">Analytics</span>
            <span className="topbar-link">Reports</span>
            <span className="topbar-link">Team</span>
          </nav>

          <div className="topbar-actions">
            <button className="topbar-upgrade">Upgrade</button>
            <button className="topbar-icon-btn"><Bell size={16} /></button>
            <button className="topbar-icon-btn"><RefreshCw size={16} /></button>
            <div className="topbar-avatar">SA</div>
          </div>
        </header>

        {/* Page Content */}
        <div className="page-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
