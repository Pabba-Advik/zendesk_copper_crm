import { useState, useRef, useEffect } from 'react';
import { Search, MoreVertical, Sparkles, RefreshCw, ChevronRight, Send, Zap } from 'lucide-react';

const actionQueue = [
  {
    id: 1, company: 'TechCorp Global', type: 'ENTERPRISE RE-RENEWAL', badge: 'badge-dark',
    deal: 'Enterprise Renewal - $120k', contact: 'Sarah Jenkins', role: 'VP Engineering',
    urgent: 'Contract expires in 18 days',
    aiInsight: 'TechCorp recently announced a shift to cloud-native infrastructure. Emphasizing our new API integration features in the renewal proposal could increase retention probability by 35%.',
    aiTags: ['High Churn Risk', 'Budget Cycle Active'],
    subjectLine: 'Maximizing TechCorp\'s Cloud Initiative with Synthetix V3',
    emailDraft: `Hi Sarah,

I noticed TechCorp's recent announcement regarding the shift toward a fully cloud-native infrastructure — congratulations on the strategic move.

As we approach your upcoming renewal on the 19th, I wanted to highlight how Synthetix V3 aligns perfectly with this new direction. We recently rolled out new API integrations that specifically support cloud-native deployments, reducing latency by an average of 40% for our enterprise clients.

Given your team's focus on this transition, I believe extending our partnership with the V3 upgrade will be critical to ensuring a seamless migration.

Are you available for a brief 15-minute sync this Thursday to review the new architecture?`,
  },
  {
    id: 2, company: 'Nexus Systems', type: 'UPSELL OPPORTUNITY', badge: 'badge-blue',
    deal: 'Upsell Opportunity - $45k', contact: 'Mark Chen', role: 'IT Director',
    urgent: 'Follow-up required',
    aiInsight: 'Nexus Systems has increased their user count by 40% this quarter. This signals readiness for an enterprise tier upgrade with advanced analytics features.',
    aiTags: ['Growth Signal', 'Product Fit High'],
    subjectLine: 'Scaling Nexus Systems with Synthetix Enterprise',
    emailDraft: `Hi Mark,

Your team has grown significantly this quarter and we've noticed your usage patterns are hitting the limits of your current plan.

I'd love to walk you through our Enterprise tier which includes advanced analytics, SSO, and dedicated support that would serve your growing team much better.

Would you have 20 minutes this week for a quick overview?`,
  },
  {
    id: 3, company: 'Quantum Inc', type: 'NEW LEAD', badge: 'badge-green',
    deal: 'New Lead - Q3 Initiative', contact: 'Rachel Moore', role: 'COO',
    urgent: 'Initial outreach ready',
    aiInsight: 'Quantum Inc filed for a new product line expansion in Q3. Our supply-chain optimization tools are directly aligned with their stated infrastructure needs.',
    aiTags: ['Cold Outreach', 'Strategic Fit'],
    subjectLine: 'Supporting Quantum Inc\'s Q3 Expansion with Synthetix',
    emailDraft: `Hi Rachel,

Congratulations on Quantum Inc's Q3 expansion announcement — it's an exciting milestone.

We work with several companies in your space who faced similar scaling challenges, and our supply-chain optimization tools have helped them reduce operational overhead by up to 30%.

I'd love to share a quick case study relevant to your initiative. Would a 15-minute call work this week?`,
  },
];

const toneOptions = ['Professional', 'Friendly', 'Concise', 'Formal'];

