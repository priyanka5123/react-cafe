function Tabs({ activeTab, setActiveTab }) {
  const tabs = [
    { key: 'coffee', label: '☕ Coffee' },
    { key: 'tea', label: '🍵 Tea' },
    { key: 'pastries', label: '🥐 Pastries' }
  ];

  return (
    <ul className="nav nav-tabs mb-4">
      {tabs.map(tab => (
        <li className="nav-item" key={tab.key}>
          <button
            className={`nav-link ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tabs;
