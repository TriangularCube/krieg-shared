import { MoveType } from './unit.js'

export const Terrain = new Map([
    [
        'Plains',
        {
            id: 0,
            moveCost: {
                [MoveType.get('Infantry').id]: 1,
                [MoveType.get('Assault').id]: 1,
            },
        },
    ],
])

export let TerrainMapping = new Map()
Terrain.forEach((value, key) => {
    TerrainMapping.set(value.id, key)
})
