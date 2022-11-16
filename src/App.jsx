import { useEffect } from "react";
import { useRef } from "react";
import "./App.css";

function Title(props) {
  return <h1>{props.children}</h1>;
}
function Container(props) {
  return <div {...props}>{props.children}</div>;
}
function Icon({ props }) {
  return (
    <svg
      {...props}
      viewBox="0 0 10 10"
      width="0.75em"
      height="0.75em"
      stroke="currentColor"
      stroke-width="2"
    >
      <path d="M1,1 9,9 M9,1 1,9" />
    </svg>
  );
}

function App() {
  useEffect(() => {
    (function () {
      const className = "reel";
      const reels = Array.from(document.querySelectorAll(`.${className}`));
      const toggleOverflowClass = (elem) => {
        elem.classList.toggle(
          "overflowing",
          elem.scrollWidth > elem.clientWidth
        );
      };
      for (let reel of reels) {
        if ("ResizeObserver" in window) {
          new ResizeObserver((entries) => {
            for (let entry of entries) {
              toggleOverflowClass(entry.target);
            }
          }).observe(reel);
        }
        if ("MutationObserver" in window) {
          new MutationObserver((entries) => {
            for (let entry of entries) {
              toggleOverflowClass(entry.target);
            }
          }).observe(reel, { childList: true });
        }
      }
    })();
  }, []);

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
        <div className="cover">
          <div>Header</div>
          <h1>Welcome to my website</h1>
          <div>Footer</div>
        </div>
      </Container>
      <Title>The grid</Title>
      <Container>
        <div className="grid">
          <div className="box">Box1</div>
          <div className="box">Box2</div>
          <div className="box">Box3</div>
          <div className="box">Box4</div>
          <div className="box">Box5</div>
        </div>
      </Container>
      <Title>The Frame</Title>
      <Container>
        <div className="frame">
          <img
            alt="oranges"
            src="https://images.unsplash.com/photo-1668603486663-5fd96b778391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          />
        </div>
      </Container>
      <Title>The Reel</Title>
      <Container>
        <div className="reel">
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
          <div className="box">
            The quick brown fox jumps over the lazy dog.
          </div>
        </div>
      </Container>

      <Title>The Imposter</Title>
      <Container>
        <div style={{ position: "relative" }}>
          <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</p>
          <div class="imposter" style={{ backgroundColor: "hotpink" }}>
            <p>Superimposed content</p>
          </div>
        </div>
      </Container>
      <Title>The Icon</Title>
      <Container>
        <button class="with-icon">
          <Icon className="icon" />
          Close
        </button>
      </Container>
    </div>
  );
}

export default App;
