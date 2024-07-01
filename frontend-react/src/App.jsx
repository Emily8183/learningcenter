import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import DiaryList from "./component/Body/DiaryList";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <DiaryList />
        <Footer />
      </div>
    </>
  );
}

export default App;
