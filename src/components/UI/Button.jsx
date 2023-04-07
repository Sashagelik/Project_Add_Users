import s from "../UI/Button.module.css";

const Button = (props) => {
  return (
    <button
      className={s.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
