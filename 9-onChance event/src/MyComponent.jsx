import React, {useState} from "react"

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("visa");
    const [shipping, setShipping] = useState("Delivery");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    }

    const handleShippingChange = (event) => {
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} rows="4" cols="50"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select Payment</option>
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" 
                    checked={shipping === "Pick Up"} 
                    onChange={handleShippingChange} />
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery" 
                    checked={shipping === "Delivery"} 
                    onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>

        </div>
    )
}

export default MyComponent