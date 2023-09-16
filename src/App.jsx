import { useState } from "react";
import Check from "./icons/Check";
import lexicoFunction from "./utils/lexical/index.js";
import syntacticFunction from "./utils/syntactic/index";

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState({});
  const [result, setResult] = useState("The result will display here.");
  const [mode, setMode] = useState("lexical");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = () => {
    if (mode === "syntactic") {
      const input = syntacticFunction(text.toLowerCase());
      setResult(input);
      setCount({});
    } else {
      const { display, count, isError, errorMsg } = lexicoFunction(text.toLowerCase());
      setError(isError);
      setErrorMsg(errorMsg);
      setResult(display);
      setCount(count);
    }
  };

  const handleClear = () => {
    setText("");
    setCount({});
    setError(false);
    setErrorMsg("");
    setResult("The result will display here.");
  };

  const handleChangeModel = () => {
    if (mode === "lexical") {
      setMode("syntactic");
    } else {
      setMode("lexical");
    }
  };

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
            value={mode}
            onChange={handleChangeModel}
          >
            <option className="px-2" value="lexico">
              Lexical
            </option>
            <option className="px-2" value="syntactic">
              Syntactic
            </option>
          </select>
        </div>
        <h4 className="mb-2 font-semibold">Code</h4>
        <textarea
          className="border w-full h-80 resize-none p-2 font-mono"
          placeholder="Enter your code here."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {
          error && (<p className="text-red-600 font-medium">ERROR: {errorMsg}</p>)
        }
        <div className="mt-2 flex justify-between">
          <div className="">
            <button
              className="font-medium text-white rounded-sm px-4 py-2 bg-[#f67e02] hover:bg-[#d5791d] mr-4 disabled:bg-gray-300 disabled:cursor-not-allowed"
              onClick={handleSubmit}
              disabled={text.length === 0}
            >
              Submit
            </button>
            <button
              className="hover:bg-gray-400 font-medium rounded-sm px-4 py-2 bg-gray-300"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="border w-full bg-gray-300 p-2 mt-4">
          <p className="mb-2 text-gray-500">{result}</p>
        </div>
        {Object.keys(count).length !== 0 && (
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex gap-x-2">
              <Check className="w-6 h-6" />
              <p>Reserved Words:</p>
              <p>{count.pr}</p>
            </div>
            <div className="flex gap-x-2">
              <Check className="w-6 h-6" />
              <p>Symbols:</p>
              <p>{count.simbolos}</p>
            </div>
            <div className="flex gap-x-2">
              <Check className="w-6 h-6" />
              <p>Numbers:</p>
              <p>{count.numeros}</p>
            </div>
            <div className="flex gap-x-2">
              <Check className="w-6 h-6" />
              <p>Identifier:</p>
              <p>{count.identificadores}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
