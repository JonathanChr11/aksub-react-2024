import React from "react"

// Functional Components
const Description = ({ show }) => {
    return (
        <div>
            {show && <div>Aku true</div>}
        </div>
    )
};

export default Description;

// Class Components
// export default class Description extends React.Component {
//     constructor(props) {
//         //ini value dari state
//         this.state = {
//             dog: 'ini anjing',
//             name: 'Jonathn',
//             umur: 20
//         }
//     }

//     componentWillReceiveProps(newProps) {
//         { judul, desc, tanggal, array, handleClick } = newProps
//     }

//     //mirip useEffect
//     componentDidMount() {
//         this.setState({dog: 'Guk guk'})
//     }

//     //mirip useEffect
//     componentDidUpdate() {

//     }

//     render() {
//         return(
//             <div>
//             <div>{judul}</div>
//             <div>{desc}</div>
//             <div>{tanggal.hari}</div>
//             {array.map((angka) => (
//                 <div>{angka}</div>
//             ))}
//             <button onClick={handleClick}>Click aku</button>
//         </div>
//         )
//     }
// }