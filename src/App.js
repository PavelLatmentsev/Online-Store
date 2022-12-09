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
import AccessoriesPage from "./app/components/page/accessoriesPage/accessoriesPage";
import CartridgePage from "./app/components/page/cartridgePage.jsx/cartridge";
import ConsumablesPage from "./app/components/page/consumablesPage/consumablesPage";
import TattooKitsPage from "./app/components/page/tattooKitsPage/tattoKitsPage";
import TattooMachinesPage from "./app/components/page/tattooMachinesPage/tattooMachinesPage";
import TattooNeedles from "./app/components/page/tattooNeedles/tattooNeedles";
import PaintsPage from "./app/components/page/paintsPage.jsx/paintsPage";
import PedalsWiresPage from "./app/components/page/pedalsWiresPage/pedalsWiresPage";
import PowerUnitPage from "./app/components/page/powerUnitPage/powerUnitPage";
import PrinterstPage from "./app/components/page/printersPage/printersPage";
import TipsPage from "./app/components/page/tipsPage/tipsPage";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/promocodes" component={PromoCode} />
        <Route path="/sales" component={SalePage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/catalog/about" component={AboutPage} />
        <Route path="/catalog/contacts" component={ContactsPage} />
        <Route path="/catalog/acsessories" component={AccessoriesPage}/>
        <Route path="/catalog/cartridge" component={CartridgePage}/>
        <Route path="/catalog/consumables" component={ConsumablesPage}/>
        <Route path="/catalog/tattooKits" component={TattooKitsPage}/>
        <Route path="/catalog/machines" component={TattooMachinesPage}/>
        <Route path="/catalog/needles" component={TattooNeedles}/>
        <Route path="/catalog/paints" component={PaintsPage}/>
        <Route path="/catalog/pedalswires" component={PedalsWiresPage}/>
        <Route path="/catalog/powers" component={PowerUnitPage}/>
        <Route path="/catalog/printer" component={PrinterstPage}/>
        <Route path="/catalog/tips" component={TipsPage}/>
      </Switch>
    </div>
  );
}

export default App;
