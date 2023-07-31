import LoadingCard from "components/loaders/LoadingCard"
import CategoryProductsSmallSetPagination from "components/pagination/CategoryProductsSmallSetPagination"
// import SmallSetPagination from "components/pagination/SmallSetPagination"
// import { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"
// import Error404 from "containers/errors/Error404"


const CategoryProductsList = ({
  products_list,
  get_products_list_page,
  count,
  category_id
}) => {
    
  return (
    <div>
      {
        products_list ?

          count !== 0 ?
          <>
            <div className="relative bg-white pb-8 px-4 sm:px-6 lg:pb-0 lg:px-8 md:min-h-nice">
              <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3" />
              </div>

              <div className="relative max-w-7xl mx-auto">
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                  {
                    products_list.map(product => (
                      <ProductCard key={product.slug} data={product} />
                    ))
                  }
                </div>

                <CategoryProductsSmallSetPagination 
                  get_products_list_page={get_products_list_page} 
                  products_list={products_list} 
                  count = {count}
                  category_id={category_id}
                />
              </div>
            </div>
          </>
          :
          <div className="w-full p-8 h-1/2 flex flex-col justify-center items-center mb-[14rem]">
            <LoadingCard />

            <p className="text-purple text-4xl mt-16 mb-8">
              There are no products for this category yet
            </p>

            <Link
              to={`/items/categories`}
              className="w-min md:w-1/4 my-6 px-6 py-2 h-fit uppercase text-lg sm:text-xl font-semibold tracking-wider border-2 border-black bg-teal-400 text-black items-center leading-6 md:leading-11 hover:bg-purple hover:text-white text-center"
            >
              Go back to Categories
            </Link>
          </div>
        :
        <div className="w-full p-8 h-1/2 flex flex-col justify-center items-center mb-[14rem]">
          <LoadingCard />

          <p className="text-purple text-4xl mt-16 mb-8">
            There are no products for this category yet
          </p>

          <Link
            to={`/items/categories`}
            className="w-min md:w-1/4 my-6 px-6 py-2 h-fit uppercase text-lg sm:text-xlfont-semibold tracking-wider border-2 border-black bg-teal-400 text-blackitems-center leading-6 md:leading-11 hover:bg-purple hover:text-white text-center"
          >
            Go back to Categories
          </Link>
        </div>
      }
    </div>
  )

}


const mapStateToProps = state => ({  
  count: state.products.count
})


export default connect(mapStateToProps, {
})(CategoryProductsList)
