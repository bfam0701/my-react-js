import Component from "./Component";


// function Content () {
// ------
// 1. Callback luôn được gọi khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted
// 3. Cleanup function luôn được gọi trc khi callback được gọi



// useEffect(callback) ít dùng 
// gọi Callback mỗi khi component re-render
// gọi Callback sau khi component them element vào DOM
// function Content() {
//     const [title, setTitle] = useState("")

//     Update DOM
//     useEffect(() => {
//         document.title = title
//     })

//     return (
//         <div>
//             <input
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//         </div>
//     )
// }




// useEffect(callback, []) khi muốn thực hiên logic 1 lần hoặc API
// Chỉ gọi Callback 1 lần sau khi component mounted
// function Content() {
//     const [posts, setPosts] = useState([])
//     const [title, setTitle] = useState("")

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts)
//             })
//     }, [])

//     return (
//         <div>
//             <input
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             <ul>
//                 {posts.map(post => (
//                     <li key={post.id}>
//                         {post.title}
//                     </li>
//                 ))}

//             </ul>
//         </div>
//     )
// }

// useEffect(callback, [deps])
// Callback sẽ được gọi lại mỗi khi desp thay đổi

// const tabs = ['posts', 'comments', 'albums']

// function Content() {
//     const [posts, setPosts] = useState([])
//     const [title, setTitle] = useState("")
//     const [type, setType] = useState("posts")


//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts)
//             })
//     }, [type])


//     return (
//         <div>
//             {tabs.map(tab => (
//                 <button
//                     key={tab}
//                     style={type === tab ? {
//                         color: "#fff",
//                         background: "#000"
//                     } : {}}
//                     onClick={() => setType(tab)}
//                 >
//                     {tab}
//                 </button>
//             ))}
//             <input
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             <ul>
//                 {posts.map(post => (
//                     <li key={post.id}>
//                         {post.title} || {post.name}
//                     </li>
//                 ))}

//             </ul>
//         </div>
//     )
// }



// Listen DOM event
// -Scroll
// const tabs = ['posts', 'comments', 'albums']

// function Content() {
//     const [posts, setPosts] = useState([])
//     const [title, setTitle] = useState("")
//     const [type, setType] = useState("posts")
//     const [scroll, setScroll] = useState(false)


//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts)
//             })
//     }, [type])

//     useEffect(() => {
//         const handleScroll = () => {
//             // if (window.scrollY >= 200) {
//             //     setScroll(true)
//             // } else {
//             //     setScroll(false)
//             // }
//             setScroll(window.scrollY >= 200)
//         }
//         window.addEventListener("scroll", handleScroll)

//         // clean function
//         return () => {
//             window.removeEventListener("scroll", handleScroll)
//         }

//     }, [])



//     return (
//         <div>
//             {tabs.map(tab => (
//                 <button
//                     key={tab}
//                     style={type === tab ? {
//                         color: "#fff",
//                         background: "#000"
//                     } : {}}
//                     onClick={() => setType(tab)}
//                 >
//                     {tab}
//                 </button>
//             ))}
//             <input
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             <ul>
//                 {posts.map(post => (
//                     <li key={post.id}>
//                         {post.title} || {post.name}
//                     </li>
//                 ))}

//             </ul>
//             {scroll && (
//                 <button
//                     style={{
//                         position: 'fixed',
//                         right: 20,
//                         bottom: 20
//                     }}
//                 >
//                     Go to top
//                 </button>
//             )}
//         </div>
//     )
// }
// -resize
// const tabs = ['posts', 'comments', 'albums']

// function Content() {

//     const [width, setWidth] = useState(window.innerWidth)

//     useEffect(() => {
//         const handleResize = () => {
//             setWidth(window.innerWidth)
//         }

//         window.addEventListener("resize", handleResize)

//         return () => {
//             window.removeEventListener("resize", handleResize)
//         }
//     }, [])
//     return (
//         <div>
//             <h1>{width}</h1>
//         </div>
//     )
// }


// Cách dùng setInterval , setTimeout

// function Content() {

//     const [countdown, setCountdown] = useState(180)

//     useEffect(() => {
//         const times = setInterval(() => {
//             setCountdown(prevCountdown => prevCountdown - 1)
//             console.log("countdown")
//         }, 1000)
//         return () => clearInterval(times)
//     }, [])


// setTimeout
//     useEffect(() => {

//         const times = setTimeout(() => {
//             setCountdown( countdown - 1 )
//         }, 1000)

//         return () => clearInterval(times)

//     }, [countdown])

//     return (
//         <div>
//             <h1>{countdown}</h1>
//         </div>
//     )
// }


// useLayoutEffect

// function Content() {

//     const [run, setRun] = useState(0)


//     useLayoutEffect(() => {
//         if (run > 3) {
//             setRun(0)
//         }
//     })

//     const handleRun = () => {
//         setRun(run + 1)
//     }

//     return (
//         <div>
//             <h1>{run}</h1>
//             <button onClick={handleRun}>Run</button>
//         </div>
//     )
// }
// export default Content;



// useRef()

// function Content() {

//     const [count, setCount] = useState(60)

//     const timeId = useRef()
//     const prevCount = useRef()

//     useEffect(() => {
//         prevCount.current = count
//     }, [count])

//     const handleStart = () => {
//         timeId.current = setInterval(() => {
//             setCount(prev => prev - 1)
//         }, 1000)
//     }

//     const handleStop = () => {
//         clearInterval(timeId.current)
//     }

//     console.log(count, prevCount.current)

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleStart}>Start</button>
//             <button onClick={handleStop}>Stop</button>
//         </div>
//     )
// }
// export default Content;

// }

// 1. memo() -> HIGHER ORDER COMPONENT (HOC)
// 2. useCallback()

/**
 *  HOOKS
 *  HOC
 *  RENDER PROPS
 */
function Content() {

    return (
        <div>
            <Component />
        </div>
    )
}
export default Content;