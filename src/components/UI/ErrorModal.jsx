import Button from "./Button";
import Card from "./Card";
import s from "../UI/ErrorModal.module.css";

const ErrorModal = ({ title, message, onCloseModal }) => {
  return (
    <>
      <div className={s.backdrop} onClick={onCloseModal}></div>
      <Card className={s.modal}>
        <header className={s.header}>
          <h2>{title}</h2>
        </header>
        <div className={s.content}>
          <p>{message}</p>
        </div>
        <footer className={s.actions}>
          <Button onClick={onCloseModal}>Закрыть</Button>
        </footer>
      </Card>
    </>
  );
};
export default ErrorModal;
