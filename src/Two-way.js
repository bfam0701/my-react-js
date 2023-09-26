// LƯU Ý
// 1. Array
// 2. Reference types

// VÍ DỤ
// 1. Random gift
// 2. Two-way binding
// + one-way binding: ràng buộc 1 chiều ( Tương tác trên giao diện )
// + two-way binding: ràng buộc 2 chiều ( Chiều dữ liệu )
// 3. Todo list



// import { useState } from "react";



// function App() {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")


//   const handleSubmit = () => {
//     console.log({
//       name,
//       email,
//     });
//   }

//   return (
//     <div className="useState">
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <input
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }


// export default App;

// import { useState } from "react";

// const courses = [
//   {
//     id: 1,
//     name: "HTML, CSS"
//   },
//   {
//     id: 2,
//     name: "JAVACRIPT"
//   },
//   {
//     id: 3,
//     name: "REACTJS"
//   },
// ]

// function App() {
//   const [checked, setChecked] = useState([])

//   const handleCheck = (id) => {
//     setChecked(prev => {
//       const isChecked = checked.includes(id)
//       if (isChecked) {
//         return checked.filter(item => item !== id)
//       } else {
//         return [...prev, id]
//       }
//     })
//   }

//   const handleSubmit = () => {
//     console.log({ ids: checked })
//   }

//   return (
//     <div className="useState">
//       {courses.map(course => (
//         <div key={course.id}>
//           <input
//             type="checkbox"
//             checked={checked.includes(course.id)}
//             onChange={() => handleCheck(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }


// export default App;





// function App() {

//     const localhostJobs = JSON.parse(localStorage.getItem("jobs"))

//     const [job, setJob] = useState('')
//     const [jobs, setJobs] = useState(localhostJobs ?? [])
//     const handleSubmit = () => {
//         setJobs(prev => {
//             const newJobs = [...prev, job]

//             // Lưu vào localhost
//             const jsonJobs = JSON.stringify(newJobs)
//             localStorage.setItem("jobs", jsonJobs)


//             return newJobs
//         })
//         setJob('')
//     }

//     return (
//         <div style={{ padding: 20 }}>
//             <input
//                 value={job}
//                 onChange={e => setJob(e.target.value)}
//             />
//             <button onClick={handleSubmit}>Add</button>
//             <ul>
//                 {jobs.map((job, index) => (
//                     <li key={index}>{job}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }