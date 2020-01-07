import React from 'react';


export default ()=>
<React.Fragment>
<div className="modal fade"   id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      
      <div className="modal-body">
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <form class="text-center p-3"> 
          <div class="h3 mb-4">Login</div>
  <div class="form-group d-flex align-items-baseline">
    <i class="fa fa-user text-white" aria-hidden="true"></i>
    <input type="email" class="form-control border-top-0 border-left-0 border-right-0 bg-transparent text-white pl-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
  </div>
  <div class="form-group d-flex align-items-baseline">
    <i class="fa fa-key text-white" aria-hidden="true"></i>
     <input type="password" class="form-control border-top-0 border-left-0 border-right-0 bg-transparent text-white pl-2" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
    
  <button type="submit" class="btn btn-outline-danger w-25 ">Login</button>
</form>
<div class="text-center p-0">
  <button type="button" class="btn btn-link  text-center ">Forgot Password?</button>
  <span class="d-block text-white mb-3">--------OR--------</span>
  <span class="text-white bg-primary rounded-circle p-1 mr-3" > </span>
  
<span class="text-white bg-danger rounded-circle p-1 ml-3" > </span>
</div>
      </div>
    </div>
  </div>
</div>
</React.Fragment>