// import { useState } from "react";

function Checkbox({ children: name, id, isSelected = false, callback }) {
  return (
    <div className="form-check">
      <i class="bi bi-check2-circle"></i>

      <label className="form-check-label" htmlFor={id}>
        {name}
      </label>
    </div>
  );
}

export default Checkbox;
