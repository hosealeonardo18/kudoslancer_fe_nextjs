import style from './register.module.css';
import ButtonAuth from '@/components/ButtonAuth/ButtonAuth';
import Form from '@/components/Form';
import HeaderAuth from '@/components/HeaderAuth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function register() {
  const router = useRouter();

  const [register, setRegister] = useState({
    fullname: '',
    email: '',
    company_name: '',
    company_field: '',
    no_telp: '',
    password: '',
    currentPassword: '',
  });

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.API_KUDOSLANCER}/recruiter/auth/register`, register)
      .then((res) => {
        console.log(res);
        if (res.data.message !== 'Recruiter Registered!') {
          Swal.fire({
            icon: 'error',
            title: `${res.data.message}`,
            text: 'Something went wrong!',
          });
        } else {
          Swal.fire(`${res.data.message}`, 'You clicked the button!', 'success');
          router.push('/authRecruiter/login');
        }
      })
      .catch((err) =>
        Swal.fire({
          icon: 'error',
          title: `${err.response.message}`,
          text: 'Something went wrong!',
        })
      );
  };

  return (
    <section>
      <div className="container-fluid ">
        <div className="row vh-100">
          <div className={`${style.bgImage} col-md-6 bg-image align-items-center`}>
            <div>
              <img className={style.logoCustom} src={''} alt="" />
              <p className={`px-4 ${style.description}`}>Temukan developer berbakat & terbaik di berbagai bidang keahlian</p>
            </div>
          </div>
          <div className={`col-md-6 ${style.bgImageRes}`}>
            <div className={`${style.login} login d-flex align-items-center`}>
              <div className="container">
                <div className="row ">
                  <div className="col-lg-10 col-xl-7 mx-auto ">
                    <HeaderAuth children={`Halo, Selamat Datang`} description={`Silahkan Daftar Akun terlebih dahulu`} />
                    <form onSubmit={handleSubmit}>
                      <Form children="Nama" type="text" name="fullname" placeholder="Masukan nama panjang" change={handleChange} />

                      <Form children="Email" type="email" name="email" placeholder="Masukan alamat email" change={handleChange} />

                      <Form children="Perusahaan" type="text" name="company_name" placeholder="Masukan nama perusahaan" change={handleChange} />

                      <Form children="Jabatan" type="text" name="company_field" placeholder="Posisi di perusahaan Anda" change={handleChange} />

                      <Form children="No Handphone" type="text" name="no_telp" placeholder="Masukan no Handphone" change={handleChange} />

                      <Form children="Kata Sandi" type="password" name="password" placeholder="Masukan kata sandi" change={handleChange} />

                      <Form children="Konfirmasi Kata Sandi" type="password" name="currentPassword" placeholder="Masukan konfirmasi kata sandi" change={handleChange} />

                      <div className="mb-3 form-group text-center mt-5">
                        <ButtonAuth Button="Register" />
                      </div>

                      <div className="mt-3 text-center">
                        <span className={`${style.haveAccount} mb-3 me-2`}>Register as a Jobseeker ?</span>
                        <Link className={`${style.anchorText} small text-decoration-none text-warning`} href={`/auth/register`}>
                          Signup
                        </Link>
                      </div>

                      <div className="mt-3 text-center">
                        <span className={`${style.haveAccount} mb-3 me-2`}>Have an account? </span>
                        <Link className={`${style.anchorText} small text-decoration-none text-warning`} href={`/authRecruiter/login`}>
                          Login
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
