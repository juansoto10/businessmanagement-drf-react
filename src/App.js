import Home from 'containers/pages/Home'
// import Error404 from 'containers/errors/Error404'

import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Items from 'containers/pages/inventory/item/Items'
import Products from 'containers/pages/inventory/product/Products'
// import PollsQuestion from 'containers/pages/polls/PollsQuestion'

import CategoryItems from 'containers/pages/inventory/item/CategoryItems'
import CategoryProducts from 'containers/pages/inventory/product/CategoryProducts'
import ItemDetail from 'containers/pages/inventory/item/ItemDetail'
import ProductDetail from 'containers/pages/inventory/product/ProductDetail'

import ItemCategories from 'containers/pages/category/item_category/ItemCategories'
import ProductCategories from 'containers/pages/category/product_category/ProductCategories'

// import Search from 'containers/pages/Search'
// import Categories from 'containers/pages/category/Categories'
// import About from 'containers/pages/About'
// import PollsQuestionResult from 'containers/pages/polls/PollsQuestionResult'


const App = () => {

  return (

    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error display */}
          {/* <Route path="*" element={<Error404 />} /> */}

          {/* Home display */}
          <Route path="/" element={<Home />} />

          {/* <Route path="/login" element={<Login/>} /> */}
          {/* <Route path="/logout" element={<Logout />} /> */}

          <Route path="/items" element={<Items />} />
          <Route path="/items/:slug" element={<ItemDetail />} />
          <Route path="/items/categories/:category_id" element={<CategoryItems/>} />
          

          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/products/categories/:category_id" element={<CategoryProducts/>} />

          <Route path="/items/categories" element={<ItemCategories />} />
          <Route path="/products/categories" element={<ProductCategories />} />

          {/* <Route path="/items/search/:term" element={<ItemSearch />}/> */}
          {/* <Route path="/products/search/:term" element={<ProductSearch />}/> */}

          {/* <Route path="/polls" element={<Polls/>} /> */}
          {/* <Route path="/polls/question/:slug/results" element={<PollsQuestionResult />} /> */}
          {/* <Route path="/polls/categories/:category_id" element={<PollsCategory />} /> */}
          {/* <Route path="/search/:term" element={<Search />}/> */}

          {/* <Route path="/polls/categories" element={<Categories />} /> */}

          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Router>
    </Provider>

  )

}


export default App
