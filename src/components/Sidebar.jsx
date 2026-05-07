import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Users, GitBranch, Bot,
  Settings, HelpCircle, Plus, Search, Bell, RefreshCw
} from 'lucide-react';

const Sidebar = () => {
  const mainNav = [
    { icon: <LayoutDashboard size={15} />, label: 'Dashboard', path: '/' },
    { icon: <Users size={15} />, label: 'Contacts', path: '/contacts' },
    { icon: <GitBranch size={15} />, label: 'Pipeline', path: '/pipeline' },
    { icon: <Bot size={15} />, label: 'AI Co-pilot', path: '/copilot' },
  ];

  const secondaryNav = [
    { icon: <Settings size={15} />, label: 'Settings', path: '/settings' },
    { icon: <HelpCircle size={15} />, label: 'Help', path: '/help' },
  ];

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-title">Synthetix AI</div>
        <div className="sidebar-logo-sub">Enterprise CRM</div>
      </div>

      {/* New Deal CTA */}
      <button className="sidebar-new-deal">
        <Plus size={13} /> New Deal
      </button>

      {/* Main Navigation */}
      <nav className="sidebar-nav">
        {mainNav.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => `sidebar-item${isActive ? ' active' : ''}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Secondary Navigation */}
      <div className="sidebar-secondary">
        {secondaryNav.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => `sidebar-item${isActive ? ' active' : ''}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
