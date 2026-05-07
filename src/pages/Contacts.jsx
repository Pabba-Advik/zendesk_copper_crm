import { useState } from 'react';
import { Search, ArrowLeft, Edit, MessageSquare, Calendar, Mail } from 'lucide-react';

const contacts = [
  {
    id: 1, name: 'Marcus Sterling', title: 'VP of Digital Transformation', company: 'NovaCorp',
    email: 'marcus.s@novacorp.com', phone: '+1 (555) 012-3456', location: 'San Francisco, CA',
    engagementScore: 87, lastContact: '2 Days Ago', tags: ['Key Decision Maker', 'High Value'],
    sentiment: { critical: 10, neutral: 20, strong: 70 }, sentimentTrend: 'Positive Trajectory',
    sentimentNote: 'Sentiment improved by 18% after the technical deep-dive last Thursday.',
    overview: 'Marcus is driving the enterprise-wide transition to cloud-native infrastructure at NovaCorp. He is highly focused on operational efficiency and reducing technical debt.',
    detail: 'He prefers data-backed proposals over conceptual pitches and responds best to concise, executive-level summaries. Historically, deals involving Marcus require extensive security compliance reviews early in the cycle.',
    actions: [
      { label: 'Send Security Whitepaper', priority: 'HIGH PRIORITY', desc: 'Based on recent queries about data compliance.', cta: 'Draft Email', ctaIcon: <Mail size={12} /> },
      { label: 'Schedule Q3 Review', desc: "It's been 45 days since the last formal review.", cta: 'Open Calendar', ctaIcon: <Calendar size={12} /> },
      { label: 'Invite to Executive Dinner', desc: 'Upcoming event in San Francisco aligns with his location.', cta: 'Review Invite', ctaIcon: <MessageSquare size={12} /> },
    ],
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2, name: 'Aisha Khan', title: 'Chief Operations Officer', company: 'TechSolutions Inc.',
    email: 'a.khan@techsolutions.io', phone: '+1 (555) 234-5678', location: 'Austin, TX',
    engagementScore: 62, lastContact: '12 Days Ago', tags: ['COO', 'Budget Owner'],
    sentiment: { critical: 25, neutral: 35, strong: 40 }, sentimentTrend: 'Neutral',
    sentimentNote: 'No significant change. Last interaction was positive but deal has stalled.',
    overview: 'Aisha oversees day-to-day operations at TechSolutions and has been exploring vendor consolidation strategies.',
    detail: 'She responds well to ROI-driven messaging and prefers structured demos over high-level pitches.',
    actions: [
      { label: 'Send ROI Calculator', priority: 'HIGH PRIORITY', desc: 'Aisha requested cost-benefit data last week.', cta: 'Draft Email', ctaIcon: <Mail size={12} /> },
      { label: 'Schedule Product Demo', desc: 'Follow up on the Austin office visit interest.', cta: 'Open Calendar', ctaIcon: <Calendar size={12} /> },
    ],
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3, name: 'James Rivera', title: 'Director of Procurement', company: 'GlobalLogix',
    email: 'j.rivera@globallogix.com', phone: '+1 (555) 456-7890', location: 'Chicago, IL',
    engagementScore: 91, lastContact: 'Today', tags: ['Champion', 'Fast Track'],
    sentiment: { critical: 5, neutral: 15, strong: 80 }, sentimentTrend: 'Positive Trajectory',
    sentimentNote: 'Highly engaged after webinar. Downloaded 3 whitepapers. Close to a decision.',
    overview: 'James is the primary procurement decision-maker at GlobalLogix and has been actively researching supply-chain automation tools.',
    detail: 'James is close to a decision and comparing two vendors. Pricing flexibility and implementation timeline are his top concerns.',
    actions: [
      { label: 'Send Fast-Track Proposal', priority: 'HIGH PRIORITY', desc: 'High likelihood of closing in Q3.', cta: 'Draft Proposal', ctaIcon: <Edit size={12} /> },
      { label: 'Connect on LinkedIn', desc: 'Strengthen relationship ahead of final decision.', cta: 'Open Profile', ctaIcon: <MessageSquare size={12} /> },
    ],
    avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    id: 4, name: 'Sophia Chen', title: 'Head of IT Infrastructure', company: 'Meridian Health',
    email: 's.chen@meridianhealth.org', phone: '+1 (555) 678-9012', location: 'Seattle, WA',
    engagementScore: 73, lastContact: '5 Days Ago', tags: ['IT Decision Maker', 'HIPAA Focus'],
    sentiment: { critical: 15, neutral: 30, strong: 55 }, sentimentTrend: 'Improving',
    sentimentNote: 'Response time improved after compliance documentation was shared.',
    overview: 'Sophia manages all IT infrastructure decisions at Meridian Health. Her primary focus is HIPAA compliance, data security, and system uptime.',
    detail: 'She requires detailed compliance documentation before advancing any deal. A dedicated security briefing would significantly accelerate the process.',
    actions: [
      { label: 'Send Compliance Docs', priority: 'HIGH PRIORITY', desc: 'HIPAA compliance packet is mandatory before demo.', cta: 'Draft Email', ctaIcon: <Mail size={12} /> },
      { label: 'Arrange Healthcare Reference Call', desc: 'Connect with an existing healthcare client.', cta: 'Schedule Call', ctaIcon: <Calendar size={12} /> },
    ],
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const ContactListView = ({ onSelect, search, setSearch }) => {
  const filtered = contacts.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Contacts</h1>
          <p className="page-subtitle">Contact Intelligence Profiles</p>
        </div>
      </div>

      <div style={{ position: 'relative', marginBottom: '1.25rem', maxWidth: '340px' }}>
        <Search size={14} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
        <input
          type="text" placeholder="Search contacts..." value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: '100%', padding: '0.55rem 0.75rem 0.55rem 2.25rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'white', fontFamily: 'inherit', fontSize: '0.82rem', outline: 'none' }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.75rem' }}>
        {filtered.length === 0 ? (
          <p style={{ color: 'var(--muted)', gridColumn: '1/-1', padding: '2rem', textAlign: 'center' }}>No contacts found for "{search}"</p>
        ) : filtered.map((c) => (
          <div key={c.id} className="sx-card"
            style={{ cursor: 'pointer', transition: 'border-color 0.12s, box-shadow 0.12s' }}
            onClick={() => onSelect(c)}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
              <img src={c.avatar} alt={c.name} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border)' }} onError={(e) => { e.target.style.display = 'none'; }} />
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.88rem' }}>{c.name}</p>
                <p style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{c.title}</p>
                <p style={{ fontSize: '0.75rem', fontWeight: 600 }}>{c.company}</p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="badge">{c.location}</span>
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.82rem' }}>
                {c.engagementScore}/100
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactDetailView = ({ contact, onBack }) => (
  <div>
    <div style={{ marginBottom: '1.25rem' }}>
      <button className="btn btn-ghost" style={{ gap: '0.3rem', paddingLeft: 0 }} onClick={onBack}>
        <ArrowLeft size={14} /> Back to Contacts
      </button>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
      <div>
        <h1 className="page-title">{contact.name}</h1>
        <p className="page-subtitle">{contact.title} at {contact.company}</p>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button className="btn btn-outline"><Edit size={13} /> Edit</button>
        <button className="btn btn-primary"><MessageSquare size={13} /> Message</button>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '1rem' }}>
      {/* Smart Profile */}
      <div className="sx-card">
        <div className="sx-card-title">Smart Profile</div>
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
          <div style={{ flexShrink: 0 }}>
            <img src={contact.avatar} alt={contact.name} style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border)' }} onError={(e) => { e.target.style.display = 'none'; }} />
            <div style={{ marginTop: '0.75rem', fontSize: '0.72rem', color: 'var(--muted)' }}>
              <p>{contact.company}</p>
              <p style={{ marginTop: '2px' }}>{contact.location}</p>
              <p style={{ marginTop: '2px' }}>{contact.phone}</p>
            </div>
            <div style={{ marginTop: '0.6rem', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {contact.tags.map((t) => (
                <span key={t} className="badge badge-dark" style={{ fontSize: '0.65rem' }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: '0.88rem', marginBottom: '0.5rem' }}>Executive Overview</h4>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'var(--primary)', marginBottom: '0.75rem' }}>{contact.overview}</p>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'var(--primary)' }}>{contact.detail}</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '1.25rem' }}>
              <div style={{ padding: '0.75rem', background: 'var(--surface)', borderRadius: 'var(--radius)' }}>
                <p style={{ fontSize: '0.68rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Engagement Score</p>
                <p style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, marginTop: '2px' }}>{contact.engagementScore}/100</p>
              </div>
              <div style={{ padding: '0.75rem', background: 'var(--surface)', borderRadius: 'var(--radius)' }}>
                <p style={{ fontSize: '0.68rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Last Contact</p>
                <p style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, marginTop: '2px' }}>{contact.lastContact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {/* Sentiment */}
        <div className="sx-card">
          <div className="sx-card-title">Sentiment Analysis</div>
          <div style={{ display: 'flex', gap: '3px', height: '8px', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.5rem' }}>
            <div style={{ width: `${contact.sentiment.critical}%`, background: 'var(--accent-red)' }} />
            <div style={{ width: `${contact.sentiment.neutral}%`, background: 'var(--border)' }} />
            <div style={{ width: `${contact.sentiment.strong}%`, background: 'var(--primary)' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>
            <span>Critical</span><span>Neutral</span><span>Strong</span>
          </div>
          <div className="ai-chip"><span>✦</span>{contact.sentimentTrend}</div>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.5rem', lineHeight: 1.5 }}>{contact.sentimentNote}</p>
        </div>

        {/* Next Best Actions */}
        <div className="sx-card">
          <div className="sx-card-title">Next Best Actions</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {contact.actions.map((action, i) => (
              <div key={i} style={{ padding: '0.7rem', background: 'var(--surface)', borderRadius: 'var(--radius)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.2rem' }}>
                  <p style={{ fontWeight: 600, fontSize: '0.8rem' }}>{action.label}</p>
                  {action.priority && <span className="badge badge-dark" style={{ fontSize: '0.6rem', whiteSpace: 'nowrap' }}>{action.priority}</span>}
                </div>
                <p style={{ fontSize: '0.72rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>{action.desc}</p>
                <button className="btn btn-primary" style={{ padding: '0.3rem 0.75rem', fontSize: '0.72rem' }}>
                  {action.ctaIcon} {action.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Contacts = () => {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');

  if (selected) return <ContactDetailView contact={selected} onBack={() => setSelected(null)} />;
  return <ContactListView onSelect={setSelected} search={search} setSearch={setSearch} />;
};

export default Contacts;
