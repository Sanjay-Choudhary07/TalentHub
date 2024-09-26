import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Button } from './components/ui/button';
import { ThemeProvider } from "./components/theme-provider";
import AppLayout from './layout/app-layout';
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import JobListing from './pages/JobListing';
import JobPage from './pages/JobPage';
import PostJob from './pages/PostJob';
import SavedJobs from './pages/SavedJobs';
import MyApplications from './pages/MyApplications';
import ProtectedRoute from './components/protectedRoute';

const router = createBrowserRouter([
   {
     element: (
     <ProtectedRoute>
      <AppLayout/>
     </ProtectedRoute>
     ),
     children:[
      {
        path:'/',
        element:<Landing/>
      },
      {
        path:'/onboarding',
        element:(
        <ProtectedRoute>
        <Onboarding/>
        </ProtectedRoute>
        ),
      },
      {
        path:'/jobs',
        element:(
        <ProtectedRoute>
        <JobListing/>
        </ProtectedRoute>
        ),
      },
      {
        path:'/job/:id',
        element:(
        <ProtectedRoute>
        <JobPage/>
        </ProtectedRoute>
        ),
      },
      {
        path:'/post-job',
        element:(
        <ProtectedRoute>
        <PostJob/>
        </ProtectedRoute>
        ),
      },
      {
        path:'/saved-jobs',
        element:(
        <ProtectedRoute>
        <SavedJobs/>
        </ProtectedRoute>
        ),
      },
      {
        path:'/my-jobs',
        element:(
        <ProtectedRoute>
        <MyApplications/>
        </ProtectedRoute>
        ),
      },
     ]
   },
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
