import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import {HerosList} from "../features/herosList";
import {Hero} from "../features/hero/Hero";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route path={"/heroes/:index"}>
                        <Hero/>
                    </Route>
                    <Route path={"/heroes"}>
                        <HerosList/>
                    </Route>
                    <Route path={"/"}>
                        <Redirect to={"/heroes"}/>
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
};

export default App;
