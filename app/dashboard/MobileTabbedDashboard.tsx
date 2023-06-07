import React, { useState, useEffect } from "react";
import { Tabs } from '@mantine/core';
import ClientEvents from './ClientEvents';
import ClientFAQ from './ClientFAQ';
import ClientMessages from './ClientMessages';
import ClientProfile from './ClientProfile';
import "./MobileClientTab.css"

interface TabComponent {
  name: string;
  value: string;
  component: JSX.Element;
}

const tabComponents: TabComponent[] = [
  {
    name: "My Events",
    value: "events",
    component: <ClientEvents />,
  },
  {
    name: "FAQs",
    value: "faq",
    component: <ClientFAQ />,
  },
  {
    name: "Messages",
    value: "messages",
    component: <ClientMessages />,
  },
  {
    name: "Profile",
    value: "profile",
    component: <ClientProfile />,
  }
];

export default function MobileTabbedDashboard() {
  const [selectedTab, setSelectedTab] = useState<string>("events");

  function handleTabClick(tabValue: string) {
    setSelectedTab(tabValue);
  }

  useEffect(() => {
    // Perform any side effects based on the selectedTab value
  }, [selectedTab]);

  const renderTabs = tabComponents.map((tab, index) => {
    return (
      <Tabs.Tab
      className="tab-item"
        key={index}
        value={tab.value}
        onClick={() => handleTabClick(tab.value)}
      >
        {tab.name}
      </Tabs.Tab>
    );
  });

  return (
    <div className="MobileTabbedDashboard-page">
      <Tabs className="tab-container" defaultValue={selectedTab}>
        <Tabs.List className="tab-container" grow>
          {renderTabs}
        </Tabs.List>
      </Tabs>
      <div className="tab-content-container">
      {tabComponents.find(tab => tab.value === selectedTab)?.component}
      </div>
    </div>
  );
}
