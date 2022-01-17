import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <form className="form">
        <input type="text" placeholder="Username" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
