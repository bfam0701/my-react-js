// useState hook
// Dùng khi muốn dữ liệu thay đổi và cặp nhật giao diện



// LƯU Ý

//  * Component được re-render sau khi `setState`
//  * Initial state chỉ dùng cho lần đầu
// import { useState } from "react";

// function State() {

//     const [state, setState] = useState(1)

//     const handleIncrease = () => {
//       setState(state + 1)
//     }

//     return (
//       <div className="useState">
//         <h1>{state}</h1>
//         <button
// onClick={handleIncrease}>
// Increase
// </button>
//       </div>
//     )
//   }
// export default State();






// * Set state với callback ?

// import { useState } from "react";

// function State() {

//     const [state, setState] = useState(1)



//     const handleIncrease = () => {
//  Callback (setState có thể là Hàm)
//     setState(prev => prev + 1)
//     setState(prev => prev + 1)
//     setState(prev => prev + 1)
//     }

//     return (
//       <div className="useState">
//         <h1>{state}</h1>
//         <button
// onClick={handleIncrease}>
// Increase
// </button>
//       </div>
//     )
//   }
// export default State();






// * Initial sate với callback ?
// USESTATE(FUNCTION(CALLBACK))

// import { useState } from "react";

// const oders = [100, 200, 300]

// function App() {
// USESTATE không lấy function làm initState mà
// lấy giá trị return của hàm làm initstae
//   const [state, setState] = useState(() => {
//     const total = oders.reduce((total, cur) => total + cur)
//     console.log(total);
//     return total

//   })

//   const handleIncrease = () => {
//     setState(state + 1)
//   }


//   return (
//     <div className="useState">
//       <h1>{state}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   )
// }



// import { useState } from "react";

// const gifts = [
//   "CPU i9",
//   "CPU i8",
//   "CPU i7",
// ]

// function App() {

//   const [gift, setGift] = useState()

//   const randomGifts = () => {
//     const index = Math.floor(Math.random() * gifts.length)
//     setGift(gifts[index]);
//   }

//   return (
//     <div className="useState">
//       <h1>{gift || "Chưa Có Phần Thưởng"}</h1>
//       <button onClick={randomGifts}>Lấy Thưởng</button>
//     </div>
//   )
// }


// export default App;










