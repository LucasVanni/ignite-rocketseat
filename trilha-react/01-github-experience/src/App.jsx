import RepositoryList from "./components/RepositoryList";
import { Counter } from "./components/Counter";
import "./styles/global.scss";

const App = () => {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  );
};

export default App;
