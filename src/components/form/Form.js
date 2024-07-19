import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addListItem,
  changeState,
  closeEdit,
  editListItem,
} from "../../store/listSlice";
import Calendar from "../calendar/Calendar";

import "./form.scss";

function createNewObj(state) {
  const result = {};
  Object.keys(state).forEach((key) => {
    result[key] = false;
  });

  return result;
}

function checkStr(state) {
  console.log(state);
  const result = {};
  let found = false;
  Object.keys(state).forEach((key) => {
    if (key !== "id" && !state[key].length) {
      result[key] = true;
      found = true;
    } else {
      result[key] = false;
    }
  });

  return [found, result];
}

function Form() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.list.newState);
  const editBool = useSelector((state) => state.list.edit);
  const [error, setError] = useState(createNewObj(state));
  const [showCalendar, setShowCalendar] = useState(false);


  useEffect(() => {
    setShowCalendar(false);
  }, [state.data]);
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        const findResult = checkStr(state);
        if (findResult[0]) {
          setError(findResult[1]);
          return;
        }

        if (editBool) {
          dispatch(editListItem());
        } else {
          dispatch(addListItem());
        }
      }}
    >
      <textarea
        className="form__description"
        name="description"
        style={{ border: error.description ? "1px solid red" : "" }}
        placeholder="Description"
        onChange={({ target }) => {
          dispatch(changeState({ key: target.name, value: target.value }));
        }}
        value={state.description}
      ></textarea>

      <input
        className="form__input"
        name="title"
        style={{ border: error.title ? "1px solid red" : "" }}
        placeholder="Title"
        type="text"
        onChange={({ target }) => {
          dispatch(changeState({ key: target.name, value: target.value }));
        }}
        value={state.title}
      />
      <div
        className="form__item"
        style={{ border: error.data ? "1px solid red" : "" }}
      >
        <input
          className="form__item-input"
          onChange={({ target }) => {
            dispatch(changeState({ key: target.name, value: target.value }));
          }}
          value={state.data}
          placeholder="Date"
          disabled
        />
        <button
          className="form__calendar-button"
          type="button"
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
        {showCalendar && <Calendar />}
      </div>
      {editBool ? (
        <>
          <button className="form__edit">
            <svg width={24} height={24}>
              <use xlinkHref="./images/icons.svg#edit"></use>
            </svg>
          </button>
          <button
            className="form__close-edit"
            type="button"
            onClick={() => {
              dispatch(closeEdit());
            }}
          >
            <svg width={24} height={24}>
              <use xlinkHref="./images/icons.svg#close"></use>
            </svg>
          </button>
        </>
      ) : (
        <button className="form__button">
          <svg width={24} height={24}>
            <use xlinkHref="./images/icons.svg#plus"></use>
          </svg>
        </button>
      )}
    </form>
  );
}

export default Form;
