import React from 'react';
import './App.scss';
import PageHeader from './components/PageHeader';
import MainPage from './content/MainPage';
import SynonymPage from './content/SynonymPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Content } from "carbon-components-react/lib/components/UIShell";



function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Content>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/synonyms" component={SynonymPage} />
        </Switch>
      </Content>
      
    </BrowserRouter>
  );
}

export default App;
