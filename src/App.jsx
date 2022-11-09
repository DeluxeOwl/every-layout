import "./App.css";
function App() {
  return (
    <div style={{ margin: "0 1rem 0 1rem" }}>
      <h1>The stack</h1>
      <div style={{ height: "268px" }}>
        <div className="stack">
          <p>First element</p>
          <p>Second element</p>
          <p>Third element</p>
          <p>Fourth element</p>
        </div>
      </div>
      <h1>The box</h1>
      <div>
        <div className="stack">
          <div className="box">Box 1</div>
          <div className="box invert">Box 2</div>
          <div className="box">Box 3</div>
          <div className="box" style={{ padding: "0 !important" }}>
            <div className="box invert">head</div>
            <div className="box">body</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
