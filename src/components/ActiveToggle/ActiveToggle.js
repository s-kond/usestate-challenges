import {useState} from "react";
import "./ActiveToggle.css";

function ActiveToggle() {
  const [active, setActive] = useState(false);
  return (
    <main>
      <div className={active ? "box box--active" : "box"} />
      <button onClick={() => setActive(!active)} type="button">{active ? "Deactivate" : "Activate"}</button>
    </main>
  );
}

export default ActiveToggle;
