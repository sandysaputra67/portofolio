import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import SemuaBuku from "./pages/listAllBuku";
import BukuBaru from "./pages/listNewBuku";
import DetailBuku from "./pages/detailbuku";
import kategori from "./pages/kategori";
import Register from "./pages/register";
import login from "./pages/login";
import Checkout from "./pages/checkout";
import AdminLogin from "./admin/pages/login";
import AdminDashboard from "./admin/pages/dashboard";
import Kategori from "./store/reducers/kategori";
class App extends Component {
  render() {
    console.log("test")
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/semua-buku" component={SemuaBuku} />
          <Route exact path="/rincian-buku/:id" component={DetailBuku} />
          <Route exact path="/kategori" component={kategori}/>
          <Route path="/buku-baru" component={BukuBaru} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={login} />
          <Route exact path="/checkout" component={Checkout} />     
          <Route exact path="/imcoolmaster" component={AdminLogin} />
          <Route path="/imcoolmaster/dashboard" component={AdminDashboard} />
        </Switch>
      </>
    );
  }
}

export default App;