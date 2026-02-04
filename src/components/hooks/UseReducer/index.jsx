import React, { useReducer } from "react";
import reducer from "./reducer.jsx";

const booksData = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
  { id: 4, title: "Book 4", author: "Author 4" },
];

const Modal = ({ modalText }) => {
  return <p style={{ color: "green" }}>{modalText}</p>;
};

const initialState = {
  books: booksData,
  title: "",
  author: "",
  modalText: "",
  showModal: false,
};

const UseReducer = () => {
  //   const [books, setBooks] = useState(booksData);
  const [bookState, dispatch] = useReducer(reducer, initialState);
  //   const [title, setTitle] = useState("");
  //   const [author, setAuthor] = useState("");
  //   const [modalText, setModalText] = useState("");
  //   const [showModal, setShowModal] = useState(false);

  const handleSumition = (e) => {
    e.preventDefault();

    if (!bookState.title || !bookState.author) {
      dispatch({
        type: "SHOW_MODAL",
        payload: "Please fill all fields",
      });
      //   setModalText("Please fill all fields");
      //   setShowModal(true);
      return;
    }

    const newBook = {
      id: bookState.length + 1,
      title: bookState.title,
      author: bookState.author,
    };

    dispatch({
      type: "ADD_BOOK",
      payload: newBook,
    });

    dispatch({
      type: "SHOW_MODAL",
      payload: "Book added successfully",
    });

    setTimeout(() => {
      dispatch({
        type: "HIDE_MODAL",
      });
    }, 3000);
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_BOOK",
      payload: id,
    });

    dispatch({
      type: "SHOW_MODAL",
      payload: "Book deleted successfully",
    });

    setTimeout(() => {
      dispatch({ type: "HIDE_MODAL" });
    }, 2000);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h1 className="text-center mt-5">Book List Example</h1>

      <form onSubmit={handleSumition}>
        <input
          type="text"
          placeholder="Title"
          value={bookState.title}
          onChange={(e) =>
            dispatch({
              type: "SET_INPUT",
              payload: { name: "title", value: e.target.value },
            })
          }
        />

        <input
          type="text"
          className="ms-2"
          placeholder="Author"
          value={bookState.author}
          onChange={(e) =>
            dispatch({
              type: "SET_INPUT",
              payload: { name: "author", value: e.target.value },
            })
          }
        />

        <input type="submit" className="ms-2" value="Add Book" />
      </form>

      {bookState.showModal && <Modal modalText={bookState.modalText} />}

      <ul className="mt-2">
        {bookState.books.map(({ id, title, author }) => (
          <li key={id}>
            {title}, {author}
            <button
              className="ms-2"
              onClick={() => handleDelete(id)}>
              Delete
            </button>      
          </li> 
        ))}
      </ul>
    </div>
  );
};

export default UseReducer;
