
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/others/authentication2.png'
import { FcGoogle } from 'react-icons/fc';
import { CiFacebook } from 'react-icons/ci';
import { VscGithub } from 'react-icons/vsc';
import UseAuthContext from '../../hook/UseAuthContext';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
const SignUp = () => {

    const {loginEmail,createUser}=UseAuthContext()
    const navigate=useNavigate()
    // const {loginEmail}=useContext(AuthContext)
    const {
        register,handleSubmit,formState: { errors },} = useForm()

    //   login with google
      const onSubmit = (data) => {
        createUser(data?.email,data?.password)
        .then(()=>{
          toast.success('Sign Up is successfully') 
          navigate('/')
        })
        .catch(err=>{
            toast.error(err.message)
        })
    
      }



    return (
        <div>
       <Helmet>
        <title>Bolaka Resturant | sign Up</title>
       </Helmet>
           <div className="hero bg-logImg min-h-screen">
            <div className="hero-content shadow-2xl bg-logImg flex-col lg:py-14 lg:px-20 lg:flex-row-reverse">
              <div className="text-center flex-1 lg:text-left">
              <img src={loginImg} alt="" />
              </div>
              <div className="card  flex-1 w-full max-w-md ">
                <form  onSubmit={handleSubmit(onSubmit)}className="card-body">
                <h1 className='text-center text-3xl font-bold'>Sign Up</h1>
                <div className="form-control w-full">
                    <label className="label ">
                      <span className="label-text text-xl">Name <span className='text-red-500'>*</span></span>
                    </label>
                    <input type="text" name='name'   {...register("name",{ required: true })} placeholder="Name"  className="input input-bordered w-full"  />
                    {errors.name && <span className='text-red-500'>name is require</span>}
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-xl">Email <span className='text-red-500'>*</span></span>
                    </label>
                    <input type="email" name='email'  {...register("email",{ required: true })} placeholder="email" className="input input-bordered w-full" required />
                    {errors.email?.type==='required' && <span className='text-red-500'>name is require</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl">Password <span className='text-red-500'>*</span></span>
                    </label>
                    <input type="password"  {...register("password",{ required: true,maxLength:20,
                      minLength:6,
                      pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                      })} name='password' placeholder="password" className="input input-bordered"  />
                    {errors.password?.type==='required' && <span className='text-red-500'>password is require</span>}
                    {errors.password?.type==='minLength' && <span className='text-red-500'>Password at least 6 character</span>}
                    {errors.password?.type==='maxLength' && <span className='text-red-500'>Password maximun 20 character</span>}
                    {errors.password?.type==='pattern' && <span className='text-red-500'>Password at least one uppercase,one lowercase,one number and special character</span>}
                   
                  </div>
                
                
                  <div className="form-control mt-6">
                    <button className="btn  bg-[#D1A054B3] text-white">Login</button>
                  </div>
                </form>
                <div className='text-center'>
                  <Link to={'/login'} className='text-[#D1A054] hover:cursor-pointer text-xl'>Already registered? Go to log in</Link>
                  <p className='text-xl'>Or sign in with </p>
                   <div className='flex justify-center gap-6 mt-4 text-4xl'>
                            <FcGoogle></FcGoogle>
                            <CiFacebook />
                            <VscGithub />
                          </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
    );
};

export default SignUp;