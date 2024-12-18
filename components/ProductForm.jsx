import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalStateContext } from "../store/store";

export default function ProductForm({mode}){
    const { addProduct,products,editProduct } = useContext(GlobalStateContext)
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        description: '',
        category: '',
        price: '',
    })
    const { id } = useParams()
    const navigate = useNavigate()
    let productId = useRef(21)
    
    const formStyle = {
            display:'flex',
            flexDirection:'column',
            gap:'5px',
            marginBottom:'10px',
            formContainer:{
                padding:'40px'
            }
    }

    const handleProduct = (e) =>{
        e.preventDefault();
        const product = {
            id:productId.current,
            title:e.target[0].value,
            description:e.target[1].value,
            category:e.target[2].value,
            price:Number(e.target[3].value),
        }
        if(mode === "ADD"){
            addProduct(product)
            navigate('/admin')
        }
        else{
            editProduct(formData.id,formData)
            navigate('/admin')
        }
    }

    useEffect(()=>{
        if(mode==='EDIT'){
            console.log(products)
            let formData = products.find((product) => product.id === Number(id) )
            if(formData)
            setFormData({
                id: formData.id,
                title: formData.title ,
                description: formData.description,
                category: formData.category,
                price: formData.price,
            })   
        }
    },[products])
    return(
        <div style={formStyle.formContainer}>
            <form onSubmit={handleProduct} className="product-form">
                <div style={formStyle}>
                    <label htmlFor="title">Title</label>
                    <input type="text" value={formData.title} onChange={(e)=>{
                        setFormData({...formData, title: e.target.value } )
                    }} name='title'></input>
                </div>
                {/* <div style={formStyle}>
                    <label htmlFor="description">Description</label>
                    <input type="text" value={formData.description} onChange={(e)=>{
                        setFormData({...formData, description: e.target.value }  )
                    }} name='description'></input>
                </div> */}
                  <div style={formStyle}>
                    <label htmlFor="description">Description</label>
                    <textarea value={formData.description} onChange={(e)=>{
                        setFormData({...formData, description: e.target.value }  )
                    }} name='description' rows="4" cols="50"></textarea>
                </div>
                <div style={formStyle}>
                    <label htmlFor="category" >Category</label>
                    <input type="text" value={formData.category} onChange={(e)=>{
                        setFormData({...formData, category: e.target.value })
                    }} name='category'></input>
                </div>
                <div style={formStyle}>
                    <label htmlFor="price">Price</label>
                    <input type="number" value={formData.price} onChange={(e)=>{
                        setFormData({...formData, price: e.target.value }  )
                    }} name='price' step="0.01"></input>
                </div>
                <div style={{display:"flex",gap:'10px',marginTop:'10px',justifyContent:'flex-end'}}>
                    <button type="submit" className="ekart-button">Submit</button>
                    <button onClick={()=>navigate('/admin')} className="ekart-button">Cancel</button>
                </div>
            </form>
            </div>
    )
}