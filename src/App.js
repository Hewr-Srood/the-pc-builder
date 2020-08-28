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
    imgUrl: "https://png2.cleanpng.com/sh/984b6f5539092415965bff7c94198c2d/L0KzQYm3UsAzN5VufZH0aYP2gLBuTfNwdaF6jNd7LXPkg7a0kP94baMyiAd5cHz8Pcb1igQuaaV9RdlqbXnxd37qjB1xfaVqRdV5dT3mcbPwjvV1NaFzf599cnHxg8HokvVvfF51gdV9dYLoPYboV8U0PGRpSqk5Y3a2PoKCVcgzOmQ5Sac6N0a2QIa5VcE3NqFzf3==/kisspng-computer-case-power-supply-unit-atx-gaming-compute-cpu-cabinet-png-transparent-picture-5a75343d270cf3.19582234151763052516.png",
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
