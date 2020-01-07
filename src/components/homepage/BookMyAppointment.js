import React,{useState} from 'react';



export default ()=>
{
  const [pid,setPid]=useState(false);
return(<React.Fragment>
<div className="modal fade "  id="bookappointment" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content border-none">
      <div className="modal-header border-0 ">
        <h5 className="modal-title" id="exampleModalLabel">Book Your Appointment</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body bg-transparent ">
        <form>
        
  <div className=" form-group form-check form-check-inline" id="newpatient">
    <input type="radio" className="form-check-input"  name="pat" onClick={()=>setPid(false)} checked={!pid}/>
    <label className="form-check-label" for="exampleCheck1">New Patient</label>
  </div>
   <div className=" form-group form-check form-check-inline" id="oldpatient">
    <input type="radio" className="form-check-input" id="exampleCheck1" name="pat" onClick={()=>setPid(true) } checked={pid}/>
    <label className="form-check-label" for="exampleCheck1">Old Patient</label>
  </div>
   <div className="input-group mb-3" style={pid?{display:'flex'}:{display:'none'}}>
  <input type="text" className="form-control bg-transparent border-right-0 border-top-0"  placeholder="Petient Id" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <div className="input-group-append ">
    <span className="input-group-text bg-transparent border-right-0 border-top-0 border-left-0 " id="basic-addon2"><i className="fa fa-user " aria-hidden="true"></i></span>
  </div>
</div>
<div className="input-group mb-3">
  <input type="text" className="form-control bg-transparent border-right-0 border-top-0" placeholder="Petient Name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append ">
    <span className="input-group-text bg-transparent border-right-0 border-top-0 border-left-0 " id="basic-addon2"><i className="fa fa-user " aria-hidden="true"></i></span>
  </div>
</div>

   <div className="input-group mb-3">
     <div className="input-group-prepend ">
    <span className="input-group-text bg-transparent  border-top-0" id="basic-addon1">+91</span>
  </div>
  <input type="text" className="form-control bg-transparent border-right-0 border-top-0" placeholder="Mobile Number" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
   <div className="input-group-append ">
    <span className="input-group-text bg-transparent border-right-0 border-top-0 border-left-0 " id="basic-addon2"><i className="fa fa-mobile" aria-hidden="true"></i></span>
  </div>
   </div>

  <div className="input-group mb-3">
  <input type="text" className="form-control bg-transparent border-right-0 border-top-0" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  
  <div className="input-group-append ">
    <span className="input-group-text bg-transparent border-right-0 border-top-0 border-left-0 " id="basic-addon2"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
  </div>
  </div>
  <div className="input-group mb-3">
  <select className="form-control bg-transparent border-right-0 border-top-0 " placeholder="Gender" aria-label="Recipient's username" aria-describedby="basic-addon2">
    <option className="bg-success">Gender</option>
    <option className="bg-success">Male</option>
    <option className="bg-success">Female</option>
  </select>
  </div>
  <div className="input-group mb-3">
  <select className="form-control bg-transparent border-right-0 border-top-0" placeholder="Department" aria-label="Recipient's username" aria-describedby="basic-addon2">
    <option className="bg-success">Department</option>
    <option className="bg-success">Department1</option>
    <option className="bg-success">Department2</option>
  </select>
  </div>
  <input type="text" className="form-control bg-transparent border-right-0 border-top-0 " id="id1"/>
  
  <div className="input-group mb-3">
  <textarea className="form-control bg-transparent border-right-0 border-top-0 "  rows="4" placeholder="Problem" value="Problem">
    Problem
  </textarea>
</div>
   <button type="submit" className="btn btn-primary  form-control">Submit</button>
   
</form>
      </div>

    </div>
  </div>
</div>
</React.Fragment>);
}