import { FcGoogle } from 'react-icons/fc';
import loginImg from '../../assets/others/authentication2.png';
import { CiFacebook } from 'react-icons/ci';
import { VscGithub } from 'react-icons/vsc';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from 'react';
import UseAuthContext from '../../hook/UseAuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [visible, setVisible] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false); // toggle forgot password view
  const { loginWithGoogle, loginEmail, resetPassword } = UseAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginEmail(email, password)
      .then((res) => {
        toast.success('Login successful');
        navigate(from);
      })
      .catch(() => {
        toast.error('Invalid email or password');
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        toast.success('Login successful');
        navigate(from);
      })
      .catch((err) => {
        navigate(err.message);
      });
  };

  const handleCaptcha = (value) => {
    setVisible(true);
    if (value.length !== 6) return;
    if (validateCaptcha(value) === true) {
      setVisible(false);
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
      .then(() => toast.success('Password reset link sent to your email'))
      .catch(() => toast.error('Failed to send reset email'));
  };

  return (
    <div className="">
      <div className="hero bg-logImg min-h-screen">
        <div className="hero-content shadow-2xl bg-logImg flex-col lg:py-14 lg:px-20 lg:flex-row">
          <div className="text-center flex-1 lg:text-left">
            <img src={loginImg} alt="" />
          </div>

          <div className="card flex-1 w-full max-w-md">
            {!forgotPassword ? (
              <form onSubmit={handleLogin} className="card-body">
                <h1 className="text-center text-3xl font-bold">Login</h1>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                    <span
                      className="cursor-pointer text-[#D1A054] hover:underline"
                      onClick={() => setForgotPassword(true)}
                    >
                      Forgot Password?
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    onChange={(e) => handleCaptcha(e.target.value)}
                    placeholder="type here"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button disabled={visible} className="btn bg-[#D1A054B3] text-white">
                    Login
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleResetPassword} className="card-body">
                <h1 className="text-center text-3xl font-bold">Reset Password</h1>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Enter your email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#D1A054B3] text-white">Send Reset Link</button>
                </div>
                <p
                  className="text-center mt-4 cursor-pointer text-[#D1A054] hover:underline"
                  onClick={() => setForgotPassword(false)}
                >
                  Back to Login
                </p>
              </form>
            )}

            <div className="text-center mt-4">
              {!forgotPassword && (
                <>
                  <Link to="/signUp" className="text-[#D1A054] hover:cursor-pointer text-xl">
                    New here? Create a New Account
                  </Link>
                  <p className="text-xl mt-2">Or sign in with</p>
                  <div className="flex justify-center gap-6 mt-4 text-4xl">
                    <FcGoogle onClick={handleGoogleLogin} />
                    <CiFacebook />
                    <VscGithub />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
