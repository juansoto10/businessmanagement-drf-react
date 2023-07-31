import { Link } from "react-router-dom"


const ProductCard = (data) => {

  let product = data && data.data

  return (
    <div>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={product.thumbnail} alt="product thumbnail" />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium   text-indigo-600">
              <Link to={`/products/categories/${product.category.id}`} className="hover:underline">
                {product.category.name}
              </Link>
            </p>
            <Link to={`/products/${product.slug}`} className="block mt-2">
              <p className="text-xl font-semibold   text-gray-900">{product.name}</p>
            </Link>
            
            <p className="text-sm   text-gray-900 mt-2">Price: {product.current_price}</p>

            <p className="text-sm   text-gray-900">Units: {product.units}</p>

            <p className="text-sm  text-gray-900">Added: {product.added}</p>
          </div>
        </div>
      </div>
    </div>  
  )

}

export default ProductCard
