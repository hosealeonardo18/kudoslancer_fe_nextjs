import style from './header.module.css';

export default function Header() {
  return (
    <>
      <div className={`container-fluid ${style.containerFluid}`}>
        <div className="container">
          <div className="row">
            <h4>Top Job Seekers</h4>
          </div>
        </div>
      </div>
    </>
  );
}
