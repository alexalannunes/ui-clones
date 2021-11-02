import { Aside } from "./components/Aside";
import { Content } from "./components/Content";
import { Menu } from "./components/Menu";

function App() {
  return (
    <div className="flex h100p">
      <Menu />
      <Content />
      <Aside />
    </div>
  );
}

export default App;
