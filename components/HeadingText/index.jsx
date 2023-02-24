import style from './heading.module.css';

export default function Headingtext({ children }) {
  return <h3 className={style.headingtext}>{children}</h3>;
}
