import { useNamaContext } from "../NamaProvider";

export default function Component4() {
    const nama = useNamaContext();

    return (
        <div>
            <h1>Component 4</h1>
            <h2>{`Halo, ${nama} kita bertemu lagi`}</h2>
        </div>
    );
}
