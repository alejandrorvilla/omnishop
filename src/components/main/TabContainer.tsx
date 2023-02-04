import React, { useState } from "react";
import Button from "../base/Button";
import "@styles/main/tabContainer.css";

function TabContainer(props: IProps) {
  const [tabs, setTabs] = useState(props.tabs);

  return (
    <section className="o-tabcontainer">
      <div className="o-tabcontainer-options">
        {tabs.map((tab, index) => {
          return (
            <Button
              key={tab.text}
              text={tab.text}
              onClick={() => {
                const newTabs = [...tabs];
                const tabSelected = tabs[index];
                newTabs.splice(index, 1);
                newTabs.unshift(tabSelected);
                setTabs(newTabs);
              }}
              mode={index === 0 ? "purple" : "white"}
            />
          );
        })}
      </div>
      <div className="o-tabcontainer-content">{tabs[0].content}</div>
    </section>
  );
}

interface IProps {
  tabs: {
    text: string;
    content: JSX.Element;
  }[];
}

export default TabContainer;
