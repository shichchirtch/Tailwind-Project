import { Link, useLocation } from "react-router-dom";
import { useLoaderData } from "react-router-dom";




function Home() {
  const location = useLocation();
  console.log(location);

    const categories = useLoaderData(); // <--- сюда приходит массив
    console.log('categor =  //// ////', categories)

  return (
    <div className='py-10 sm:py-16'>
      <h1 className='text-center mb-8 font-semibold text-4xl font-times text-primary'
          style={{ fontFamily: "Times New Roman, serif" }}
      >Categories</h1>

      <ul className='grid grid-cols-3 gap-3 px-20 font-serif  '>
        {categories.map((category) => (
          <li key={category.id}>
            <Link    className='text-xl font-semibold text-white
            relative flex flex-col items-center justify-center group'
                     to={`/category/${category.name}`}>
                <span className='absolute z-10  text-[calc(2vw+3px)]
                 group-hover:text-red-500 transition duration-1000 '  >{category.name}</span>
                <div className='relative'>
              <img src={category.img} alt={category.name} className=' rounded-md' />
                <div className='absolute bg-gray-950 inset-0 opacity-40 rounded-md
                 items-center justify-center '></div>

                </div>
                </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
