import "./App.css";
import { useEffect, useRef, useState } from "react";
import Description from "./components/Description";
import Details from "./components/Details";
import Button from "./components/Button/Button";
import { Dog } from "./components/Dog";
// import Dog from "./components/Dog";

function App() {
    // React Hooks

    // 1. useState
    const [show, setShow] = useState(false);

    const [data, setData] = useState({
        nama: "Testing",
        umur: 20,
    });

    const [loading, setLoading] = useState(true);

    const [value, setValue] = useState("");
    
    // var show = false
    // let show = false
    // show = true

    // 2. useEffect
    useEffect(() => {
      setLoading(false)
  }, []);

    useEffect(() => {
        inputRef.current = value;
    }, [value]);

    // 3. useRef
    const inputRef = useRef();

    function showAlert() {
        alert("ini Alert onClick");
    }

    return (
        <div>
            {loading ? <div>Loading...</div> : <div>Loading Done</div>}

            <button onClick={() => setShow(true)}>Click sini</button>

            {show && <Description show={show} />}

            <Details
                judul={"Ini Judul"}
                desc={"lorem ipsum"}
                tanggal={{
                    hari: "Senin",
                    tanggal: 1,
                    bulan: "Juni",
                }}
                array={[1, 2, 3, 4]}
                handleClick={showAlert}
            />

            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <h2>Current Value : {value}</h2>
            <h2>prev Value : {inputRef.current}</h2>

            <div className="app-header">
                <div className="app-header-title"></div>
            </div>

            <Button />
            <Dog />

            {/* <Description
                judul={"Ini Judul"}
                desc={"lorem ipsum"}
                tanggal={{
                    hari: "Senin",
                    tanggal: 1,
                    bulan: "Juni",
                }}
                array={[1, 2, 3, 4]}
                handleClick={showAlert}
            /> */}
        </div>
    );
}

export default App;
