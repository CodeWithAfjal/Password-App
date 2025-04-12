import { useState } from "react";
import "./App.css";
import { LC, NC, SC, UC } from "./data/passChar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [Uppercase, setUpperase] = useState(false);
  let [Lowercase, setLowercase] = useState(false);
  let [Number, setNumber] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordlen, setPasswordlen] = useState(10);
  let [pass, setpass] = useState("");
  let createPassword = () => {
    let finalpass = "";
    let charSet = "";
    if (Uppercase || Lowercase || Number || symbols) {
      if (Uppercase) charSet += UC;
      if (Lowercase) charSet += LC;
      if (Number) charSet += NC;
      if (symbols) charSet += SC;
      for (let i = 0; i < passwordlen; i++) {
        finalpass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setpass(finalpass);
      toast.success("Password Genereted");
    } else {
      toast.warn("Please select atleast one checkbox");
    }
  };
  let copypass = () => {
    navigator.clipboard.writeText(pass);
    toast.success("Password Copied To Clipboard");
  };

  return (
    <>
      <div className="password-box">
        <h2> Password Generetor</h2>

        <div className="passwordboxin">
          <input type="text" readOnly value={pass} />
          <button onClick={copypass} className="btn2">
            Copy
          </button>
        </div>
        <div className="passlength">
          <label> Password Length</label>
          <input
            type="number"
            min={10}
            max={20}
            value={passwordlen}
            onChange={(event) => setPasswordlen(event.target.value)}
          />
        </div>
        <div className="passlength">
          <label>Include Uppercase Letters</label>
          <input
            type="checkbox"
            checked={Uppercase}
            onChange={() => setUpperase(!Uppercase)}
          />
        </div>
        <div className="passlength">
          <label>Include Lowercase Letters</label>
          <input
            type="checkbox"
            checked={Lowercase}
            onChange={() => setLowercase(!Lowercase)}
          />
        </div>
        <div className="passlength">
          <label>Include Number</label>
          <input
            type="checkbox"
            checked={Number}
            onChange={() => setNumber(!Number)}
          />
        </div>
        <div className="passlength">
          <label>Include Symbols</label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>
        <button className="btn" onClick={createPassword}>
          Generate Password
        </button>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
