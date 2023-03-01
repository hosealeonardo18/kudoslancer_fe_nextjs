import style from './form.module.css';

export default function Form({ children, placeholder, type, name, value, change }) {
  return (
    <>
      <div className="mb-4 form-group">
        <label style={{ color: '#696f79' }} className={`formLabel ${style.formLabel}`}>
          {children}
        </label>
        <input type={type} placeholder={placeholder} name={name} id={name} onChange={change} value={value} className={`${style.input} form-control mt-2`} />
      </div>
    </>
  );
}
