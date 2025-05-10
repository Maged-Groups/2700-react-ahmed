import { useSelector } from "react-redux"

export default function Cart() {

  const { rdxCartItems } = useSelector(store => store.cartSlice);
  console.log('In Cart rdxCartItems', rdxCartItems)

  const calculateTotal = () => {
    return rdxCartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Your Shopping Cart</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Product</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Quantity</th>
              <th className="py-3 px-4 text-left">Total</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rdxCartItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.brand}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">${item.price.toFixed(2)}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <button className="w-8 h-8 border rounded-l hover:bg-gray-100">-</button>
                    <span className="w-12 h-8 border-t border-b text-center leading-8">
                      {item.quantity}
                    </span>
                    <button className="w-8 h-8 border rounded-r hover:bg-gray-100">+</button>
                  </div>
                </td>
                <td className="py-4 px-4">${(item.price * item.quantity).toFixed(2)}</td>
                <td className="py-4 px-4">
                  <button className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-50">
            <tr>
              <td colSpan="3" className="py-4 px-4 text-right font-medium">
                Cart Total:
              </td>
              <td colSpan="2" className="py-4 px-4 font-bold">
                ${calculateTotal().toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
