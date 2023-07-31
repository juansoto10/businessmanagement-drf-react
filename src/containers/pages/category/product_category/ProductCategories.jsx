import ProductCategoriesList from "components/category/product_category/ProductCategoriesList"
import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect, useCallback } from "react"
import { connect } from "react-redux"
import { get_product_categories } from "redux/actions/productCategories"


const ProductCategories = ({
  get_product_categories,
  // get_products_categories_page,
  categories
}) => {

  const memoizedGetProductCategoriesList = useCallback(get_product_categories, [])

  useEffect(() => {
    memoizedGetProductCategoriesList()
  }, [memoizedGetProductCategoriesList])


  return (
    <FullWidthLayout>
      {/* <Header /> */}
      {/* <ItemsCategories /> */}
      <ProductCategoriesList get_product_categories={get_product_categories} categories={categories} />
    </FullWidthLayout>
  )

}
  
const mapStateToProps = state => ({
  categories: state.productCategories.product_categories,
})

export default connect(mapStateToProps, {
  get_product_categories,
})(ProductCategories)
