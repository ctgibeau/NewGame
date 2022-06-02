import React from "react";
import StoreItem from '../components/StoreItem'

export default function Store() {

    const [catalog, setCatalog] = React.useState([])
    const [boxset, setBoxset] = React.useState([])

    async function fetchData() {
        let response = await fetch('api/item');
        let data = await response.json();

        let boxsets =  data.reduce((accumulator,value)=>{
            return accumulator.includes(value.boxset) ? accumulator : [...accumulator, value.boxset]
        },[])

        setCatalog(() => {
            return data
        }) 

        setBoxset(() => {
            return boxsets
        })
    }

    React.useEffect(() => {

        fetchData()
    
    }, []) 
    const storeBoxsetElements = boxset.map(category => (
        <section>
            <img src={`./images/${category}.png`} alt={category}/>
            <h2>{category}</h2>
            <section className="cards-list">
                {catalog.map(item => item.boxset === category ? <StoreItem className="store-card" key={item._id} {...item}/> : false)}
            </section>
        </section>
    
    ))
        console.log(catalog)
    const storeItemElements = catalog.map(item => (
        <StoreItem 
            className="store-card"
            key={item._id}
            {...item}
        />
    ))

    return(
        <div>
            <section className="section-boxset">
            {storeBoxsetElements}
            </section>
        </div>
    )
}