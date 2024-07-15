import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faIndianRupeeSign, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../Slice/CartSlice";
import "./Cart.css";

export const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <div className="container bg-white rounded-4 p-3">
      <h2 className="px-4 pb-3 border-bottom">Shopping Cart</h2>

      {items.map((item) => (
        <div key={item.id}>
          <div className="container-fluid p-0 d-flex flex-column border-bottom flex-md-row align-items-md-center">
            <div className="image-container">
              <img src={item.thumbnail} style={{ width: "auto", height: "100%" }} alt="" />
            </div>

            <div className="container-fluid p-0">
              <div className="container d-flex flex-column flex-md-row justify-content-md-between align-items-md-end align-items-xl-start">
                <div>
                  <h3>{item.title}</h3>
                  <h6>{item.brand}</h6>
                  <div className="my-2" style={{ color: "yellow" }}>
                    <FontAwesomeIcon icon={faStar} style={{ color: item.rating >= 1 ? "yellow" : "gray" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: item.rating >= 2 ? "yellow" : "gray" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: item.rating >= 3 ? "yellow" : "gray" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: item.rating >= 4 ? "yellow" : "gray" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: item.rating == 5 ? "yellow" : "gray" }} />
                  </div>
                  <h6 className="mb-0">Eligible for FREE Shipping</h6>
                  <h6 className="my-1" style={{ fontSize: "11.8px", color: item.stock > 2 ? "Green" : "red", }} >
                    {item.stock > 2 ? "in stack" : `Only ${item.stock} left in stack`}
                  </h6>
                  <div className="my-2">
                    <Button variant="primary" size="sm" onClick={() => item.quantity > 1 ? dispatch(decrementQuantity(item.id)) : " "} >
                      <FontAwesomeIcon icon={faMinus} />
                    </Button>{" "}{item.quantity}{" "}
                    <Button variant="primary" size="sm" onClick={() => item.quantity < item.stock ? dispatch(incrementQuantity(item.id)) : " "} >
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  </div>
                </div>

                <div className="d-flex justify-content-end align-items-center">
                  <FontAwesomeIcon icon={faIndianRupeeSign} />
                  <h3>{item.price.toFixed(2)}</h3>
                </div>
              </div>
              <div className="container d-flex justify-content-end">
                <span className="text-end">
                  subtotal({item.quantity} items):{" "}{(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="container pt-4 p-md-4">
        <h6 className="d-flex justify-content-between align-items-center">
          <span>SUB TOTAL:</span>{" "}
          <span>
            <FontAwesomeIcon icon={faIndianRupeeSign} />
            {totalAmount.toFixed(2)}
          </span>
        </h6>
        <h6 className="d-flex justify-content-between align-items-center">
          <span>Total Quantity:</span>
          <span>{totalQuantity}</span>
        </h6>
        <h4 className="d-flex justify-content-between align-items-center">
          <span>Total Amount:</span>
          <span className="text-success">
            <FontAwesomeIcon icon={faIndianRupeeSign} />
            {totalAmount.toFixed(2)}
          </span>
        </h4>
      </div>
    </div>
  );
}