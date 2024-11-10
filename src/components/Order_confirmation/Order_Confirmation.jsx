import React from 'react';
import { useHistory } from 'react-router-dom';
import './Order_Confirmation.css';
import Confetti from 'react-confetti';
import { useEffect } from 'react';
import { useState } from 'react';

function OrderConfirmation() {
    const history = useHistory();
    const [showConfetti, setShowConfetti] = useState(false);
    
    const home = () => {
        history.push('/Home');
    };

    const cart = () => {
        history.push('/ViewBag');
    };
    useEffect(() => {
            // Trigger confetti after a short delay
            const timeout = setTimeout(() => {
              setShowConfetti(true);
            }, 500);
        
            // Stop confetti after a few seconds
            const confettiTimeout = setTimeout(() => {
              setShowConfetti(false);
            }, 2000); 
        
            return () => {
              clearTimeout(timeout);
              clearTimeout(confettiTimeout);
            };
          }, []);
        

    return (
        <div className="order-confirmation-container">
            <h1 className="thank-you-title">Thank You for Your Order!</h1>
            {showConfetti && <Confetti />}
            <h2 className="order-confirmation-message">Your Order has been Confirmed.</h2>
            <p className="order-details">We’re preparing your order and will notify you once it’s on its way!</p>
            <p className='Estd'>Estimated Delivery: 2 to 3 days</p>
            <div className="button-group">
                <button onClick={home} className=" home-btn">Go to Home</button>
                <button onClick={cart} className=" cart-btn">View Cart</button>
            </div>
        </div>
    );
}
export default OrderConfirmation;







// const  OrderConfirmation = () => {
//   const [showConfetti, setShowConfetti] = useState(false);

//   useEffect(() => {
//     // Trigger confetti after a short delay
//     const timeout = setTimeout(() => {
//       setShowConfetti(true);
//     }, 500);

//     // Stop confetti after a few seconds
//     const confettiTimeout = setTimeout(() => {
//       setShowConfetti(false);
//     }, 5000); 

//     return () => {
//       clearTimeout(timeout);
//       clearTimeout(confettiTimeout);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Thank You!</h1>
//       {showConfetti && <Confetti />}
//     </div>
//   );
// };









