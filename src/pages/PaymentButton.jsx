// import React from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import axios from 'axios';

// const stripePromise = loadStripe('pk_test_51Rhnr1PoqeawJXqSmkxgKb6Jr9b4pnR5RytjrJw0rbW0cJoSyFn3wKdSLzn94VflxrMLmbivrOnpBsewPH5AjWLJ00eFonRbPB'); // 🔁 use your real key

// const PaymentButton = ({ book, userDetails, onSuccess }) => {
//  const handleClick = async () => {
//   try {
//     const token = localStorage.getItem('token');
//     const response = await axios.post(
//       'http://localhost:5000/api/payments/create-checkout-session',
//       {
//         book,
//         userDetails
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         withCredentials: true
//       }
//     );

//     const sessionId = response.data.id;
//     const stripe = await stripePromise;
//     await stripe.redirectToCheckout({ sessionId });
//   } catch (error) {
//     console.error('Stripe checkout error:', error);
//     alert('Payment failed. Try again.');
//   }
// };

//   return (
//     <button className="btn btn-success w-100 mt-3" onClick={handleClick}>
//       Pay Rs. {book.rentprice} and Borrow
//     </button>
//   );
// };

// export default PaymentButton;