function RegisterPage() {
  return (
    <div className="register">
      <div>
        <input type="text" placeholder="email" className="text" />
      </div>
      <div>
        <input type="password" placeholder="password" className="text" />
      </div>
      <div>
        <input type="password" placeholder="repeat password" className="text" />
      </div>
      <div>
        <button className="button">Register</button>
      </div>
    </div>
  )
}

export default RegisterPage;