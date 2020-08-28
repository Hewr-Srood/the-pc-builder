import React from "react";
import TPBNavbar from "./components/TPBNavbar";
import { Switch, Route } from "react-router-dom";
import PreBuilds from "./components/PreBuilds";
const preBuildPCArr = [
  {
    name: "Destroyer",
    buildType: "CUSTOM PRE-BUILD",
    type: "HYPER GAMING PC",
    info: "Inetl i5-9400F within MSI RTX 2060S Gaming-X",
    price: "$1500",
    imgUrl: "http://atdcomputers.com/media/product/ad7/darkflash-knight-k1-atx-gaming-case-knight-k1-by-darkflash-1e7.png",
  },
  {
    name: "Aircraft carrier",
    buildType: "CUSTOM PRE-BUILD",
    type: "BUDGET GAMING PC",
    info: "AMD R5-2400G within XFX RX 580",
    price: "$700",
    imgUrl: "https://www.cyberpowerpc.com/images/cs/h550/cs-450-150_400.png?v1",
  },
];
function App() {
  return (
    <div
      className="d-flex flex-column"
      style={{ height: "100vh", width: "100vw" }}
    >
      <TPBNavbar />
      <Switch>
        <Route
          path="/"
          render={() => (
            <PreBuilds
              preBuildedPCs={preBuildPCArr}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
