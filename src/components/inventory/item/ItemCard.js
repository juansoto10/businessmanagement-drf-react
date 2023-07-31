import { Link } from "react-router-dom"


const ItemCard = (data) => {

  let item = data && data.data

  const formatPrice = price => {

    return Number(price).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })
  }

  const formatDate = dateString => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={item.thumbnail} alt="item thumbnail" />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium   text-indigo-600">
              <Link to={`/items/categories/${item.category.id}`} className="hover:underline">
                {item.category.name}
              </Link>
            </p>
            <Link to={`/items/${item.slug}`} className="block mt-2">
              <p className="text-xl font-semibold   text-gray-900">{item.name}</p>
            </Link>
            
            <p className="text-sm   text-gray-900 mt-2">Price: {formatPrice(item.current_price)}</p>

            <p className="text-sm   text-gray-900">Units: {item.units}</p>

            <p className="text-sm  text-gray-900">Added: {formatDate(item.added)}</p>
          </div>
        </div>
      </div>
    </div>  
  )

}

export default ItemCard
