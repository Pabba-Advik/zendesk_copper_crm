import { useState } from 'react';
import { Plus, Zap, ArrowUpRight } from 'lucide-react';

const stages = [
  {
    id: 'lead', label: 'Lead', count: 3,
    deals: [
      { id: 1, company: 'Global Tech Inc.', title: 'Platform Migration Phase 1', value: '$85,000', score: 78, tags: ['Enterprise', 'Inbound'], aiScore: 78, confidence: 'High Confidence', insight: 'Strong technical alignment. Their Q3 budget cycle opens next month — ideal window for proposal submission.' },
      { id: 2, company: 'Apex Financial', title: 'Risk Management Suite', value: '$62,000', score: 54, tags: ['SMB'], aiScore: 54, confidence: 'Medium Confidence', insight: 'Budget constraints flagged. Consider a phased rollout proposal to reduce initial commitment.' },
      { id: 3, company: 'Meridian Health', title: 'Compliance Dashboard', value: '$41,000', score: 61, tags: ['Healthcare'], aiScore: 61, confidence: 'Medium Confidence', insight: 'HIPAA compliance is top priority. Lead with security credentials and certifications.' },
    ],
  },
  {
    id: 'discovery', label: 'Discovery', count: 2,
    deals: [
      { id: 4, company: 'Nexus Retail Group', title: 'Omnichannel AI Deployment', value: '$240,000', score: 86, tags: ['Retail', 'Hot Lead'], aiScore: 86, confidence: 'High Confidence', insight: 'Competitor evaluation underway. Fast-track proposal with pricing flexibility recommended this week.' },
      { id: 5, company: 'Quantum Dynamics', title: 'Supply Chain Optimization', value: '$115,000', score: 70, tags: ['Enterprise'], aiScore: 70, confidence: 'High Confidence', insight: 'Technical deep-dive scheduled for next week. Prepare ROI calculator and case studies.' },
    ],
  },
  {
    id: 'proposal', label: 'Proposal', count: 1,
    deals: [
      { id: 6, company: 'Apex Financial', title: 'Fraud Detection Module', value: '$155,000', score: 88, tags: ['Finance', 'Closing Soon'], aiScore: 88, confidence: 'High Confidence', insight: 'Security compliance review is the final blocker. Send Q3 Infrastructure Security whitepaper immediately.' },
    ],
  },
];

const Pipeline = () => {
  const [selectedDeal, setSelectedDeal] = useState(stages[0].deals[0]);

  return (
    <div>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Active Pipeline</h1>
          <p className="page-subtitle">Q3 Enterprise Deals Overview</p>
        </div>
        <button className="btn btn-primary"><Plus size={14} /> New Deal</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '1rem', alignItems: 'start' }}>
        {/* Deal List */}
        <div className="sx-card" style={{ padding: 0, overflow: 'hidden' }}>
          {stages.map((stage) => (
            <div key={stage.id}>
              <div className="pipeline-stage-header">
                <span className="pipeline-stage-label">{stage.label}</span>
                <span className="badge">{stage.count} Deals</span>
              </div>
              {stage.deals.map((deal) => (
                <div key={deal.id} className={`pipeline-deal-row${selectedDeal?.id === deal.id ? ' selected' : ''}`} onClick={() => setSelectedDeal(deal)}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{deal.company}</p>
                    <p style={{ fontWeight: 600, fontSize: '0.88rem', marginTop: '1px' }}>{deal.title}</p>
                    <div style={{ display: 'flex', gap: '4px', marginTop: '4px', flexWrap: 'wrap' }}>
                      {deal.tags.map((tag) => (
                        <span key={tag} className={`badge ${tag === 'Hot Lead' || tag === 'Closing Soon' ? 'badge-gold' : ''}`}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ textAlign: 'center', minWidth: '64px' }}>
                    <p style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>AI Score</p>
                    <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.88rem' }}>
                      <Zap size={11} style={{ verticalAlign: 'middle', marginRight: '2px' }} />{deal.score}/100
                    </span>
                  </div>
                  <div style={{ minWidth: '80px', textAlign: 'right' }}>
                    <p style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem' }}>{deal.value}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Deal Detail Panel */}
        {selectedDeal && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div className="sx-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '80px', background: 'linear-gradient(135deg, #e2ddd4, #d0cbc3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ArrowUpRight size={36} color="white" style={{ opacity: 0.4 }} />
              </div>
              <div style={{ padding: '1rem' }}>
                <p style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{selectedDeal.company}</p>
                <h3 style={{ fontSize: '1rem', marginTop: '2px' }}>{selectedDeal.title}</h3>
                <p style={{ fontFamily: 'Space Grotesk', fontSize: '1.4rem', fontWeight: 700, marginTop: '0.4rem' }}>{selectedDeal.value}</p>
                <div style={{ display: 'flex', gap: '4px', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                  {selectedDeal.tags.map((tag) => (
                    <span key={tag} className={`badge ${tag === 'Hot Lead' || tag === 'Closing Soon' ? 'badge-gold' : 'badge-dark'}`}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="sx-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Zap size={14} color="var(--muted)" />
                  <span style={{ fontSize: '0.78rem', fontWeight: 600 }}>AI Health Score</span>
                </div>
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.3rem' }}>{selectedDeal.aiScore}</span>
              </div>
              <div className="progress-bar" style={{ marginTop: '0.6rem' }}>
                <div className="progress-bar-fill" style={{ width: `${selectedDeal.aiScore}%` }} />
              </div>
              <p style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '0.35rem' }}>{selectedDeal.confidence}</p>
              <p style={{ fontSize: '0.78rem', marginTop: '0.6rem', lineHeight: 1.5 }}>{selectedDeal.insight}</p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }}>Reject</button>
              <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Advance →</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pipeline;
