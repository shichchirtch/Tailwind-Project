import {useParams} from "react-router-dom";
// import { products } from "../data/data";
import {
    useLocation,
    useRouteError,
    isRouteErrorResponse
} from "react-router-dom";

function ProductDetails() {
    // const error = useRouteError();
    // console.log("Fehler ist .......", error, error.status, error.data, error.statusText);
    //
    // if (isRouteErrorResponse(error)) {
    //     return (
    //         <div>
    //             <h1>My Error {error.status}</h1>
    //             <p>{error.statusText}</p>
    //             <p>{error.data}</p>
    //         </div>
    //     );
    // }

    // const product = products.find((p) => p.id === parseInt(productId, 10));
    const loc = useLocation()
    console.log('LOG = ', loc)
    const product = loc.state;

    console.log('hier -  // ', product);

    return (
        <div className='text-center m-5 items-center flex-col'>
            {product ? (
                <>
                    <h1 className=' text-3xl text-yellow-700 font-semibold mt-10'>Product Details</h1>
                    <div className='flex flex-col items-center '>
                        <h2 className='m-5 text-2xl text-gray-600 font-semibold mt-2'>{product.name}</h2>
                        <p className='text-xl mb-4 '>Price: {product.price}$</p>
                        <img className='grid grid-cols-1 justify-items-center rounded-md' src={product.img}
                             alt={product.name} style={{width: "250px"}}/>
                    </div>
                </>
            ) : (
                <p>Not Found</p>
            )}
        </div>
    );
}

export default ProductDetails;
