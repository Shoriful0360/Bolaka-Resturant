import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
<QueryClientProvider client={queryClient}>
<HelmetProvider>
<div className='max-w-[1536px]  mx-auto border-2 border-red-500'>
    <RouterProvider router={router}></RouterProvider>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
   </div>
</HelmetProvider>
    </QueryClientProvider>

</AuthProvider>
  </StrictMode>,
)
