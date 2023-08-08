import ProductsList from "components/inventory/product/ProductsList"
// import ProductsCategories from "components/inventory/category/product_category/ProductCategories"
// import Header from "components/Products/Header"
import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import Button from "components/navigation/Button"
import { useEffect, useCallback } from "react"
import { connect } from "react-redux"
import { get_products_list, get_products_list_page } from "redux/actions/products"


const Products = ({
  get_products_list,
  get_products_list_page,
  products_list
}) => {

  const memoizedGetProductsList = useCallback(get_products_list, [])

  useEffect(() => {
    memoizedGetProductsList()
  }, [memoizedGetProductsList])


  return (
    <FullWidthLayout>
      {/* <Header /> */}
      {/* <ProductsCategories /> */}
      <div className="flex justify-center px-4 pt-8 sm:px-6 lg:px-8">
        <Button text="Add new product" handleClick={() => console.log('Creando producto')} />
      </div>
      
      <ProductsList get_products_list_page={get_products_list_page} products_list={products_list} />
    </FullWidthLayout>
  )

}
  
const mapStateToProps = state => ({
  products_list: state.products.products_list,
})

export default connect(mapStateToProps, {
  get_products_list,
  get_products_list_page
})(Products)
  