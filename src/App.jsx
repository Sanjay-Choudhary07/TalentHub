import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Button } from './components/ui/button';
import AppLayout from './layout/app-layout';
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import JobListing from './pages/JobListing';
import JobPage from './pages/JobPage';
import PostJob from './pages/PostJob';
import SavedJobs from './pages/SavedJobs';
import MyApplications from './pages/MyApplications';

const router = createBrowserRouter([
   {
     element: <AppLayout/>,
     children:[
      {
        path:'/',
        element:<Landing/>
      },
      {
        path:'/onboarding',
        element:<Onboarding/>
      },
      {
        path:'/jobs',
        element:<JobListing/>
      },
      {
        path:'/job/:id',
        element:<JobPage/>
      },
      {
        path:'/post-job',
        element:<PostJob/>
      },
      {
        path:'/saved-job',
        element:<SavedJobs/>
      },
      {
        path:'/my-jobs',
        element:<MyApplications/>
      },
     ]
   },
])

function App() {
  return (
    <RouterProvider router={router}/>
      
  )
}

export default App
