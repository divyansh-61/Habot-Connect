/* eslint-disable react/no-unescaped-entities */
// LoginSignup.jsx
import { useState } from 'react';
// import './LoginSignup.css';

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true);

    // Toggle between login and signup
    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        // Main container with gradient background
        <div className="habot-auth-container min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            {/* Card container with glass effect */}
            <div className="habot-auth-card bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">

                {/* Left side - Image section */}
                <div className="habot-auth-image-section w-full md:w-1/2 bg-indigo-600 p-12 text-white hidden sm:flex flex-col justify-center items-center">
                    <div className="habot-auth-image-content text-center">
                        <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                        <p className="mb-8 text-indigo-200">
                            {isLogin
                                ? "Don't have an account? Join us now!"
                                : "Already have an account? Sign in!"}
                        </p>
                        <button
                            onClick={toggleForm}
                            className="habot-auth-toggle-btn px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-indigo-600 transition-colors duration-300"
                        >
                            {isLogin ? 'Sign Up' : 'Sign In'}
                        </button>
                    </div>
                </div>

                {/* Right side - Form section */}
                <div className="habot-auth-form-section w-full md:w-1/2 px-6 py-10 sm:p-12">
                    <div className="habot-auth-form-content max-w-md mx-auto">
                        <h3 className="text-2xl font-bold mb-8 text-gray-800">
                            {isLogin ? 'Sign in to Account' : 'Create Account'}
                        </h3>

                        {/* Form */}
                        <form className="habot-auth-form space-y-6">
                            {/* Show name field only for signup */}
                            {!isLogin && (
                                <div className="habot-auth-input-group">
                                    <label className="habot-auth-label block text-sm font-medium text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="habot-auth-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200"
                                        placeholder="Enter your name"
                                    />
                                </div>
                            )}

                            {/* Email field */}
                            <div className="habot-auth-input-group">
                                <label className="habot-auth-label block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="habot-auth-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Password field */}
                            <div className="habot-auth-input-group">
                                <label className="habot-auth-label block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="habot-auth-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200"
                                    placeholder="Enter your password"
                                />
                            </div>

                            {/* Show confirm password field only for signup */}
                            {!isLogin && (
                                <div className="habot-auth-input-group">
                                    <label className="habot-auth-label block text-sm font-medium text-gray-700 mb-2">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className="habot-auth-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200"
                                        placeholder="Confirm your password"
                                    />
                                </div>
                            )}

                            {/* Submit button */}
                            <button
                                type="submit"
                                className="habot-auth-submit w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                            >
                                {isLogin ? 'Sign In' : 'Sign Up'}
                            </button>

                            <div className='block sm:hidden'>
                                {isLogin ?
                                    <span>Don't have an account?
                                        <button
                                            onClick={toggleForm}
                                            className="habot-auth-toggle-btn text-indigo-700 font-semibold"
                                        >
                                            Sign Up
                                        </button>
                                    </span>
                                    :
                                    <span>Already have an account?
                                        <button className='text-indigo-700 font-semibold' onClick={toggleForm}>Sign In</button>
                                    </span>
                                }
                            </div>
                        </form>

                        {/* Social login options */}
                        <div className="habot-auth-social mt-8">
                            <p className="text-center text-gray-600 mb-4">Or continue with</p>
                            <div className="flex justify-center space-x-4">
                                {/* Google button */}
                                <button className="habot-auth-social-btn p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                                        />
                                    </svg>
                                </button>
                                {/* Facebook button */}
                                <button className="habot-auth-social-btn p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;