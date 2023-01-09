import React from "react";
import "./app/styles/reset.scss";
import "./app/styles/fonts.scss";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import MainPage from "./app/components/page/mainPage/main";
import PromocodesList from "./app/components/page/promocodePage/promocodesList";
import HelpPage from "./app/components/page/helpPage/help";
import SalePage from "./app/components/page/salePage/salesPage";
import AboutPage from "./app/components/page/aboutPage/about";
import ContactsPage from "./app/components/page/contactsPage/contacts";
import AccessoriesPage from "./app/components/page/accessoriesPage/accessoriesPage";
import CartridgePage from "./app/components/page/cartridgePage/cartridgePage";
import ConsumablesPage from "./app/components/page/consumablesPage/consumablesPage";
import TattooKitsPage from "./app/components/page/tattooKitsPage/tattoKitsPage";
import TattooMachinesPage from "./app/components/page/tattooMachinesPage/tattooMachinesPage";
import TattooNeedles from "./app/components/page/tattooNeedlesPage/tattooNeedlesPage";
import PaintsPage from "./app/components/page/paintsPage.jsx/paintsPage";
import PedalsWiresPage from "./app/components/page/pedalsWiresPage/pedalsWiresPage";
import PowerUnitPage from "./app/components/page/powerUnitPage/powerUnitPage";
import PrinterstPage from "./app/components/page/printersPage/printersPage";
import TipsPage from "./app/components/page/tipsPage/tipsPage";
import PageNotFound from "./app/components/common/pageNotFound";
import CatalogPage from "./app/components/page/catalogPage/catalogPage";
import ProductsProvider from "./app/hooks/useProducts";
import ShoppingCart from "./app/components/ui/cart/shoppingCart";
function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/promocodes" component={PromocodesList} />
          <Route path="/sales/:productId?" component={SalePage} />
          <Route path="/help" component={HelpPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contacts" component={ContactsPage} />
          <Route path="/catalog/acsessories/:productId?" component={AccessoriesPage} />
          <Route path="/catalog/cartridge/:productId?" component={CartridgePage} />
          <Route path="/catalog/consumables/:productId?" component={ConsumablesPage} />
          <Route path="/catalog/tattookits/:productId?" component={TattooKitsPage} />
          <Route path="/catalog/machines/:productId?" component={TattooMachinesPage} />
          <Route path="/catalog/needles/:productId?" component={TattooNeedles} />
          <Route path="/catalog/paints/:productId?" component={PaintsPage} />
          <Route path="/catalog/pedalswires/:productId?" component={PedalsWiresPage} />
          <Route path="/catalog/powers/:productId?" component={PowerUnitPage} />
          <Route path="/catalog/printers/:productId?" component={PrinterstPage} />
          <Route path="/catalog/tips/:productId?" component={TipsPage} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/catalog" component={CatalogPage} />
          <Route path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
      </ProductsProvider>
    </div>
  );
}

export default App;
