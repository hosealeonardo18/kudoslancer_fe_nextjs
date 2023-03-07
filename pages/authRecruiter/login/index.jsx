import ButtonAuth from '@/components/ButtonAuth/ButtonAuth';
import Form from '@/components/Form';
import HeaderAuth from '@/components/HeaderAuth';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import style from './login.module.css';

export default function login() {
  const router = useRouter();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/recruiter/auth/login', login)
      .then((response) => {
        console.log(response.data.data);
        alert(response.data.message);
        const token = response.data.data.token;
        const id = response.data.data.id;
        const role = response.data.data.role;
        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        localStorage.setItem('role', role);
        router.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className={`${style.bgImage} col-md-6 bg-image align-items-center`}>
            <div>
              <img className={style.logoCustom} src={''} alt="" />
              <p className={`px-4 ${style.description}`}>Temukan developer berbakat & terbaik di berbagai bidang keahlian</p>
            </div>
          </div>
          <div className={`col-md-6 ${style.bgImageRes}`}>
            <div className={`${style.login} login d-flex align-items-center py-5`}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <HeaderAuth children={`Halo, Selamat Datang`} description={`Silahkan login terlebih dahulu`} />
                    <form onSubmit={handleLogin}>
                      <Form children="Email" type="email" name="email" placeholder="example@mail.com" value={login.email} change={handleChange} />
                      <Form children="Password" type="password" name="password" placeholder="password" value={login.password} change={handleChange} />

                      <div style={{ textAlign: 'right' }} className="mt-3">
                        <Link className={`${style.anchorText} small text-decoration-none text-secondary`} href="">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="mb-3 form-group text-center mt-4">
                        <ButtonAuth Button="Login" click={handleLogin} />
                      </div>

                      <div className="mt-3 text-center">
                        <span className={`${style.haveAccount} mb-3 me-2`}>Are you a Jobseeker? </span>
                        <Link className={`${style.anchorText} small text-decoration-none text-warning`} href={`/auth/login`}>
                          Login
                        </Link>
                      </div>

                      <div className="mt-3 text-center">
                        <span className={`${style.haveAccount} mb-3 me-2`}>Don't have an account? </span>
                        <Link className={`${style.anchorText} small text-decoration-none text-warning`} href={`/authRecruiter/register`}>
                          Sign Up
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
