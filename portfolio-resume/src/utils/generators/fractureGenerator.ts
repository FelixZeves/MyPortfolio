export function generateClipPath(points:number[][]){

    return `
        polygon(
            0 0,
            ${points.map(
                ([x,y])=>`${x}% ${y}%`
            ).join(',')},
            100% 100%,
            0 100%
        )
    `
}

export function generateSvgPath(points:number[][]){

    return points
        .map(
            ([x,y],index)=>
                `${index===0?'M':'L'} ${x} ${y}`
        )
        .join(' ')
}