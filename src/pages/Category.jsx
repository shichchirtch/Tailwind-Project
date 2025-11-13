import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import { products } from "../data/data";

function Category() {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  console.log(location);

  // const maxPrice = searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : Infinity;
    const maxPrice = location.state?.maxPrice ?? Infinity;

  const currentCategoryArray = products.filter(
    (product) => product.categoryId === categoryId && product.price <= maxPrice
  );

  function handleChange(e) {
    const value = e.target.value;
    setSearchParams(value ? { maxPrice: value } : {});
  }

  return (
    <div>
      <h1 className='text-5xl text-center text-lime-400 p-8 font-semibold'>Category {categoryId}</h1>
      <div className='mb-4 text-xl font-semibold pl-10 mr-16'>
        <label  className='block font-medium mb-4 text-2xl'  htmlFor="maxPrice">Max Price </label>
        <input className='mb-8 block w-full px-3 mr-10 py-2 border
        border-gray-500 rounded-md placeholder-gray-500 focus: outline-none
        focus:ring-amber-500 focus:border-blue-500'
          type="number"
          id="maxPrice"
          placeholder="Enter max price"
          value={searchParams.get("maxPrice") || ""}
          onChange={handleChange}
        />
      </div>
      <ul  className='grid grid-cols-3 gap-4 px-5 '
          >
        {currentCategoryArray.map((product) => (
          <li key={product.name}>
              <Link  className='text-xl font-semibold text-white
            relative flex flex-col items-center justify-center group' to={`/product/${product.id}`}>
                <span className='absolute z-10  text-[calc(2vw+3px)]
                 group-hover:text-red-500 transition duration-1000 text-center '>
                    <div className='mb-5'>{product.name}</div> <br/> {product.price}$</span>


                  <img src={product.img} alt={product.name} className='rounded-2xl'/>
                  <div className='absolute bg-gray-950 inset-0 opacity-10 rounded-md
                 items-center justify-center '></div>
              </Link>
          </li>
        ))}
      </ul>
        {" "}
    </div>
  );
}

export default Category;
