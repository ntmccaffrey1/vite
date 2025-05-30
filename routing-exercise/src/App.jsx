import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ContentPage from './pages/ContentPage';
import CircleFocus from './components/CircleFocus';

const data = [
  {
    id: 1, 
    title: 'Mars', 
    content: 'Mars, often called the Red Planet due to its reddish appearance caused by iron oxide on its surface, is the fourth planet from the Sun in our solar system. It has a cold, desert-like environment with towering volcanoes, deep canyons, and polar ice caps made of frozen water and carbon dioxide. Mars has been a major focus of space exploration because of its potential to have once harbored life and its future prospects for human colonization.'
  },
  {
    id: 2,
    title: 'Venus',
    content: 'Venus, the second planet from the Sun, is often called Earth’s “sister planet” because of its similar size and composition. However, Venus has a thick, toxic atmosphere composed mainly of carbon dioxide, with clouds of sulfuric acid, creating a runaway greenhouse effect that makes its surface temperature hot enough to melt lead—averaging around 900°F (475°C). The planet’s surface is marked by vast plains, volcanic features, and highland regions, but its dense atmosphere and extreme heat make it inhospitable to life as we know it. Despite these harsh conditions, Venus remains a fascinating object of study for understanding planetary climates and atmospheres.'
  },
  {
    id: 3,
    title: 'Orion Nebula',
    content: 'The Orion Nebula, also known as Messier 42 or M42, is one of the brightest and most famous nebulae in the night sky, located about 1,344 light-years away in the constellation Orion. It is a vast stellar nursery where new stars are born from clouds of gas and dust, glowing brightly due to intense ultraviolet radiation from young, massive stars at its core. The nebula spans roughly 24 light-years across and provides astronomers with valuable insights into the processes of star formation and the early stages of planetary system development. Its stunning colors and intricate structures have made the Orion Nebula a favorite target for both professional and amateur astronomers alike.'
  },
  {
    id: 4,
    title: 'Andromeda Galaxy',
    content: 'The Andromeda Galaxy, also known as M31, is the nearest spiral galaxy to the Milky Way and the largest galaxy in the Local Group, which also includes our own galaxy and about 50 others. Located approximately 2.5 million light-years away, Andromeda is visible to the naked eye from Earth as a faint, blurry patch in the constellation Andromeda. It contains about one trillion stars—more than twice the number in the Milky Way—and is on a slow collision course with our galaxy, expected to merge with it in about 4 billion years. Studying Andromeda helps astronomers understand the structure and evolution of spiral galaxies, as well as the future of our own cosmic neighborhood.'
  }
]

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<NavBar />}>
      <Route index element={<HomePage />} />
      <Route path=':id' element={<ContentPage data={data}/>} />
    </Route>
  )
)

function App() {
    return (
      <div>
        <CircleFocus />
        <RouterProvider router={router} />
      </div>
    );
}

export default App;
