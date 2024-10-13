import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation after login

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
  const [error, setError] = useState<string | null>(null); // For handling errors
  const navigate = useNavigate(); // To redirect after login

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
    setError(null); // Reset any previous errors

    try {
      if (isLogin) {
        // Send login request
        const response = await axios.post('https://auth-jobsphere-v1.onrender.com/auth/v1/login', {
          email: formData.email,
          password: formData.password,
        });

        // Store the JWT token in localStorage
        console.log(response.data);
        localStorage.setItem('token', response.data.access_token);

        // Redirect to a protected route (e.g., dashboard)
        navigate('/');
      } else {
        // Send registration request
        await axios.post('https://auth-jobsphere-v1.onrender.com/auth/v1/register', {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        // After successful registration, switch to login view
        setIsLogin(true);
      }
    } catch (err) {
      setError('wrong email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 bg-indigo-500 flex flex-col justify-center items-center text-white p-8">
          <h1 className="text-3xl font-bold mb-4">{isLogin ? 'Join Us!' : 'Welcome Back!'}</h1>
          <p className="text-base mb-6 text-center">
            {isLogin
              ? 'Sign up to get access to our platform.'
              : 'To keep connected with us, please login with your personal info.'}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="bg-white text-indigo-500 py-2 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100"
          >
            {isLogin ? 'Create Account' : 'Sign In'}
          </button>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
          <div className="flex items-center gap-3 mb-8 text-3xl text-indigo-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/92f31eb56999abf644233e1c0f153f9aa5c68d1f54f23952e0e990c991f52688?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
              alt="JobSphere logo"
              className="object-contain w-10 aspect-square"
            />
            <span className="font-semibold">JobSphere</span>
          </div>

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

          {/* Show error message if any */}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
