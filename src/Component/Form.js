import React,{useState} from 'react'
import Style from './Style.css'

function Form (){
    const[data,setData]=useState({
        firstname:"",
        lastname:"",
        number: "" ,  
    })

    const[output,setOutput] =useState([])
 
    const dataChange=(event)=>{
        setData({
            ...data,[event.target.name]:event.target.value
        })
      }

    const dataSubmit=(event)=>{
        event.preventDefault()


        if(data.number.length !=10 ){
         alert   ("Phone number should contain 10 digits")

        }else{
            // console.log(data)
           const store={...data, id:output.length}
           setOutput([...output,store])
        //    console.log(output)
           setData({firstname:"",lastname:"",number:"",})
        }

    }


    const dataDelete = (id) => {
        var newFilterData = output.filter((item) => item.id !== (id));                                                                                                                                                                                                                             
        setOutput(newFilterData);
        setData("");
    }
    return(
        <div>
        <h1 className="heading">PHONE BOOK</h1><br/>             
    <form class="form-group" onSubmit={dataSubmit}>

        <label class="form-group text-dark font-weight-bold" >FirstName:</label>
        <input required className='first' type="firstname"  name="firstname" value={data.firstname} onChange={dataChange} />  &nbsp;  &nbsp; 

        <label class="form-group text-dark font-weight-bold">LastName:</label>
        <input required className='second' type="lastname" name="lastname" value={data.lastname} onChange={dataChange}/>   &nbsp;  &nbsp;                                                                                                   
        
        <label class="form-group text-dark font-weight-bold">Phone Number:</label>
        <input className='' type="number" name="number" value={data.number} onChange={dataChange}/><br/>

        <input class="btn btn-primary" type="submit" value="Add Contact"/>
       
    </form>
    <div >
    
     {output.map(item=>(                                                                                                                                                                                                                                                          
    <h5 key={item.id} class="text-center font-italic ">                                                                                                                                                                                               
                                                                                                                      
    
    <table class="table table-bordered">
  <thead>
    <tr>                                                                                                                                                                                                                                                         
      <th scope="col">No</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">PhoneNumber</th>
      <th scope="col">Delete</th>

      
    </tr>
  </thead>
  
  <tbody>
      <tr>
      <th scope="row">{item.id}</th>
      <td>{item.firstname}</td>
      <td>{item.lastname}</td>
      <td>{item.number}</td>
      <td><button class="btn btn-danger" onClick={()=>dataDelete(item.id)}>Delete</button></td>

    </tr>
  </tbody>
 
</table>
    
</h5>
     ))}    

</div>
     </div>
    )
    }
export default Form


