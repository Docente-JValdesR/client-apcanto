function Login() {
  return (
    <div className="container" style={{height:"100vh"}}>
      <div className="row h-100 justify-content-center">
        <div className="col-10 col-md-4 align-self-center">
        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
       
         </div>
      </div>
    </div>
  );
}

export default Login;
