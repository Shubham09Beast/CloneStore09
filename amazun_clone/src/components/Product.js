import React from "react";

export default function Product(props) {
 
  return (
    <div className="row">
      <div className="col-4">
        <h2>
          {props.product.name}{" "}
          <span class="badge bg-secondary">{props.product.price}</span>
        </h2>
      </div>
      <div className="col-4">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger">
            Increment
          </button>
          <button type="button" class="btn btn-warning">
            {props.product.quantity}
          </button>
          <button type="button" class="btn btn-success" onClick={ () => {props.incrementQty(props.index)} }>
            Decrement
          </button>
        </div>
      </div>
      <div className="col-4">
        {props.product.quantity*props.product.price}
      </div>
    </div>
  );
}
