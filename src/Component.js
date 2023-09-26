import { useContext } from "react"
import { ThemeContext } from "./ColorContext"


function Component() {

    const context = useContext(ThemeContext)

    return (
        <h1 className={context.theme}>HELLO</h1>
    )
}

export default Component