'use server';

//Get all products

export async function fetchAllProducts() {
  const apiKey = 'YOUR_ETSY_API_KEY';
  try {
    const result = await fetch(
      `https://openapi.etsy.com/v2/listings/active.js?api_key=${apiKey}&limit=10`, // This endpoint returns active listings
      {
        method: 'GET',
        cache: 'no-store',
      }
    );
    const data = await result.json();
    return {
      success: true,
      data:  data?.products,
    }
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: 'Some error occurred! Please try again',
    };
  }
}
