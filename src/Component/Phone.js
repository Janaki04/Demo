import React,{useState} from 'react'

function Phone() {
   const[firstname,setFirstname]=useState("")
   const[lastname,setLastname]=useState("")
   const[number,setNumber]=useState("")


    const[output,setOutput] =useState([])
 
    const ChangeName=(event)=>{
        setFirstname({
            ...firstname,[event.target.name]:event.target.value
        })
    }
    const ChangeLname=(event)=>{
        setLastname({
            ...lastname,[event.target.name]:event.target.value
        })
    }
    const ChangeNumber=(event)=>{
        setNumber({
            ...number,[event.target.name]:event.target.value
        })
    }
    const dataSubmit=(event)=>{
        event.preventDefault()
        if(number.length>10 & number.length<9){
            alert("Phone number should be less than 10 numbers")

        }else{
            // console.log(data)
           const data={firstname,lastname,number}
           setOutput([...output,{...data, id:output.length}])
        //    setData(data[''])
         
        }

    }
    const dataDelete = (id) => {
        var newFilterData = output.filter((item) => item.id !== (id));
        setOutput(newFilterData);
        // setData("");
    }
    
   
    return(
        <div>
        <h1 className="heading">PHONE BOOK</h1>             
    <form onSubmit={dataSubmit}>
        <label>FirstName:</label>
        <input required className='first' type="firstname" name="firstname"  onChange={ChangeName} />| |
        <label>LastName:</label>
        <input required className='second' type="lastname" name="lastname" onChange={ChangeLname}/>| |
        <label>Phone Number:</label>
        <input type="number" name="number" onChange={ChangeNumber}/><br/>
        <input type="submit" value="Add Contact"/>
       
    </form>
    <div>
    <table className='table'>
              <tr  >
             <th>FirstName</th>
             <th>LastName</th>
             <th>PhoneNumber</th>
             <th>Delete</th>
             </tr>
        {output.map(item=>(
        <p key={item.id}>
            <tr>  
             <td>{item.firstname}</td>
             <td>{item.lastname}</td>
             <td>{item.number}</td>
             <td><button onClick={()=>dataDelete(item.id)}>Delete</button></td>
            </tr> 
            </p>
              ))} 
            </table>
           </div>
    </div>
  )
}

export default Phone