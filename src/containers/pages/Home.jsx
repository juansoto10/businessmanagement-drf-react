import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import { Link } from "react-router-dom"


const Home = ({
}) => {

  return (
    <FullWidthLayout>
      <div className="flex flex-col h-100 justify-center items-center px-6 pt-10 md:pt-14">
        <h1 className="text-4xl md:text-5xl font-bold text-azulito mb-10 text-center">Business Management</h1>

        <div className="flex flex-col w-3/4 max-w-[320px] sm:grid sm:grid-cols-2 sm:gap-5 sm:max-w-[550px] md:max-w-[750px]">

          <section className="relative flex flex-col justify-center items-center text-center border rounded-xl px-4 py-6 mb-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-azulito sm:absolute sm:top-6">Inventory</h2>

            <ul className="md:text-lg">
              <li className="mb-3">
                <Link to="/items" className="px-1 underline underline-offset-[7px] hover:text-white hover:bg-black transition-colors duration-300">Items</Link>
              </li>
              <li className="">
                <Link to="/products" className="px-1 underline underline-offset-[7px] hover:text-white hover:bg-black transition-colors duration-300">Products</Link>
              </li>
            </ul>
          </section>

          <section className="flex flex-col justify-center items-center text-center border rounded-xl px-4 py-6 mb-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-azulito">Finance</h2>
            
            <ul className="md:text-lg">
              <li className="mb-3">
                <Link to="/finance/sales" className="px-1 underline underline-offset-[7px] hover:text-white hover:bg-black transition-colors duration-300">Sales</Link>
              </li>
              <li className="mb-3">
                <Link to="/finance/quotation" className="px-1 underline underline-offset-[7px] hover:text-white hover:bg-black transition-colors duration-300">Quotation</Link>
              </li>
              <li className="mb-3">
                <Link to="/finance/purchases" className="px-1 underline underline-offset-[7px] hover:text-white hover:bg-black transition-colors duration-300">Purchases</Link>
              </li>
              <li className="mb-3">
                <Link to="/finance/clients" className="px-1 underline underline-offset-[7px] hover:text-white hover:bg-black transition-colors duration-300">Clients</Link>
              </li>
              <li className="">
                <Link to="/finance/suppliers" className="px-1 underline underline-offset-[7px] hover:text-white hover:bg-black transition-colors duration-300">Suppliers</Link>
              </li>
            </ul>
          </section>

          <section className="flex flex-col justify-center items-center text-center border rounded-xl px-4 py-6 mb-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-azulito">Categories</h2>

            <ul className="md:text-lg">
              <li className="mb-3">
                <Link to="/items/categories" className="px-1 underline underline-offset-[7px] hover:text-white hover:bg-black transition-colors duration-300">Item Categories</Link>
              </li>
              <li className="">
                <Link to="/products/categories" className="px-1 underline underline-offset-[7px] hover:text-white hover:bg-black transition-colors duration-300">Product Categories</Link>
              </li>
            </ul>
          </section>

          <section className="flex flex-col justify-center items-center text-center border rounded-xl px-4 py-6 mb-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-azulito">Staff</h2>

            <ul className="md:text-lg">
              <li className="mb-3">
                <Link to="/staff/admins" className="px-1 underline underline-offset-[7px] hover:text-white hover:bg-black transition-colors duration-300">Admins</Link>
              </li>
              <li className="">
                <Link to="/staff/employees" className="px-1 underline underline-offset-[7px] hover:text-white hover:bg-black transition-colors duration-300">Employees</Link>
              </li>
            </ul>
          </section>

        </div>
        
      </div>
    </FullWidthLayout>
  )
}
  
const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {
})(Home)