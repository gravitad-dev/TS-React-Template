import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from './router/router'

function App() {
  return (
    <main>
      <Router>
        <Suspense fallback={<p>loading</p>}>
          <AppRouter />
        </Suspense>
      </Router>
    </main>
  )
}

export default App
