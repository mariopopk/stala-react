// import { useState } from "react";

function Checkbox({ children: name, id, isSelected = false, callback }) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={name}
        defaultChecked={isSelected}
        selected={isSelected}
        id={id}
        onChange={callback}
      />
      <label className="form-check-label" htmlFor={id}>
        {name}
      </label>
    </div>
  );
}

export default Checkbox;
