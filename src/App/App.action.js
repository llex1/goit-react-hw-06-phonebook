const localStorage = (contacts) => {
  return {
    type: "ADD",
    payload: {
      contacts: contacts
    }
  }
}

export default {localStorage}
