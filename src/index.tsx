import React from "react";
import { hydrate } from "react-dom";

import { App } from "./app";

hydrate(<App />, document.getElementById("app"));

if (module.hot) {
    module.hot.accept();
    console.log("HMR enabled");
}
