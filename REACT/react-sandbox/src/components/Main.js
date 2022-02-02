import useFetch from "./useFetch"

const Main = () => {
    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')

    
    return (
        <>
            {data &&
                data.map(
                    item => {
                        return <p key={item.id}>{item.title}</p>
                    }
                )
            }
        </>
    )

}

export default Main


//traer de la aplicacion express usuarios y mensajes. App react, usuario y mensajes -- click en usuario traer usuarios -- clic en mensajes trae mensajes