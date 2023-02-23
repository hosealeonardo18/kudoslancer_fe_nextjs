import ButtonAuth from '@/components/ButtonAuth/ButtonAuth';
import Form from '@/components/Form';
import HeaderAuth from '@/components/HeaderAuth';
import Link from 'next/link';
import style from './login.module.css';

export default function login() {
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
                    <HeaderAuth
                      children={`Reset Password`}
                      description={`You need to change your password to activate your account
`}
                    />
                    <form onSubmit={login}>
                      <Form children="Kata sandi" type="password" name="password" placeholder="Masukan kata sandi" />

                      <Form children="Konfirmasi kata sandi baru" type="password" name="currentPassword" placeholder="Masukan konfirmasi kata sandi" />

                      <div className="mb-3 form-group text-center mt-5">
                        <ButtonAuth Button="Reset password" />
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
