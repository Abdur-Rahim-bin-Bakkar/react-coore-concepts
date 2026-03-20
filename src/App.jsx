import { Suspense } from 'react'
import './App.css'
import ContainerStudent from './components/ContainerStudent'
import MovieCont from './components/Movies/MovieCont'

const students = fetch("../public/studentMark.json").then(res => res.json())

const movies = fetch('../public/movie.json').then(res => res.json())
function App() {
  return (
    <>

      <h1>this is heading </h1>
      {/* <Suspense>
        <ContainerStudent students={students}></ContainerStudent>
      </Suspense> */}
      <Suspense fallback={<span className="loading loading-ring loading-xl fixed top-[50%] left-[50%]"></span>}>
        <MovieCont movies={movies}></MovieCont>
      </Suspense>

    </>
  )
}


export default App
