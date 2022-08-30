import { createRoot } from "react-dom/client";

import Greetings from "./components/greeting";

import "./styles/main.scss";

function App() {
  return <Greetings />;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

if (module.hot) {
  module.hot.accept();
}
