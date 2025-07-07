

// import React, { useEffect, useState } from 'react';
// import { useSearchParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Success = () => {
//   const [searchParams] = useSearchParams();
//   const [message, setMessage] = useState('Processing payment...');
//   const navigate = useNavigate();
//   const rentId = searchParams.get('rentId');

//   useEffect(() => {
//     const confirmPayment = async () => {
//       try {
//         if (rentId) {
//           const token = localStorage.getItem('token');
//           await axios.put(
//             `http://localhost:5000/api/rents/${rentId}`,
//             { paymentStatus: 'paid' },
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//               withCredentials: true,
//             }
//           );

//           setMessage('✅ Payment successful! Your rent request has been submitted to the admin.');
//         } else {
//           setMessage('⚠️ Payment success, but rent ID is missing.');
//         }
//       } catch (error) {
//         console.error('Error confirming payment:', error);
//         setMessage('❌ Something went wrong while confirming your payment.');
//       }
//     };

//     confirmPayment();
//   }, [rentId]);

//   return (
//     <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
//       <div className="text-center p-4 shadow rounded bg-white" style={{ maxWidth: '400px' }}>
//         <h2 className="text-success mb-3">🎉 Payment Success</h2>
//         <p>{message}</p>
//         <button className="btn btn-primary mt-3" onClick={() => navigate('/dashboard')}>
//           Go to Dashboard
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Success;


