import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");
  return (
    <>
      <div
        className="w-full h-screen duration-200 bg-black"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2 bg-black text-white">
          <div className="fixed flex flex-wrap justify-center p-4 bottom-10 rounded-xl bg-white outline-8 border border-green-500">
            <button
              onClick={() => setColor("red")}
              style={{ backgroundColor: "red" }}
              className="px-5 py-3 bg-red-600 text-white mx-2 rounded-xl"
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              style={{ backgroundColor: "green" }}
              className="px-5 py-3 bg-red-600 text-white mx-2 rounded-xl"
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              style={{ backgroundColor: "blue" }}
              className="px-5 py-3 bg-red-600 text-white mx-2 rounded-xl"
            >
              Blue
            </button>
            <button
              onClick={() => setColor("pink")}
              style={{ backgroundColor: "pink" }}
              className="px-5 py-3 bg-red-600 text-white mx-2 rounded-xl"
            >
              Pink
            </button>
            <button
              onClick={() => setColor("olive")}
              style={{ backgroundColor: "olive" }}
              className="px-5 py-3 bg-red-600 text-white mx-2 rounded-xl"
            >
              Olive
            </button>
            <button
              onClick={() => setColor("black")}
              style={{ backgroundColor: "black" }}
              className="px-5 py-3 bg-red-600 text-white mx-2 rounded-xl"
            >
              Black
            </button>
            <button
              onClick={() => setColor("orange")}
              style={{ backgroundColor: "orange" }}
              className="px-5 py-3 bg-red-600 text-white mx-2 rounded-xl"
            >
              Orange
            </button>
            <button
              onClick={() => setColor("skyblue")}
              style={{ backgroundColor: "skyblue" }}
              className="px-5 py-3 bg-red-600 text-white mx-2 rounded-xl"
            >
              Skyblue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
