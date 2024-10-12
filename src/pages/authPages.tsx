import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        
        <div className="w-1/2 bg-indigo-500 flex flex-col justify-center items-center text-white p-8">
          <h1 className="text-3xl font-bold mb-4">{isLogin ? 'Welcome Back!' : 'Join Us!'}</h1>
          <p className="text-base mb-6 text-center">
            {isLogin
              ? 'To keep connected with us, please login with your personal info.'
              : 'Sign up to get access to our platform.'}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="bg-white text-indigo-500 py-2 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-white">
          <h2 className="text-2xl font-bold mb-6">{isLogin ? 'Sign In' : 'Create Account'}</h2>

          <div className="flex space-x-4 mb-6">
            <button className="bg-gray-200 p-3 rounded-full text-lg">
              <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button className="bg-gray-200 p-3 rounded-full text-lg">
              <FontAwesomeIcon icon={faGoogle} />
            </button>
            <button className="bg-gray-200 p-3 rounded-full text-lg">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </button>
          </div>

          <p className="text-gray-500 mb-4">or use your email for registration:</p>

          <form className="space-y-4 w-full max-w-xs">
            {!isLogin && (
              <div className="relative">
                <FontAwesomeIcon icon={faUser} className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full pl-10 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            )}
            <div className="relative">
              <FontAwesomeIcon icon={faEnvelope} className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-all"
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
    

export default AuthPage;
