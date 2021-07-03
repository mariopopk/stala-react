function RegisterForm() {
  const emailLabel = "stala-email";
  const passwordLabel = "stala-password";
  return (
    <form className="mx-auto" style={{ maxWidth: 400 }}>
      <div className="mb-3">
        <label htmlFor={emailLabel} className="form-label text-uppercase">
          Email address
        </label>
        <input
          type="email"
          className="form-control border-top-0 border-start-0 border-end-0"
          id={emailLabel}
        />
      </div>
      <div className="mb-3">
        <label htmlFor={passwordLabel} className="form-label text-uppercase">
          Password
        </label>
        <input
          type="password"
          className="form-control border-top-0 border-start-0 border-end-0"
          id={passwordLabel}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary my-5 w-100 text-uppercase"
      >
        Sign In
      </button>
    </form>
  );
}

export default RegisterForm;
