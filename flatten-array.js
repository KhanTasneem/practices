const arr = [1, 2, 3, [4, [5, 6]], 7, 8]
function flattenArray(array) {
    let result = []
    array.forEach(el => {
        if (Array.isArray(el)) {
            result.push(...flattenArray(el)) // better fast approach
        }
        else {
            result.push(el)
        }
    })
    return result
}

const shorterFlatternArray = (array) => {
    const result= array.reduce((acc, el) => {
        if (Array.isArray(el)) {
            acc.push(...shorterFlatternArray(el))
        } else {
            acc.push(el)
        }
        return acc
    }, [])
    return result
}
const result1 = shorterFlatternArray(arr)
console.log("result1:", result1)

// const result2=flattenArray(arr2)
// const arr2=[1,2,[4,5]]
// console.log("result2:", result2)

// o/p: [1,2,3,4,5,6,7,8]