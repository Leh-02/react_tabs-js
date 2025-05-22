export const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  tabs.map(tab => (
    <li
      className={tab.id === activeTabId && "is-active"}
      data-cy="Tab"
      onClick={(event) => { 
        if (tab.id !== activeTabId) { 
          onTabSelected(event.target.id);
        }
      }}
    >
        <a href={`#${tab.id}`} data-cy="TabLink">
          {tab.title}
        </a>
      </li>
    ))
);
