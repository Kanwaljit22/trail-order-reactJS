import data from "../data.json";
import React, { useState, useEffect } from 'react';

function Cards(){
      const [cardsDashboard, setUsers] = useState(data);

  useEffect(() => {
    // Assuming you have the JSON data imported or fetched
    setUsers(data);
  }, []);
console.log(data);
    return(
        <>
        {cardsDashboard.dashboardData.newRequest.map(cards => (
           <div class="panel-body">
           <div class="d-flex flex-row justify-between item-center">
             <div class="panel-section">
               <div class="panel-head">
                 <h2>{cards.headingName}</h2>
                 <span class="badge new-request">{cards.status}</span>
               </div>
               <div class="panel-details d-flex flex-row justify-between">

               {cards.values.map(values => (
                <div>
                   <div class="key padding-B-6">{values.key}</div>
                   <div class="value">{values.value}</div>
                 </div>
               ))}
                 

               </div>
             </div>
             <div class="action-buttons">
               <button class="btn btn-primary" onclick="location.href='your-cart-empty.html'" fdprocessedid="ij7q1o">
                 Create Order
               </button>
               <a href="#" class="text-link" data-drawer-trigger="" aria-controls="view-detals" aria-expanded="false">View Details</a>
             </div>
           </div>
         </div>
        ))}

       
        </>
    )

}

export default Cards;