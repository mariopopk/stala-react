function RadioBox({ children, id, name, callback = () => {} }) {
  const value = children.toLowerCase();
  return (
    <div className="form-check">
      <input
        onClick={callback}
        className="form-check-input"
        type="radio"
        name={name}
        id={`${name}-${id}`}
        value={value}
      />
      <label className="form-check-label" htmlFor={`${name}-${id}`}>
        {children}
      </label>
    </div>
  );
}

export default RadioBox;
