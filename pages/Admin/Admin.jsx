import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalStateContext } from "../../store/store.jsx"

export default function Admin(){
    const { products ,loader,removeProduct } = useContext(GlobalStateContext)
    const navigate = useNavigate()
    
    const adminStyle = {
        padding:'40px'
    }
    const productContainer = {
        margin:"10px 0px",
        display:'flex',
        gap:'10px',
        flexDirection:'column',
        productButton:{
            display:'flex',
            gap:"10px"
        }
    }
    const productListingHeader = {
        display:'flex',
        justifyContent:"space-between",
        margin:'20px 0px',
        paddingBottom:'10px',
        borderBottom:'1px solid black'
    }
    return(
        <div style={adminStyle}>
            <button onClick={()=> navigate('/addform')} className="ekart-button">Add Products</button>
            <div>
            <div style={productListingHeader}>
                    <h3>Product Listing</h3> 
                    <p>{products.length} Products</p>
                </div>
                {products.length > 0 && products.map((product)=>{
                    return (
                    <div key={product.id} style={productContainer}>    
                        <p>{product.title}</p>
                        <div style={productContainer.productButton}>
                            <button onClick={()=> navigate(`/editform/${product.id}`)} className="ekart-button">Edit</button>
                            <button onClick={()=> removeProduct(product.id)} className="ekart-button">Delete</button>
                        </div>
                    </div>
                    
                    )
                })}
                  {!loader && products.length === 0 && <p>No Product Found</p> }
                  { loader && <p>Loading !</p>}
            </div>
        </div>
    )
}