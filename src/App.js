import Logo from "./components/Logo";
import "./App.css";

function App() {
  return (
    <div>
      <Logo />
      <nav class="navbar background">
        <ul class="nav-list"></ul>
        <li>About</li>
        <li>Events</li>
        <li>People</li>
      </nav>
    </div>
  );
}

export default App;
