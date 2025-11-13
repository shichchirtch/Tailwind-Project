import React from "react";

function Cart() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className='max-w-md p-5 py-16 mx-auto'>
      <h1 className='mb-6 font-bold text-2xl text-center'>Shopping Cart</h1>

      {/* Список товаров */}
      <div className='mb-8'>
        <h2 className='mb-4 text-lg font-semibold'>Your Items:</h2>
        <ul className='space-y-2'>
          <li className='justify-between flex items-center bp-2 border-b'>
            <span>Product 1</span>
            <span>$25</span>
          </li>
          <li className='justify-between flex items-center bp-2 border-b'>
            <span>Product 2</span>
            <span>$45</span>
          </li>
        </ul>
        <p className='mt-4 font-medium text-md'>Total: $70</p>
      </div>

      {/* Форма */}
      <form className='space-y-5'
          onSubmit={handleSubmit}>
        <h2 className='font-semibolt text-lg'>Enter Your Details:</h2>

        {/* Поле Name */}
        <div className='flex flex-col'>
          <input  className='p-2 text-sm border border-gray-300 rounded-md
          focus:outline-none focus:ring-2 focus:ring-blue-900 peer'
                  id="name" type="text" placeholder="Enter your full name" required />
          <label
              className='text-sm text-gray-500 peer-placeholder-shown:text-gray-400
              peer-focus:text-blue-500 mt-1'  htmlFor="name">Name</label>
        </div>

        {/* Поле Email */}
        <div className='flex flex-col'>
          <input className='p-2 text-sm border border-gray-300 rounded-md
          focus:outline-none focus:ring-2 focus:ring-blue-900 peer'
              id="email" type="email" placeholder="Enter your email address" required />

          <label className='text-sm text-gray-500 peer-placeholder-shown:text-gray-400
              peer-focus:text-blue-500 mt-3'
                 htmlFor="email">Email</label>
        </div>

        {/* Поле Address */}
        <div className='flex flex-col'>
          <textarea className='p-2 text-sm border border-gray-300 rounded-md
          focus:outline-none focus:ring-2 focus:ring-blue-900 peer'
            id="address"
            placeholder="Enter your delivery address"
            rows="3"
            required
          ></textarea>
          <label className='text-sm text-gray-500 peer-placeholder-shown:text-gray-400
              peer-focus:text-blue-500 mt-1'
                 htmlFor="address">Address</label>
        </div>

        {/* Поле Payment */}
        <div className='flex flex-col'>
          <select className='p-2 text-sm border border-gray-300 rounded-md
          focus:outline-none focus:ring-2 focus:ring-blue-900 peer'
              id="payment" required>
            <option value="" disabled>
              Select payment method
            </option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash">Cash on Delivery</option>
          </select>
          <label className='text-sm text-gray-500
              peer-focus:text-blue-500 mt-1'
              htmlFor="payment">Payment Method</label>
        </div>

        {/* Кнопка Submit */}
        <button className='w-full px-4 py-2 text-sm hover:bg-red-700
        text-white bg-blue-600 rounded-md'
            type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Cart;
