import { RiContactsBookFill } from "react-icons/ri";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";


function App() {
  return (
    <div>
      <h1>
        Phonebook
        <RiContactsBookFill />
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
