import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleBlur = (field: keyof typeof formData) => {
    setTouched({
      ...touched,
      [field]: true,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFieldInvalid = (field: keyof typeof formData) =>
    touched[field] && !formData[field];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);  // Reset success message

    // console.log(formData.email, formData.name, formData.password)

    try {
      if (isLogin) {
        // Send login request
        const response = await axios.post(`${API_BASE_URL}/auth/auth/v1/login`, {
          email: formData.email,
          password: formData.password,
        });

        // console.log(formData.email);

        // Store the JWT token in localStorage
        localStorage.setItem('token', response.data.access_token);
        navigate('/');  // Redirect after login
      } else {
        // Send registration request
        await axios.post(`${API_BASE_URL}/auth/auth/v1/register`, {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        setSuccessMessage('Account created successfully. Please log in.');
        setIsLogin(true);  // Switch to login after registration
      }
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);  // Show backend error message
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Left section with the logo and switch button */}
        <div className="w-full md:w-1/2 bg-indigo-500 flex flex-col justify-center items-center text-white p-8">
          <h1 className="text-3xl font-bold mb-4">{isLogin ? 'Join Us!' : 'Welcome Back!'}</h1>
          <p className="text-base mb-6 text-center">
            {isLogin
              ? 'Sign up to get access to our platform.'
              : 'To keep connected with us, please login with your personal info.'}
          </p>
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError(null); // Reset errors when switching between login and registration
            }}
            className="bg-white text-indigo-500 py-2 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100"
          >
            {isLogin ? 'Create Account' : 'Sign In'}
          </button>
        </div>

        {/* Right section with the form and social icons */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
          <h2 className="text-2xl font-bold mb-6">{isLogin ? 'Sign In' : 'Create Account'}</h2>

          {/* Social media icons */}
          <div className="flex justify-center space-x-4 mb-6">
            <button
              className="p-3 bg-blue-600 rounded-full text-white shadow-lg hover:bg-blue-700"
              title="Sign in with Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button className="p-3 bg-red-600 rounded-full text-white shadow-lg hover:bg-red-700" title="Sign in with Google">
              <FontAwesomeIcon icon={faGoogle} />
            </button>
            <button className="p-3 bg-blue-800 rounded-full text-white shadow-lg hover:bg-blue-900" title="Sign in with LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </button>
          </div>

          <p className="mb-4 text-gray-500">or use your email for registration:</p>

          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-xs">
            {!isLogin && (
              <div className="relative">
                <FontAwesomeIcon icon={faUser} className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={`w-full pl-10 border p-3 rounded-lg focus:outline-none focus:ring-2 ${
                    isFieldInvalid('name') ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
                  }`}
                  onBlur={() => handleBlur('name')}
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
            )}
            <div className="relative">
              <FontAwesomeIcon icon={faEnvelope} className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={`w-full pl-10 border p-3 rounded-lg focus:outline-none focus:ring-2 ${
                  isFieldInvalid('email') ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
                }`}
                onBlur={() => handleBlur('email')}
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={`w-full pl-10 border p-3 rounded-lg focus:outline-none focus:ring-2 ${
                  isFieldInvalid('password') ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
                }`}
                onBlur={() => handleBlur('password')}
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-all"
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          {/* Show success or error messages */}
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
