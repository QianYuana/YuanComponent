import * as React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

interface IAppProps {
  title: string;
  children?: React.ReactNode;
  defaultActiveKey?: string[];
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Collapse defaultActiveKey={props.defaultActiveKey}>
      <Panel header={props.title} key="1" showArrow={false} collapsible="icon">
        {props.children?props.children:null}
      </Panel>
    </Collapse>
  );
};

export default App;
