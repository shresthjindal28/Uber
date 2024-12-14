// const axios = require('axios');

// module.exports.getAddressCoordinates = async (address) => {
//     try {
//         const response = await axios.get('https://api.olamaps.io/geocode', {
//             params: {
//                 address: address,
//                 key: process.env.OLAMAPS_API_KEY
//             }
//         });
        
        
//         const { lat, lng } = response.data.results[0].geometry.location;
//         return { lat, lng };
        
        
//     } catch (error) {
//         console.error('Error fetching coordinates:', error);
//         throw error;
//     }
// }