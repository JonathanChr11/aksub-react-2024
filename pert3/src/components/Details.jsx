const Details = ({ judul, desc, tanggal, array, handleClick }) => {
    return (
        <div>
            <div>{judul}</div>
            <div>{desc}</div>
            <div>{tanggal.hari}</div>
            {array.map((angka) => (
                <div>{angka}</div>
            ))}
            <button onClick={handleClick}>Click aku</button>
        </div>
    );
};
export default Details;
