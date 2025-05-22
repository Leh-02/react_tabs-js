export const Tabs = ({ tabs, activeTabId, onTabSelected, getTabById }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
            <li
              className={tab.id === activeTabId ? 'is-active' : ''}
              data-cy="Tab"
              onClick={() => {
                if (tab.id !== activeTabId) {
                  onTabSelected(tab.id);
                }
              }}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    
      <div className="block" data-cy="TabContent">
       {getTabById(activeTabId).content}
      </div>
  </div>
);

