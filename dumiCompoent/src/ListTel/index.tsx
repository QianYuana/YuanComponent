import * as React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

interface IAppProps {
  title: string;
  children: React.ReactNode;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header={props.title} key="1" showArrow={false} collapsible="icon">
        {props.children}
      </Panel>
    </Collapse>
  );
};

export default App;
