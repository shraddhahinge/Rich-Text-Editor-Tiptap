import "./App.css";
import Header from "./components/Header";
import RichTextEditor from "./components/richTextEditor/RichTextEditor";

function App() {
  return (
    <div>
      <div className="w-3/4 h-full m-auto mt-1 screen  flex items-center justify-center flex-col">
        <Header />
        <RichTextEditor />
      </div>
    </div>
  );
}

export default App;
