import ItemsList from "components/inventory/item/ItemsList"
// import ItemsCategories from "components/polls/PollsCategories"
// import Header from "components/items/Header"
import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect, useCallback } from "react"
import { connect } from "react-redux"
import { get_items_list, get_items_list_page } from "redux/actions/items"


const Items = ({
  get_items_list,
  get_items_list_page,
  items_list
}) => {

  const memoizedGetItemsList = useCallback(get_items_list, [])

  useEffect(() => {
    memoizedGetItemsList()
  }, [memoizedGetItemsList])


  return (
    <FullWidthLayout>
      {/* <Header /> */}
      {/* <ItemsCategories /> */}
      <ItemsList get_items_list_page={get_items_list_page} items_list={items_list} />
    </FullWidthLayout>
  )

}
  
const mapStateToProps = state => ({
  items_list: state.items.items_list,
})

export default connect(mapStateToProps, {
  get_items_list,
  get_items_list_page
})(Items)
  