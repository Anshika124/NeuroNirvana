import React from 'react';
import './styles/form.css'

function app()
{
  return (
    <>
      <div class="mainBackground">
        <div class="container">
          <section class="firstSection">
            <div class="formQuote">You look the most beautiful when you wear your smile!</div>
          </section>
          <section class="secondSection">
            <form>
              <div class="dataContainer">
                <div class="formGroup">
                  <label for="username">Name</label>
                  <input type="text" id="username" name="username"/>
                </div>
                <div class="formGroup">
                  <label for="age">Age</label>
                  <input type="number" id="age" name="age"/>
                </div>
                <div class="formGroup">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email"/>
                </div>
                <div class="formGroup">
                  <label for="number">Number</label>
                  <input type="number" id="number" name="number"/>
                </div>
                <div class="formGroup">
                  <label for="password">Password</label>
                  <input type="password" id="password" name="password"/>
                </div>
              </div>
              <div class="buttonContainer">
                <button>Register</button>
                <div class="accountSwitch">
                  <p>Already Registred? <a href="#">Login</a></p>
                </div>
              </div>
            </form>
          </section>
        </div>

      </div>
    </>
  );
}

export default app;
