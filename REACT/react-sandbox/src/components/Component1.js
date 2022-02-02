import { useState, createContext, useContext } from "react"

const UserContext = createContext()

const Component1 = () => {
    const [user, setUser] = useState('Homero Simpson')
    return( 
    <>
        <UserContext.Provider value={user}>
            <h1>{`Hola ${user}`}</h1>
            <Component2 user={user}></Component2>
        </UserContext.Provider>
    </>)
}
const Component2 = () => {
    return <>
        <h1>Component2</h1>
        <Component3/>
    </>
}
const Component3 = () => {
    return <>
        <h1>Component3</h1>
        <Component4/>
    </>
}
const Component4 = () => {
    return <>
        <h1>Component4</h1>
        <Component5/>
    </>
}
const Component5 = () => {
    const user = useContext(UserContext)
    return <>
        <h1>{`Hola de nuevo ${user}`}</h1>
    </>
}

export default Component1