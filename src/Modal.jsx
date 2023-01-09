import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div
        className="modal-background"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <section className="modal-main">
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}
//       <div
//         class="modal fade"
//         id="exampleModalCenter"
//         tabindex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalCenterTitle"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog modal-dialog-centered" role="document">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="exampleModalLongTitle">
//                 {props.children}
//               </h5>
//               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div class="modal-body">...</div>
//             <div class="modal-footer">
//               <button className="close" type="button" onClick={props.onClose}>
//                 &#x2715;
//               </button>
//               <button type="button" class="btn btn-primary">
//                 Save changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
