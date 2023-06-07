"use client";
import React, {useState, useEffect} from "react";
import { Tabs } from '@mantine/core';
import ClientEvents from './ClientEvents';
import ClientFAQ from './ClientFAQ';
import ClientMessages from './ClientMessages';
import ClientProfile from './ClientProfile';

const tabComponents = [
  {
    name: "My Events",
  value: "events",
  component: <ClientEvents/>,
},
{
  name: "FAQs",
  value: "faq",
  component: <ClientFAQ/>,
},
{
  name: "Messages",
  value: "messages",
  component:<ClientMessages/>,
},
{
  name: "Profile",
  value: "profile",
  component: <ClientProfile/>,
}

]



export default function MobileTabbedDashboard() {

  const [selectedTab, setSelectedTab] = useState("events")



useEffect(() => {

},[selectedTab])

const renderTabs = tabComponents.map((tab, index) => {

  return (
    <Tabs.Tab key={index} value={tab.value}>{tab.name}</Tabs.Tab>
  )

})


  return (
    <div className="MobileTabbedDashboard-page">

    <Tabs defaultValue="events">
      <Tabs.List grow>
        {renderTabs}
      </Tabs.List>
    </Tabs>

<ClientEvents />

</div>
  );
}