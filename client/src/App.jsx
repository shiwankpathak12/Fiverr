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
import Orders from './pages/orders/Orders';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import Add from './pages/add/Add';
import MyGigs from './pages/myGigs/MyGigs'
import Pay from './pages/pay/Pay'
import Success from './pages/success/Success';

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
          <Route path='/orders' element={<Orders />}></Route>
          <Route path='/messages' element={<Messages />}></Route>
          <Route path='/message/:id' element={<Message />}></Route>
          <Route path='/add' element={<Add />}></Route>
          <Route path='/myGigs' element={<MyGigs />}></Route>
          <Route path='/pay/:id' element={<Pay />}></Route>
          <Route path='/success' element={<Success />}></Route>
         
        </Route>   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
