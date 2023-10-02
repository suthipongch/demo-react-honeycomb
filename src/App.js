import "./App.css";

import { Hexagon, Honeycomb, ResponsiveHoneycomb } from "react-honeycomb";

import logo from "./logo.svg";
import range from "lodash/range";

const items = range(9);
const sideLength = 128;
const itemsTest = range(2);
const itemsTest2 = range(3);

function App() {
  // const randomColor = Math.floor(Math.random()*16777215).toString(16)
  // console.log(randomColor)
  // console.log(items)
  return (
    <div className="App">
      <Honeycomb
        columns={2}
        size={100}
        items={itemsTest}
        renderItem={(item, index) => (
          <>
            <Hexagon
              style={{
                backgroundColor: `#${Math.floor(
                  Math.random() * 16777215
                ).toString(16)}`,
              }}
            ></Hexagon>
            <button
              style={{ zIndex: 10000, position: "relative", top: 0, bottom: 0 }}
            >
              test {`#${index}`}{" "}
            </button>
          </>
        )}
      />
      <Honeycomb
        columns={3}
        size={100}
        items={itemsTest2}
        renderItem={(item, index) => (
          <>
            <Hexagon
              style={{
                backgroundColor: `#${Math.floor(
                  Math.random() * 16777215
                ).toString(16)}`,
              }}
            ></Hexagon>
            <button
              style={{
                zIndex: 10000,
                position: "relative",
                top: 50,
                bottom: 50,
              }}
            >
              test {`#${index}`}{" "}
            </button>
          </>
        )}
      />

      <Honeycomb
        columns={3}
        size={sideLength}
        items={items}
        renderItem={(item, index) => (
          <Hexagon>
            <img
              src={`https://picsum.photos/${sideLength * 2}?random=${item}`}
              alt={`Random #${item}`}
            />
          </Hexagon>
        )}
      />

      <Honeycomb
        columns={3}
        size={sideLength}
        items={items}
        gap={10}
        renderItem={(item, index) => (
          <Hexagon
            style={{
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215
              ).toString(16)}`,
              display: index == 2 || index == 8 ? "none" : "block",
            }}
          >
            <div className="row">
              
            </div>
          </Hexagon>
        )}
      />

      <ResponsiveHoneycomb
        defaultWidth={1900}
        size={sideLength}
        items={items}
        renderItem={(item) => (
          <Hexagon>
            <img
              src={`https://picsum.photos/${sideLength * 2}?random=${item}`}
              alt={`Random #${item}`}
            />
          </Hexagon>
        )}
      />
    </div>
  );
}

export default App;
