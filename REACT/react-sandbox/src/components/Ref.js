import { useState, useEffect, useRef } from "react";

const Ref = () => {

    const [inputValue, setInputValue] = useState('')
    const count = useRef(0)

    useEffect(() => {
        count.current = count.current + 1
    })

    return (
        <>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <h1>Se ha renderizado {count.current} veces.</h1>
        </>
    )

}

export default Ref