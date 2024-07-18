import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addListItem } from "../../store/listSlice";

import "./form.scss";
import Calendar from "../calendar/Calendar";

function Form() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: "",
    description: "",
    data: "",
  });
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    setShowCalendar(false);
  }, [state.data]);
  return (
    <form
      className="form"
      onChange={({ target }) => {

        setState({
          ...state,
          [target.name]: target.value,
        });
      }}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addListItem(state));
      }}
    >
      <textarea
        className="form__description"
        name="description"
        placeholder="Description"
        defaultValue={state.description}
      ></textarea>

      <input
        className="form__input"
        name="title"
        placeholder="Title"
        type="text"
        defaultValue={state.title}
      />
      <div className="form__item">
        <input
          className="form__item-input"
          defaultValue={state.data}
          placeholder="Date"
          disabled
        />
        <button
          className="form__calendar-button"
          onClick={() => setShowCalendar((bool) => !bool)}
        >
          <svg
            width={24}
            height={24}
            fill={"none"}
            stroke={showCalendar ? "#0a0aad" : "black"}
          >
            <use xlinkHref="./images/icons.svg#calendar"></use>
          </svg>
        </button>
        {showCalendar && <Calendar setState={setState} />}
      </div>
      <button className="form__button">
        <svg width={24} height={24}>
          <use xlinkHref="./images/icons.svg#plus"></use>
        </svg>
      </button>
    </form>
  );
}

export default Form;
