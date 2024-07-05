import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import DiaryList from "./component/Body/Diary/DiaryList";
import "./App.css"; //用于管理与 App 组件相关的样式

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
