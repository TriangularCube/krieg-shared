export const MoveType = new Map([
    ['Infantry', 0],
    ['Assault', 1],
])

export const MoveTypeMapping = new Map()
MoveType.forEach((value, key) => {
    MoveTypeMapping.set(value.id, key)
})
