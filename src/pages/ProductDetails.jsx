import { useParams } from "react-router-dom";
import { products } from "../data/data";

function ProductDetails() {
  const { productId } = useParams();

  const product = products.find((p) => p.id === parseInt(productId, 10));

  console.log(product);

  return (
    <div className='text-center m-5 items-center flex-col'>
      {product ? (
        <>
          <h1 className=' text-3xl text-yellow-700 font-semibold mt-10'>Product Details</h1>
          <div className='flex flex-col items-center '>
          <h2 className='m-5 text-2xl text-gray-600 font-semibold mt-2'>{product.name}</h2>
          <p  className='text-xl mb-4 '  >Price: {product.price}$</p>
          <img  className='grid grid-cols-1 justify-items-center rounded-md' src={product.img} alt={product.name} style={{ width: "250px" }} />
          </div>
          </>
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
}

export default ProductDetails;
