import React,{useEffect} from 'react'

export default (prop)=>{
 useEffect(()=>{ 
  let table=window.$(document).ready(function() {
    window.$(`#${prop.url}`).DataTable( {
        
        ajax:{
            url:`http://localhost:8080/${prop.url}`,
            dataSrc:'_embedded.opdDetails',   
        },
        columns:prop.col,
      language: { search: '', searchPlaceholder: "Search here........." },
          initComplete: function () {
   window.$('.dataTables_filter input[type="search"]').css({'width':'300px','border':'none','border-bottom':'2px solid grey'});
    },
     dom: '<"d-sm-flex justify-content-between border-primary m-0 p-0"<f><"text-center" B>>t<p>',
        buttons: [
            {
              extend:'copy',
              text:'COPY',
              className:'btn btn-outline-primary btn-sm py-0'
            }, 
              {
              extend:'csv',
              text:'CSV',
              className:'btn btn-outline-primary btn-sm py-0'
            },   {
              extend:'excel',
              text:'EXCEL',
              className:'btn btn-outline-primary btn-sm py-0'
            }, 
              {
              extend:'pdf',
              text:'PDF',
              className:'btn btn-outline-primary btn-sm py-0'
            }
            ,   {
              extend:'print',
              text:'PRINT',
              className:'btn btn-outline-primary btn-sm py-0 '
            }
        ],
     responsive: {
           details: {
                display:window.$.fn.dataTable.Responsive.display.modal( {
                   header: function ( row ) {
                       var data = row.data();
                       return 'Details for '+data[0]+' '+data[1];
                   }
               } ),
                renderer: window.$.fn.dataTable.Responsive.renderer.tableAll( {
                    tableClass: 'table'
                } )
            }
        }
     
    

    } );
} );

}
  ,[prop.col,prop.url]
 );
  return(

<>

<table id={`${prop.url}`} className="table table-striped table-bordered dt-responsive nowrap" style={{width:'100%'}}>
  <thead className='bg-primary text-white'>
            <tr>
                {prop.col.map(
                    (name)=>{
                    return <th>{name}</th>
                    }
                )}
            </tr>
        </thead>
        
</table>

</>
  )
}