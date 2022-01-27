class Color {
    constructor(name, code) {
        this.name = name,
        this.code = code
    }
}

const allColors = [
    new Color('red', '#FF0000'),
    new Color('grey', '#F2F2F2'),
    new Color('brown', '#A36767')
]

exports.getRandomColor = () => {
    return allColors[
        Math.floor(Math.random() * allColors.length)
    ]
}

exports.allColors = allColors

exports.getRed = () => {
    return allColors[0]
}