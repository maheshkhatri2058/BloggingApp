import React from "react";
function Login() {
  function adduser(e)
  {
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const password=form.password.value;
    const myobj={name,password}
    console.log(myobj);
    fetch("http://localhost:3000/register/users",
      {
        method: "POST",
        body: JSON.stringify(myobj),
         headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) =>{
        console.log(data);
      form.reset();
      })


  }
  return (
    <>
      <div className="min-h-screen flex justify-center items-center animate__animated  animate__zoomIn">
        <form onSubmit={adduser} className="flex-col gap-8 space-y-8">
          <div className="flex-col gap-6 space-y-3">
            <h2>Username:</h2>
            <input 
            type="email"
            id="name" 
            name="name"
             className="outline-none bg-white border-2 border-solid px-5 py-2 border-slate-400 rounded-md placeholder:text-slate-400"
             placeholder="Email or username"  required>

             </input>
          </div>
          <div className="space-y-3">
            <h2>Password:</h2>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className="outline-none bg-white border-2 border-solid px-5 py-2 border-slate-400 rounded-md placeholder:px-1"
              required
            ></input>
            <br></br>
          </div>
          <div className="flex justify-center w">
          <input
            type="submit"
            value="Login"
            className="btn btn-primary flex justify-center items-center text-white px-12"
          ></input>
          </div>
      
        </form>
      </div>
    </>
  );
}

export default Login;
