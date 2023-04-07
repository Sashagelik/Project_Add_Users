import s from "../UI/Card.module.css";

const Card = (props) => {
  return <div className={`${s.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
