import './App.css';
import { Route, Routes } from 'react-router-dom';
/* Home */
import IndexHome from './layout/home/interface/IndexHome';
import HomePage from './page/home/HomePage';
import Trending from './page/home/Trending';
import Lifestyle from './page/home/Lifestyle';
import Beauty from './page/home/Beauty';
import Decor from './page/home/Decor';
import Nutrition from './page/home/Nutrition';
import Travel from './page/home/Travel';
import Wellbeing from './page/home/Wellbeing';
import Workout from './page/home/Workout';

import Wide from './page/home/Wide';
import Modern from './page/home/Modern';
import Feature from './page/home/Feature';
import Cover from './page/home/Cover';
import Blog from './page/home/Blog';
import Magazine from './page/home/Magazine';
import Editorial from './page/home/Editorial';
import PostAligned from './page/home/PostAligned'
import AccentColor from './page/home/AccentColor'
import Author from './page/home/Author'
import AboutPageOne from './page/home/AboutPageOne'
import AboutPageTwo from './page/home/AboutPageTwo'
import ErrorPage from './page/error/ErrorPage'
import ComingSoon from './page/error/ComingSoon'
import Boxed from './layout/boxed/interface/IndexBoxed';

import IndexArchive from './layout/archive/interface/IndexArchive';
import Contact from './page/archive/Contact'
import Archive from './page/archive/Archive';

import IndexShop from './layout/shop/interface/IndexShop';
import ShopDemo from './page/shop/ShopDemo'
import ShopCart from './page/shop/ShopCart'
import MyAccount from './page/shop/MyAccount'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<IndexHome />} >
          {/*1. FEATURES */}
          {/* Menu sidebar */}
          <Route index element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/lifestyle' element={<Lifestyle />} />
          <Route path='/beauty' element={<Beauty />} />
          <Route path='/decor' element={<Decor />} />
          <Route path='/nutrition' element={<Nutrition />} />
          <Route path='/travel' element={<Travel />} />
          <Route path='/wellbeing' element={<Wellbeing />} />
          <Route path='/workout' element={<Workout />} />

          {/* Layouts */}
          <Route path='/wide' element={<Wide />} />

          {/* Post Layouts */}
          <Route path='/modern' element={<Modern />} />
          <Route path='/feature' element={<Feature />} />
          <Route path='/cover' element={<Cover />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/magazine' element={<Magazine />} />
          <Route path='/editorial' element={<Editorial />} />
          <Route path='/post-aligned' element={<PostAligned />} />

          {/* Archive Page */}
          <Route path='/accent-color' element={<AccentColor />} />

          {/* Author Page */}
          <Route path='/author' element={<Author />} />
          {/* 2. PAGES */}
          <Route path='/about-page1' element={<AboutPageOne />} />
          <Route path='/about-page2' element={<AboutPageTwo />} />
          {/*<Route path='/fullwidth' element={<Fullwidth />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} /> */}
          
        </Route>

        <Route>
          {/* 2. PAGES */}
          <Route path='/error' element={<ErrorPage />} />
          <Route path='/coming-soon' element={<ComingSoon img={true}/>} />
          <Route path='/maintenance' element={<ComingSoon img={false}/>} />
        </Route>


        <Route>
          {/* 1. FEATURES */}
          {/* Layouts */}
          <Route path='/boxed' element={<Boxed />} />
        </Route>

        <Route element={<IndexArchive />}>
          {/* 1. FEATURES */}
          {/* Archive Page */}
          <Route path='/archive-aligned' element={<Archive/>} />
          <Route path='/contact' element={<Contact />} />
        </Route>

        <Route element={<IndexShop />}>
          {/* 3. SHOP */}
          <Route path='/shop-demo' element={<ShopDemo />} />
          <Route path='/shop-cart' element={<ShopCart />} />
          <Route path='/my-account' element={<MyAccount />} />
        </Route>
        <Route path="/*" /* element={<h1>Not Found</h1>} */ element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
