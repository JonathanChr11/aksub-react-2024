// Controlled Input
// data yang kita isi itu bisa kita handle sendiri (state)
// Kapan digunakan? kalau misal ada validasi kompleks di formnya

import { useState } from "react";

export default function ControlledForm() {
    const [nama, setNama] = useState('')

    const handleChange = (e) => {
        setNama(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Input Value = ${nama}`);
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" onChange={handleChange} />
            <button type="submit">Kirim</button>
        </form>
    );
}
