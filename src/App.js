


// function App() {

//     const [name, setName] = useState("")
//     const [price, setPrice] = useState("")
//     const [products, setProducts] = useState([])

//     const nameRef = useRef()


//     const handleSubmit = () => {
//         console.log(price)
//         setProducts([...products, {
//             name,
//             price: parseInt(price)
//         }])
//         setName("")
//         setPrice("")

//         nameRef.current.focus()
//     }

//     const total = useMemo(() => {
//         const alltotal = products.reduce((products, index) => {

//             return products + index.price
//         }, 0)

//         return alltotal
//     }, [products])

//     return (
//         <div style={{ padding: 20 }}>

//             <input
//                 ref={nameRef}
//                 value={name}
//                 placeholder="Enter Name"
//                 onChange={e => setName(e.target.value)}
//             />

//             <br />
//             <input
//                 value={price}
//                 placeholder="Enter Price"
//                 onChange={e => setPrice(e.target.value)}
//             />
//             <br />
//             <button onClick={handleSubmit}>Add</button>
//             <p>Total: {total}</p>

//             <ul>
//                 {products.map((product, i) => (
//                     <li key={i}>{product.name} - {product.price}</li>
//                 ))}
//             </ul>


//         </div>
//     )
// }

// export default App;

// innit



// Acction



function App() {



    return (
        <div>

        </div>
    )
}

export default App;
