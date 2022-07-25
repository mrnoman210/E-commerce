import React from "react";
import PopupLogin from "../Login/Popup/PopupLogin";

const Signup = () => {
  const [popup, setPopup] = React.useState("false");
  const timer = setTimeout(() => {
    setPopup("true");
  }, 3000);
  return (
    <div>
      Signup
      {/* <PopupLogin /> */}
      {popup == "true" && <PopupLogin />}
      {/* {popup == "true" && <PopupLogin />} */}
    </div>
  );
};

export default Signup;
