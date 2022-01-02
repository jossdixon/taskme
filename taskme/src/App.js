function App() {
  const name = 'Joss'
  const x = 1
  return (
    <div className="container">
      <h1>Hello From React!</h1>
      <h2>I'm {name}</h2>
      <h3>{ x ? "It is true." : "It is false"}</h3>
    </div>
  );
}

export default App;
