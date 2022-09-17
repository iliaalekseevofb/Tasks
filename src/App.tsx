import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar } from "./components";
import { Dashboard, Collection, Collections, Account, Landing, SignIn, SignUp } from './pages';
import { FiMenu } from 'react-icons/fi';
import { FaBookReader, FaUser, FaEdit } from 'react-icons/fa';

export interface collection {
  id: number, 
  name: string, 
  link: string, 
  color: string,
  icon: React.ReactNode,
  tasks: {
    id: number,
    name: string,
    isCompleted: boolean
  }[]
}

const sampleCollections: collection[] = [
  {
    id: 1, 
    name: 'School', 
    link: 'school', 
    color: '#cf8cca',
    icon: <FaBookReader />,
    tasks: [
      {
        id: 1,
        name: 'Prepare for the exams',
        isCompleted: false
      }
    ]
  },
  {
    id: 2, 
    name: 'Personal', 
    link: 'personal', 
    color: '#6ebac4',
    icon: <FaUser />,
    tasks: [
      {
        id: 1,
        name: 'Clean the room',
        isCompleted: false
      },
      {
        id: 2,
        name: 'Meet the Jerry on Sunday',
        isCompleted: false
      }
    ]
  },
  {
    id: 3, 
    name: 'Design', 
    link: 'design', 
    color: '#845fa3',
    icon: <FaEdit />,
    tasks: [
      {
        id: 1,
        name: 'Finish my graphic design',
        isCompleted: false
      }
    ]
  },
]

const App = () => {
  const[collections, setCollections] = useState<collection[]>(sampleCollections);
  const[isOpenSideBar, setIsOpenSidebar] = useState<boolean>(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isOpenSidebar={isOpenSideBar} setIsOpenSidebar={setIsOpenSidebar} />
        <Sidebar collections={collections} isOpenSidebar={isOpenSideBar} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collection-:name" element={<Collection />} />
          <Route path="/account" element={<Account />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App