import React from 'react';
import Table from './Table'
import {IPD,IPDcolumns} from './IPD'

const PageContent = (props) => {
  return (
    <div className="content-wrapper">
     
    <section className="content">
      
<nav aria-label="breadcrumb">
  <ol class="breadcrumb bg-primary ">
  <li class="breadcrumb-item active text-white font-weight-bold" aria-current="page">{props.breadcrum}</li>
  </ol>
</nav>
     <Table url={props.url} col={props.col} />  
      
    </section>
    </div>
  );
}

export default PageContent;
