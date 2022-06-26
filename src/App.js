import './App.css';

// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';

import Header from "./components/Header";
import Contact from "./components/Contact";
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <p className="border">.....................................................................</p>
      {contacts.map((val, idx) => {
        return <Contact key={idx} data={val} />;
      })}
    </div>
  );
}

export default App;
