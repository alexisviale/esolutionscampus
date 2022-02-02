import useFetch from "../components/useFetch"

const Usuarios = () => {

    const [data] = useFetch('https://jsonplaceholder.typicode.com/users')
    
    return (
        <>
        {data && 
        
        data.map((user) => {
            return <p key={user.id}>{user.name}</p>
        })}
        </>
    )
}

export default Usuarios