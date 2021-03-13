import RepositoryList from "./components/RepositoryList";
import { Counter } from "./components/Counter";
import "./styles/global.scss";

const App = () => {
  return (
    <>
      <Counter />
      <RepositoryList />
    </>
  );
};

export default App;
