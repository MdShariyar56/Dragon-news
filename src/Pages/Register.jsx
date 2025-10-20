import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
              <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                 <h1 className='font-semibold text-center text-2xl'>Register your account</h1>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="name" className="input" placeholder="Name" />
           <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4 ">Register</button>
          <p className='text-center font-semibold pt-5'>Allready Have An Account ?{''}<Link className='text-secondary' to='/auth/login'>Login</Link></p>
        </fieldset>
      </div>
    </div>
       </div>
        </div>
    );
};

export default Register;