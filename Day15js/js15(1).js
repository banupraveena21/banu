async function fetchData(url){
    try{
        const response=await fetch(url)

        if(!response.ok){
            const errorData={
                url,
                status:response.status,
                statusText:response.statusText,
                timestamp:new Date().toISOString(),
            }
            storeErrorLog(errorData)
            throw new Error(`API request failed with status ${response.status}`)
        }
        const data=await response.json()
        return data
    }catch(error){
        console.error("Error during API calls:", error)
        throw error
    }
}
function storeErrorLog(errorData){
    let errorLogs=JSON.parse(localStorage.getItem("errorLogs")||"[]")
    errorLogs.push(errorData)
    localStorage.setItem("ErrorLogs",JSON.stringify(errorLogs))
}
fetchData("https://jsonplaceholder.typicode.com/users")
.then((data)=>console.log("Data:",data))
.catch((error)=>console.error(error))


