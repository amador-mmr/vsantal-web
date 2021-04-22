import React from "react";
import Layout from "./components/layouts/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Galery from "./components/pages/Galery";
import Shop from "./components/pages/Shop";
import Contact from "./components/pages/Contact";
import Music from "./components/pages/Music";
import Images from "./components/pages/Images";
import Videos from "./components/pages/Videos";
import "./App.css";
import "./fonts/cardinal/Cardinal.ttf";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "amanecer"
    };
  }

  render() {
    return (
      <div className={this.state.background}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/musica" component={Music} />
            <Route path="/galeria" component={Galery} />
            <Route path="/imagenes" component={Images} />
            <Route path="/videos" component={Videos} />
            <Route path="/tienda" component={Shop} />
            <Route path="/contacto" component={Contact} />
            <Route component={Home} />
          </Switch>
        </Layout>
      </div>
    );
  }
}
export default App;
