import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form className="form">
        <h1>Hello</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
