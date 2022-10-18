import React from "react";
import Converter from "./converter";
import Header from "./components/Header/Header";
import axios from "axios";
import Currencies from "./components/Currencies/Currencies";
import Footer from "./components/Footer/Footer";

function App() {
  let [rates, setRates] = React.useState({});

  React.useEffect(() => {
    axios.get("https://cdn.cur.su/api/latest.json").then((res) => {
      setRates(res.data.rates);
    });
  }, []);

  return (
    <div>
      <Header rates={rates} />
      <Converter />
      <Currencies rates={rates} />
      <Footer />
    </div>
  );
}

export default App;
