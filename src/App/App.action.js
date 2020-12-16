import { createAction } from "@reduxjs/toolkit";

// const localStorage = (contacts) => {
//   return {
//     type: "ADD",
//     payload: {
//       contacts: contacts
//     }
//   }
// }
const localStorage = createAction("ADD", (contacts) => ({
  payload: {
    contacts,
  },
}));

export default { localStorage };
