import Image from 'next/image';
import style from './header.module.css';

export default function HeaderAuth({ children, description }) {
  return (
    <>
      <h3 className={style.headingText}>{children}</h3>
      <p className={`mb-5 ${style.description}`}>{description}</p>
    </>
  );
}
