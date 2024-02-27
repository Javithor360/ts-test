import './App.css'
import { AppProvider } from '../context/AppContext.tsx'
import { AppRouter } from './router/AppRouter'

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}

export default App
