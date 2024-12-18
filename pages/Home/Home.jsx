import { useContext, useEffect, useState } from "react"
import Product from "../../components/Product"
import { GlobalStateContext } from "../../store/store"


function Home(){
    // const [products, setProducts] = useState([])
    // const [loading, setLoading] = useState([])
   const { products ,loader } = useContext(GlobalStateContext)
   // useEffect(()=>{
    //     setLoading(true)
    //     fetch('https://fakestoreapi.com/products').then((data)=>{
    //         return data.json()
    //     }).then((reponse)=>{
    //         setProducts(reponse)
    //         setLoading(false)
    //         console.log(reponse)
    //     }
    //     )
    // },[])

    const HeroStyle = {
        padding:'40px',
        backgroundColor:'skyblue',
        marginBottom: '20px',
        width:'100%',
        textAlign:'center'
    }
    const productListingStyle = {
        padding:'20px',
    }
    const productListingHeader = {
        display:'flex',
        justifyContent:"space-between",
        marginBottom:'20px',
        paddingBottom:'10px',
        borderBottom:'1px solid black'
    }
    return( 
        <div>
            <section style={HeroStyle}>
                Hero Section Hello
            </section>
            <section style={productListingStyle}>
                <div style={productListingHeader}>
                    <h3>Product Listing</h3> 
                    <p>{products.length} Products</p>
                </div>
            { !loader && products && products.length > 0 && products.map((product) => {
                return (
                    <div key={product.id}>
                        <Product product={product} ></Product>
                    </div>
                )
            })}
            {!loader && products.length === 0 && <p>No Product Found</p> }
            { loader && <p>Loading !</p>}
            </section>
        </div>
    )
}


export default Home