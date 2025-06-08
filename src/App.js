import logo from './assets/Logo .svg';

import './App.css';

function App() {
  return (
    <div className="App">
     
      <header className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </header>

      <main>

      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
