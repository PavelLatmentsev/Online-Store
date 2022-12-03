import React from "react";
import "./app/styles/reset.scss";
import "./app/styles/fonts.scss";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainPage from "./app/components/page/mainPage/main";
import PromoCode from "./app/components/page/promocodePage/promocode";
import HelpPage from "./app/components/page/helpPage/help";
import SalePage from "./app/components/page/salePage/sale";
import AboutPage from "./app/components/page/aboutPage/about";
import ContactsPage from "./app/components/page/contactsPage/contacts";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/promocodes" component={PromoCode} />
        <Route path="/sales" component={SalePage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contacts" component={ContactsPage} />
      </Switch>
    </div>
  );
}

export default App;
