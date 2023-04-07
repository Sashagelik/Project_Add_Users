import Card from "../UI/Card";
import s from "../Users/CreateUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputError, setInputError] = useState(false);

  const createUserHandler = (e) => {
    e.preventDefault();
    if (!inputName.trim().length || !inputAge.trim().length) {
      setInputError({
        title: "Некорректный ввод",
        message: "Введите данные в поля",
      });
      return;
    }
    if (Number(inputAge) <= 0) {
      setInputError({
        title: "Некорректный возраст",
        message: "Возраст пользователя должен быть больше 0",
      });
      return;
    }

    props.onCreateUser(inputName, inputAge);
    setInputName("");
    setInputAge("");
  };
  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setInputAge(e.target.value);
  };

  const closeModal = () => {
    setInputError((state) => !state);
  };
  const deleteForm = () => {
    setInputName("");
    setInputAge("");
  };

  return (
    <div>
      {inputError && (
        <ErrorModal
          onCloseModal={closeModal}
          title={inputError.title}
          message={inputError.message}
        />
      )}
      <Card className={s.input}>
        <form onSubmit={createUserHandler}>
          <label htmlFor="name">Имя</label>
          <input
            onChange={nameChangeHandler}
            id="name"
            type="text"
            value={inputName}
          />
          <label htmlFor="age">Возраст</label>

          <input
            onChange={ageChangeHandler}
            id="age"
            type="number"
            value={inputAge}
          />
          <Button type="submit">Добавить пользователя</Button>
          <Button onClick={deleteForm} type="reset">
            Очистить форму
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CreateUser;
