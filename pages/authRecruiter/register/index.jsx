import style from './register.module.css';
import ButtonAuth from '@/components/ButtonAuth/ButtonAuth';
import Form from '@/components/Form';
import HeaderAuth from '@/components/HeaderAuth';
import Link from 'next/link';

export default function register() {
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
                    <form onSubmit={''}>
                      <Form children="Nama" type="text" name="fullname" placeholder="Masukan nama panjang" />

                      <Form children="Email" type="email" name="email" placeholder="Masukan alamat email" />

                      <Form children="Perusahaan" type="text" name="perusahaan" placeholder="Masukan nama perusahaan" />

                      <Form children="Jabatan" type="text" name="jabatan" placeholder="Posisi di perusahaan Anda" />

                      <Form children="No Handphone" type="text" name="no_telp" placeholder="Masukan no Handphone" />

                      <Form children="Kata Sandi" type="password" name="password" placeholder="Masukan kata sandi" />

                      <Form children="Konfirmasi Kata Sandi" type="password" name="currentPassword" placeholder="Masukan konfirmasi kata sandi" />

                      <div className="mb-3 form-group text-center mt-5">
                        <ButtonAuth Button="Register" />
                      </div>
                      <div className="mt-3 text-center">
                        <span className={`${style.haveAccount} mb-3`}>Don't have an account? </span>
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
