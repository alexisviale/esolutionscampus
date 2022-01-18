// Promesas, async, await --- ASINCRONISMO

function loadScript(src) {
    let script = document.createElement('script')
    script.src = src
    document.head.append(script)
}


function loadScript(src) {
    setTimeout(() => {
        let script = document.createElement('script')
        script.src = src
        document.head.append(script)
    }, 1000)
}