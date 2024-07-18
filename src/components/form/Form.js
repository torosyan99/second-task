import React, { useState } from "react";
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
  const [showCalendar, setShowCalendar] = useState(false)
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
        // dispatch(addListItem({}));
      }}
    >
      <textarea
        className="form__description"
        name="description"
        defaultValue={state.description}
      ></textarea>
      <input className="form__input" name="title" defaultValue={state.title} />
      <div className="form__item">
        <input className="form__item-input"  defaultValue={state.data}/> 
        <button className="form__calendar-button" onClick={() => setShowCalendar(bool => !bool)}>
          <svg width={24} height={24} fill={'none'} stroke={showCalendar ? 'gray': 'black'}>
            <use xlinkHref="./images/icons.svg#calendar"></use>
          </svg>
        </button>
        {showCalendar && <Calendar />}
      </div>
      <button className="form__button">add</button>
    </form>
  );
}

export default Form;
