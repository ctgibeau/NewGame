import React from "react";

export default function Store() {

    const [catalog, setCatalog] = React.useState([])

    React.useEffect(() => {
        const response = async() => fetch('localhost:3001/api/items');
        console.log(response)
        response().catch(console.error)
    }, []) 

    return(
        <h1>This is the Store page</h1>
    )
}