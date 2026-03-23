import { Suspense } from 'react'
import './App.css'
import ContainerStudent from './components/ContainerStudent'
import MovieCont from './components/Movies/MovieCont'
import Event from './components/Practis/Event'
import Cricket from './components/Cricket/Cricket'
import Users from './components/Users/Users'
import Loading from './components/Loading/Loading'
import Post from './components/Posts/Post'
import Count from './components/Counters/Count'

const students = fetch("../public/studentMark.json").then(res => res.json())

const movies = fetch('../public/movie.json').then(res => res.json())


const data = () => {

  return fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
}
function App() {
  return (
    <>
      <Count></Count>
      {/* <Suspense fallback={<Loading></Loading>}>
        <Users pData={data()}></Users>
        </Suspense>
      <Cricket></Cricket>
      <Suspense>
        <ContainerStudent students={students}></ContainerStudent>
      </Suspense>
      <Suspense fallback={<span className="loading loading-ring loading-xl fixed top-[50%] left-[50%]"></span>}>
        <MovieCont movies={movies}></MovieCont>
      </Suspense>
      <Event></Event>

      <Post></Post> */}
    </>
  )
}


export default App
