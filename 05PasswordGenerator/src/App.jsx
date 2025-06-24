import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  
// ! for password refrence
  const passwordRef = useRef(null) 


// ! To generate password
  const passwordgenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIKLMNOPQRSTUVWXYSabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) string += "0123456789";
    if (charAllowed) string += "!@#$%&*+-(){}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);

      pass += string.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordgenerator()
  },[length,numberAllowed,charAllowed,passwordgenerator])

  return (
    <>
      <div className="w-full max-w-md shadow-md mx-auto rounded-lg px-4 my-8 py-4   text-orange-500 text-center bg-gray-800  ">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className=" flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button onClick={copyPasswordToClipboard} className="bg-blue-500 px-1 py-0.5">copy</button>
        </div>

        <div className="flex tex-sm gap-x-2">
          <div className=" flex items-center gap-x-1">
            <input
              type="range"
              min={1}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
