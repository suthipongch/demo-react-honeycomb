import "./App.css";

import { Hexagon, Honeycomb, ResponsiveHoneycomb } from "react-honeycomb";

import logo from "./logo.svg";
import range from "lodash/range";

const items = range(7);
const sideLength = 64;

function App() {
  // const randomColor = Math.floor(Math.random()*16777215).toString(16)
  // console.log(randomColor)
  return (
    <div className="App">
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
        columns={4}
        size={sideLength}
        items={items}
        renderItem={(item, index) => (
          <Hexagon
            style={{
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215
              ).toString(16)}`,
            }}
          ></Hexagon>
        )}
      />

      <ResponsiveHoneycomb
        defaultWidth={1024}
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
