import { useState } from "react";
import lexicoFunction from "./utils/lexico/index.js";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="font-inter">
      <header className="flex items-center justify-center border-b h-14 mb-4">
        <img src="/vikingos.png" alt="" className="w-14 h-14" />
      </header>
      <div className="mx-auto w-auto md:w-[700px]  px-6 md:px-0">
        <div className="flex justify-between mb-2">
          <h2 className="font-semibold text-lg">Playground</h2>
          <select
            name="analyser"
            id="analyser-select"
            className="border px-4 py-2 "
          >
            <option className="px-2" value="lexico">
              Léxico
            </option>
            <option className="px-2" value="sintactico">
              Sintáctico
            </option>
          </select>
        </div>
        <h4 className="mb-2 font-semibold">Text</h4>
        <textarea
          className="border w-full h-80 resize-none p-2"
          placeholder="Enter your text here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="mt-2">
          <button className="font-medium text-white rounded-sm px-4 py-2 bg-[#f67e02] hover:bg-[#d5791d] mr-4">
            Submit
          </button>
          <button
            className="font-medium rounded-sm px-4 py-2 bg-gray-300"
            onClick={() => setText("")}
          >
            Clear
          </button>
        </div>
        <div className="border w-full bg-gray-300 p-2 mt-4">
          <h4 className="mb-2 text-gray-500">The result will display here.</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
