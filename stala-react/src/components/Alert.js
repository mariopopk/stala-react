function Alert({ children }) {
  return (
    <div
      className="alert text-light bg-primary text-center py-1 m-0"
      role="alert"
    >
      <small>{children}</small>
    </div>
  );
}

export default Alert;