const Copilot = () => {
  const [selected, setSelected] = useState(actionQueue[0]);
  const [tone, setTone] = useState('Professional');
  const [emailBody, setEmailBody] = useState(actionQueue[0].emailDraft);
  const [subject, setSubject] = useState(actionQueue[0].subjectLine);

  const selectItem = (item) => {
    setSelected(item);
    setEmailBody(item.emailDraft);
    setSubject(item.subjectLine);
  };

  const handleRegenerate = () => {
    setEmailBody(selected.emailDraft + '\n\n[Regenerated — ' + tone + ' tone applied]');
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">AI Co-pilot</h1>
        <p className="page-subtitle">Intelligent Sales Automation — Action Queue</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '1rem', alignItems: 'start' }}>
        {/* Action Queue Sidebar */}
        <div className="sx-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Space Grotesk', fontSize: '0.78rem', fontWeight: 700 }}>Action Queue</span>
            <span className="badge badge-red" style={{ fontSize: '0.65rem' }}>High Priority</span>
          </div>
          {actionQueue.map((item) => (
            <div key={item.id}
              onClick={() => selectItem(item)}
              style={{
                padding: '0.85rem 1rem',
                borderBottom: '1px solid var(--border)',
                cursor: 'pointer',
                background: selected?.id === item.id ? '#f0f7ff' : 'white',
                borderLeft: selected?.id === item.id ? '3px solid var(--accent-blue)' : '3px solid transparent',
                transition: 'background 0.12s',
              }}
            >
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', marginBottom: '0.3rem' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 700, fontSize: '0.7rem' }}>
                  {item.company.slice(0, 2).toUpperCase()}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontWeight: 600, fontSize: '0.82rem', lineHeight: 1.2 }}>{item.company}</p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{item.deal}</p>
                </div>
              </div>
              <p style={{ fontSize: '0.7rem', color: 'var(--accent-red)', fontWeight: 500, paddingLeft: '38px' }}>
                ● {item.urgent}
              </p>
            </div>
          ))}
        </div>

        {/* Main Panel */}
        {selected && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Header */}
            <div className="sx-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.3rem' }}>
                    <span className={`badge ${selected.badge}`} style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{selected.type}</span>
                    <span style={{ fontWeight: 700, fontSize: '0.88rem' }}>{selected.company}</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
                    {selected.contact} ({selected.role})
                  </p>
                </div>
                <button className="btn btn-ghost" style={{ padding: '0.3rem' }}><MoreVertical size={16} /></button>
              </div>

              {/* AI Insight */}
              <div style={{ marginTop: '0.75rem', padding: '0.75rem', background: '#fefce8', border: '1px solid #fde047', borderRadius: 'var(--radius)' }}>
                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'flex-start' }}>
                  <Zap size={14} color="#854d0e" style={{ flexShrink: 0, marginTop: '1px' }} />
                  <div>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#854d0e', marginBottom: '0.25rem' }}>AI Insight</p>
                    <p style={{ fontSize: '0.78rem', color: '#713f12', lineHeight: 1.5 }}>{selected.aiInsight}</p>
                    <div style={{ display: 'flex', gap: '4px', marginTop: '0.5rem' }}>
                      {selected.aiTags.map((tag) => (
                        <span key={tag} className="badge badge-gold" style={{ fontSize: '0.65rem' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Draft */}
            <div className="sx-card">
              <div className="sx-card-title">AI-Generated Email Draft</div>

              <div style={{ marginBottom: '0.75rem' }}>
                <label style={{ fontSize: '0.72rem', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>Subject Line</label>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={{ width: '100%', padding: '0.55rem 0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontFamily: 'inherit', fontSize: '0.82rem', fontWeight: 500, outline: 'none' }}
                />
              </div>

              <textarea
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                rows={12}
                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontFamily: 'inherit', fontSize: '0.82rem', lineHeight: 1.6, resize: 'vertical', outline: 'none', color: 'var(--primary)' }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button className="btn btn-ghost" style={{ padding: '0.4rem 0.7rem', fontSize: '0.78rem', gap: '0.3rem' }} onClick={handleRegenerate}>
                    <RefreshCw size={13} /> Regenerate
                  </button>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.35rem 0.6rem' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>Tone:</span>
                    <select value={tone} onChange={(e) => setTone(e.target.value)}
                      style={{ border: 'none', outline: 'none', fontFamily: 'inherit', fontSize: '0.78rem', fontWeight: 600, background: 'transparent', cursor: 'pointer' }}>
                      {toneOptions.map((t) => <option key={t}>{t}</option>)}
                    </select>
                    <ChevronRight size={12} color="var(--muted)" />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-outline">Save Draft</button>
                  <button className="btn btn-primary"><Send size={13} /> Apply Strategy</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Copilot;
