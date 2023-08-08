import LoadingCard from "components/loaders/LoadingCard"
import SmallSetPagination from "components/pagination/SmallSetPagination"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"


const ProductsList = ({
  products_list,
  get_products_list_page,
  count
}) => {
    
  return (
    <div>
      {
        products_list ?
        <>
          <div className="relative bg-white pb-8 px-4 sm:px-6 lg:pb-12 lg:px-8 md:min-h-nice">
            <div className="absolute inset-0">
              <div className="bg-white h-1/3 sm:h-2/3" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {
                  products_list.map(product => (
                    <ProductCard key={product.slug} data={product}/>
                  ))
                }
              </div>

              <SmallSetPagination 
                get_items_list_page={get_products_list_page} 
                items_list={products_list}
                count={count}
              />

              <div className="flex items-center justify-around text-base sm:text-lg md:text-xl mt-10 md:mt-14 w-full">

                {/* <Link
                  to={`/`}
                  className="px-1 underline underline-offset-[8px] hover:text-white hover:bg-black transition-colors duration-300"
                >
                  Home 
                </Link> */}

                <Link
                  to={`/`}
                  className="px-1 underline underline-offset-[8px] hover:text-white hover:bg-black transition-colors duration-300"
                >
                  Back
                </Link>

              </div>

            </div>
          </div>
        </>

        :
        <LoadingCard/>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.products.count
})

export default connect(mapStateToProps, {
})(ProductsList)
