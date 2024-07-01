import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import DiaryList from "./component/Body/Diary/DiaryList";
import CreateDiary from "./component/Body/Diary/CreateDiary";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <CreateDiary />
        <DiaryList />
        <Footer />
      </div>
    </>
  );
}

export default App;
