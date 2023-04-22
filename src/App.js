import "./styles.css";
import User from "./User";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <User data={{ name: "Dhanveer" }} />
    </div>
  );
}
