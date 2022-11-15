import "./App.css";

function Title(props) {
  return <h1>{props.children}</h1>;
}
function Container(props) {
  return <div {...props}>{props.children}</div>;
}

function App() {
  return (
    <div className="wrapper">
      <Title>The stack</Title>
      <Container style={{ height: "268px" }}>
        <div className="stack">
          <p>First element</p>
          <p>Second element</p>
          <p>Third element</p>
          <p>Fourth element</p>
        </div>
      </Container>
      <Title>The box</Title>
      <Container>
        <div className="stack">
          <div className="box">Box 1</div>
          <div className="box invert">Box 2</div>
          <div className="box">Box 3</div>
        </div>
      </Container>
      <Title>The center</Title>
      <Container>
        <div className="center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
            amet dolor a neque malesuada venenatis. Curabitur mi tortor,
            convallis at nulla in, egestas cursus arcu. Phasellus pulvinar, elit
            quis ornare pulvinar, orci felis molestie velit, a elementum sapien
            odio vitae augue.
          </p>
        </div>
        <div className="center">
          <button>Centered button</button>
        </div>
        <div className="center-flexbox">
          <button>Centered button with flexbox</button>
        </div>
      </Container>
      <Title>The cluster</Title>
      <Container>
        <div className="cluster space-between">
          <div className="cluster">
            <div className="box">Logo-navbar</div>
          </div>
          <div className="cluster flex-start">
            <div className="box">Link 1</div>
            <div className="box">Link 2</div>
          </div>
        </div>
      </Container>
      <Title>The sidebar</Title>
      <Container>
        <div className="flex-wrap">
          <div className="box">Box 1</div>
          <div className="box">Box 2</div>
          <div className="box">Box 3</div>
        </div>
        <div className="with-sidebar">
          <div>
            <div className="box">Sidebar</div>
          </div>
          <div>
            <div className="box">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
              amet dolor a neque malesuada venenatis. Curabitur mi tortor,
              convallis at nulla in, egestas cursus arcu. Phasellus pulvinar,
              elit quis ornare pulvinar, orci felis molestie velit, a elementum
              sapien odio vitae augue.
            </div>
          </div>
        </div>
      </Container>

      <Title>The Switcher</Title>
      <Container>
        <div className="switcher">
          <div className="box">
            The quick brown fox jumps over the lazy dog.
          </div>
          <div className="box">
            The quick brown fox jumps over the lazy dog.
          </div>
          <div className="box">
            The quick brown fox jumps over the lazy dog.
          </div>
          <div className="box">
            The quick brown fox jumps over the lazy dog.
          </div>
          {/* <div className="box">
            The quick brown fox jumps over the lazy dog.
          </div> */}
        </div>
      </Container>
      <Title>The Cover</Title>
      <Container>
        <div class="cover">
          <div>Header</div>
          <h1>Welcome to my website</h1>
          <div>Footer</div>
        </div>
      </Container>
    </div>
  );
}

export default App;
