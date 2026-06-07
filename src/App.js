function App() {
  return (
    <>
  <header className="header">
    <h1>Web Dev Roadmap</h1>
    <ul className="flex">
      <li className="main-list">
        <a className="main-link" href="www">
          Basics
        </a>
      </li>
      <li className="main-list">
        <a className="main-link" href="www">
          Frameworks
        </a>
      </li>
      <li className="main-list">
        <a className="main-link" href="www">
          Tips
        </a>
      </li>
    </ul>
  </header>
  <main className="hero-section">
    <div className="hero-text">
      <h2>Start your journey with Web Development</h2>
      <p>Learn step-by-step and build real projects.</p>
      <a href="#" className="hero-btn">
        Start Learning
      </a>
    </div>
    <img
      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
      alt=""
      className="hero-img"
    />
  </main>
  <footer>
    React Course - Level 1 (session 1)
    <span>🧡</span>
  </footer>
</>

  );
}

export default App;
