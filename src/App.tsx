import React from "react";
// import HelloWorld from "./components/HelloWorld";
// import RenderForm from "./components/RenderForm";
import { Button, Content } from 'carbon-components-react';
import UIShell from './components/UIShell';

import './App.scss';

const App: React.FC<{}> = () => {
  return (
    <>
      <UIShell />
      <Content>
        <Button>Button</Button>
      </Content>
    </>
  );
};

export default App;
