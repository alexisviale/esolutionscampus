import useFetch from "../components/useFetch"

const Mensajes = () => {

    const [data] = useFetch('https://jsonplaceholder.typicode.com/posts')


    return (
        <>
        {data &&
        data.map((messages) => {
            return (
                <div key={messages.id}>
                    <h4>{messages.title}</h4>
                    <p>{messages.body}</p>
                </div>
            )
        })}
        </>
    )
}

export default Mensajes