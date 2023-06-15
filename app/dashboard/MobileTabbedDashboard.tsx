import React, { useState, useEffect } from "react";
import { Tabs } from '@mantine/core';
import ClientEvents from './MyEvents/ClientEvents';
import ClientFAQ from './FAQ/ClientFAQ';
import ClientMessages from './MyMessages/ClientMessages';
import ClientProfile from './MyProfile/ClientProfile';
import ExploreTab from "./ExploreTab/ExploreTab"
import "./MobileClientTab.css"

interface TabComponent {
  name: string;
  value: string;
  component: JSX.Element;
}

const tabComponents: TabComponent[] = [
  {
    name: "Explore",
    value: "explore",
    component: <ExploreTab />,
  },
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
      className="tab-item inline m-0"
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
      <Tabs className="tab-container m-0 max-w-200"  defaultValue={selectedTab}>
        <Tabs.List className="tab-container m-0 flex overflow-none" grow>
          {renderTabs}
        </Tabs.List>
      </Tabs>
      <div className="tab-content-container inline m-0" >
      {tabComponents.find(tab => tab.value === selectedTab)?.component}
      </div>
    </div>
  );
}
