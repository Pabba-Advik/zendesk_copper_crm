import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Clock, ArrowUpRight } from 'lucide-react';

const barData = [
  { label: 'Wk 1', aiScore: 72, actual: 68 },
  { label: 'Wk 2', aiScore: 58, actual: 55 },
  { label: 'Wk 3', aiScore: 85, actual: 80 },
  { label: 'Wk 4', aiScore: 91, actual: 87 },
  { label: 'Wk 5', aiScore: 76, actual: 78 },
  { label: 'Wk 6', aiScore: 94, actual: 90 },
];

const activityFeed = [
  {
    icon: '✓', type: 'green',
    title: 'Global Tech signed',
    desc: 'Contract signed for $1.2M. AI predicted 92% win probability.',
    time: '10 mins ago',
  },
  {
    icon: '→', type: 'blue',
    title: 'Proposal sent',
    desc: 'Sent to Nexus Corp. Awaiting review.',
    time: '1 hr ago',
  },
  {
    icon: '!', type: 'red',
    title: 'Risk Detected',
    desc: 'Stall in communications with Apex Industries.',
    time: '3 hrs ago',
  },
  {
    icon: '◎', type: 'gray',
    title: 'Discovery Call',
    desc: 'Completed initial scope with Horizon Logistics.',
    time: 'Yesterday',
  },
];

const Dashboard = () => {
  const kpis = [
    {
      label: 'Net Revenue',
      value: '$4.2M',
      change: '+10.4% vs Last Quarter',
      positive: true,
    },
    {
      label: 'Active Pipeline',
      value: '128',
      bar: true, barAcq: 60, barProp: 40,
      barLabel1: 'Acquisition', barLabel2: 'Proposal',
    },
    {
      label: 'Win Rate',
      value: '68%',
      subtitle: 'Target: 66%. Excelling in Enterprise.',
      highlight: true,
    },
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Executive Dashboard</h1>
        <p className="page-subtitle">Real-time metrics and AI-driven pipeline analysis for Q3.</p>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.25rem' }}>
        {/* Net Revenue */}
        <div className="sx-card">
          <div className="sx-card-title">Net Revenue</div>
          <div className="kpi-value">$4.2M</div>
          <div className="kpi-badge">
            <ArrowUpRight size={11} /> +10.4% vs Last Quarter
          </div>
        </div>

        {/* Active Pipeline */}
        <div className="sx-card">
          <div className="sx-card-title">Active Pipeline</div>
          <div className="kpi-value">128</div>
          <div style={{ marginTop: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
              <div style={{ flex: 6, height: '6px', background: 'var(--primary)', borderRadius: '2px' }} />
              <div style={{ flex: 4, height: '6px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '2px' }} />
            </div>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.7rem', color: 'var(--muted)' }}>
              <span>● Acquisition</span>
              <span>● Proposal</span>
            </div>
          </div>
        </div>

        {/* Win Rate */}
        <div className="sx-card">
          <div className="sx-card-title">Win Rate</div>
          <div className="kpi-value">68%</div>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
            Target: 66%. Excelling in Enterprise.
          </p>
          <div style={{
            display: 'inline-block', marginTop: '0.5rem',
            padding: '0.2rem 0.5rem', background: '#fef9c3',
            borderRadius: '100px', fontSize: '0.7rem', fontWeight: 600, color: '#713f12',
          }}>
            Above Target ↑
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
        {/* AI Probability Vector Chart */}
        <div className="sx-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div className="sx-card-title" style={{ marginBottom: 0 }}>AI Probability Vector</div>
            <button className="btn btn-ghost" style={{ padding: '0.25rem 0.6rem', fontSize: '0.72rem' }}>
              Filter ▾
            </button>
          </div>

          {/* Bar Chart */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end', height: '130px', marginBottom: '0.5rem' }}>
            {barData.map((d, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', gap: '2px', alignItems: 'flex-end', height: '100%' }}>
                <div
                  className="bar bar-dark"
                  style={{ flex: 1, height: `${d.aiScore}%` }}
                  title={`AI Score: ${d.aiScore}`}
                />
                <div
                  className="bar bar-light"
                  style={{ flex: 1, height: `${d.actual}%` }}
                  title={`Actual: ${d.actual}`}
                />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {barData.map((d) => (
              <span key={d.label} style={{ flex: 1, textAlign: 'center', fontSize: '0.65rem', color: 'var(--muted)' }}>
                {d.label}
              </span>
            ))}
          </div>
        </div>

        {/* Live Activity Feed */}
        <div className="sx-card">
          <div className="sx-card-title">Live Activity Feed</div>
          <div>
            {activityFeed.map((item, i) => (
              <div key={i} className="activity-item">
                <div className={`activity-dot ${item.type}`}>{item.icon}</div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 600, fontSize: '0.8rem' }}>{item.title}</p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '2px' }}>{item.desc}</p>
                  <p style={{ fontSize: '0.68rem', color: 'var(--muted)', marginTop: '4px' }}>{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
