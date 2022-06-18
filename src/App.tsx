import "./App.css";
import { RecoilRoot } from "recoil";
import { TodoPage } from "./pages/todo/TodoPage";

function App() {
  return (
    <RecoilRoot>
      <TodoPage />
    </RecoilRoot>
  );
}

export default App;
