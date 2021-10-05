import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { add, del, filterItems } from "./phonebook-actions";
import { contactsList } from "../../services/contacts";

//Reducer with redux-toolkit:
const items = createReducer(contactsList, {
  [add]: (state, action) => [...state, action.payload],
  [del]: (state, action) => state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer("", {
  [filterItems]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

//Reducer with simple redux:
// const items = (state = contactsList, { type, payload }) => {

//     switch (type) {
//         case types.ADD:
//             return [...state, payload];

//         case types.DELETE:
//             return state.filter(({id})=>id !== payload)

//         default:
//             return state;
//     }
// };

// const filter = (state = "", {type,payload}) => {
//     switch (type) {
//         case types.CHANGE_FILTER:
//             return payload;
//         default:
//         return state;
//     }

// };
