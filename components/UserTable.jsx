import React from "react"
export default class UserTable extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users:[],
            loading:false
        }
    }
   handleFetch = ()=>{
        this.setState({loading:true})
        fetch('https://fakestoreapi.com/users')
        .then((response)=>response.json())
        .then((data)=>this.setState({users:data,loading:false}))
        .catch((err)=>console.log(err))
        .finally(()=>{ 
            this.setState({loading:false})
        })
    }
    handleAddress(user){
        let addressArr = Object.values(user.address).map((value)=>{
        if(typeof(value)!== 'object')
            return value
        else
            return null
        }).filter(value=>value!==null)      
        Object.values(user.address.geolocation).map((value)=>{
            addressArr.push(value)
        })
        return addressArr.toString()
    }
    componentDidMount() {
        this.handleFetch();
    }
     render(){
      return(
       <div style={{padding:'0px 20px'}}> 
            <div className="user-listing-header">
                <h3>User's Listing</h3> 
                <p>{this.state.users.length} User's</p>
            </div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
            { !this.state.loading && this.state.users.length > 0 && this.state.users.map((user)=>{
  return(
    <tr key={user.id}>
        <td>{user.name.firstname+" "+user.name.lastname}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{this.handleAddress(user)}</td>
    </tr> 
  )
})}
</tbody>
        </table>
        {this.state.loading && <p>Loading</p>}
        {!this.state.loading && this.state.users.length === 0 && <p>No Users found</p>}
</div>
        )
    }
}