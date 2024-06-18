import { useRef } from "react";

// Uncontrolled Input
// data yang kita isi di form dihandle sama DOM
//  Kapan digunakan?kita pakai ketika validasi dari sebuah form gk terlalu kompleks atau gk ribet validasinya

export default function UncontrolledForm() {
    
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Input Value = ${inputRef.current.value}`);
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" ref={inputRef} />
            <button type="submit">Kirim</button>
        </form>
    );
}
