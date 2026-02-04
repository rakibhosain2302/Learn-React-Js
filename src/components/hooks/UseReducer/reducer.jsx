const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload],
        title: "",
        author: "",
      };

    case "SHOW_MODAL":
      return {
        ...state,
        modalText: action.payload,
        showModal: true,
      };

    case "HIDE_MODAL":
      return {
        ...state,
        showModal: false,
      };

    case "DELETE_BOOK":
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;