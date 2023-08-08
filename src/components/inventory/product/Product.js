import Button from "components/navigation/Button"
import { Link } from "react-router-dom"


const Product = (data) => {

  let product = data && data.data

  const formatPrice = price => {

    return Number(price).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })
  }

  const formatDate = dateString => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="text-lg flex flex-col md:flex-row bg-white rounded-lg shadow-complete max-w-lg md:max-w-6xl h-min">
      <img src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.apasionadosporelcafe.com%2Fwp-content%2Fuploads%2F2020%2F08%2Fshutterstock_540967066-min.jpg&f=1&nofb=1&ipt=6324e6e161ed91fae594a2c8e983281968407bef28b2579910defbca1112269f&ipo=images`} alt="product thumbnail" className="w-full rounded-t-lg md:rounded-r-none md:rounded-l-lg md:w-2/5 md:min-w-[450px]" />

      <div className="flex flex-col p-6 md:p-3 justify-center items-center md:w-1/2">
        <Link to={`/products/categories/${product.category.id}`} className="block text-base text-center text-azulito drop-shadow-lg font-semibold tracking-wide uppercase hover:underline">
          {product.category.name}
        </Link>
        <h1 className="mt-2 mb-6 block text-2xl text-center leading-8 font-extrabold tracking-tight text-black s:text-3xl md:text-4xl">
        {product.name}
        </h1>

        <div className="text-base s:text-lg sm:text-xl">
          {Object.entries({
            Price: formatPrice(product.current_price),
            Units: product.units,
            Added: formatDate(product.added),
          }).map(([label, value]) => (
            <p key={label} className="mb-1">
              <strong>{label}:</strong> {value}
            </p>
          ))}
        </div>

        
      </div>

      <div className="flex flex-row items-center justify-evenly md:w-1/2 px-4 pb-4 s:pb-5 sm:pb-7 md:p-3">
        <Button text="Modify" handleClick={() => console.log('mk')} />
        <Button text="Delete" handleClick={() => console.log('lok')} />
      </div>
    </div>
  )
}


export default Product