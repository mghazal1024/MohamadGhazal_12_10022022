
// const dataFetch = async (id, option) => {
//     let url = option ? `http://localhost:3000/user/${id}/${option}` : `http://localhost:3000/user/${id}/`
//     let response = await fetch(url)
//     let data = await response.json()
//     .catch((error) => console.error("Error while fetching: ", error))
//     return data
// }

// export default dataFetch


// const dataFetch = async (id, option) => {
//     let url = option ? `http://localhost:3000/user/${id}/${option}` : `http://localhost:3000/user/${id}/`
//     fetch(url)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data)
//     })
// }

// export default dataFetch


const dataFetch =  async (id, option) => {
    let url = option ? `http://localhost:3000/user/${id}/${option}` : `http://localhost:3000/user/${id}`
    let response = await fetch(url)
    let data = await response.json()
    .catch((error) => console.error("Error: ", error))
    return data.data
}

export default dataFetch