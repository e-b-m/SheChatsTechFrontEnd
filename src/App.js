import logo from "./logo.svg";
import "./App.css";
import SheChatsTech from "/Users/emma/Documents/she_chats_tech/src/images/She Chats Tech.png";

function App() {
  return (
    <div className="App">
      <nav class="navbar background">
        <ul class="nav-list">
          <div class="logo">
            <img
              src={require("/Users/emma/Documents/she_chats_tech/src/images/She Chats Tech.png")}
              alt="She Chats Tech"
            ></img>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default App;
