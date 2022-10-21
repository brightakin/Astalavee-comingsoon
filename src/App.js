import { Fragment, useState } from "react";
import Content from "./components/Content/Content";
import PopUp from "./components/Content/PopUp";
import Header from "./components/header/Header";

function App() {
  const [showPopUp, setShowPopUp] = useState(false);

  const popUpHandler = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <Fragment>
      {showPopUp && <PopUp onClose={popUpHandler} />}
      <Header />
      <Content onClick={popUpHandler} />
    </Fragment>
  );
}

export default App;
