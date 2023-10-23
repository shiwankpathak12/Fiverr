import {BrowserRouter,Route,Routes,Outlet} from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Home from './pages/home/Home'
import './App.scss';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout/>}> 
          children:[<Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/gigs' element={<Gigs />}></Route>
          <Route path='/gig/:id' element={<Gig />}></Route>
          <Route path='/' element={<Home />}></Route>]
        </Route>   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
