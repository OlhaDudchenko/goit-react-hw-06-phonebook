import { createAction } from "@reduxjs/toolkit";

//Action with redux-toolkit:
export const add = createAction("phonebook/add");

export const del = createAction("phonebook/delete");

export const filterItems = createAction("phonebook/filter");

//Action with simple redux:
// export const add = (newContact) => ({
//         type: types.ADD,
//         payload: newContact,

// });
