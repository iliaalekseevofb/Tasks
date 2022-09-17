import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalContext, collection } from './context/GlobalContext';
import { Navbar, Sidebar } from "./components";
import { Dashboard, Collection, Collections, Account, Landing, SignIn, SignUp, Error } from './pages';
import { FaBookReader, FaUser, FaEdit } from 'react-icons/fa';

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
  const[isOpenSidebar, setIsOpenSidebar] = useState<boolean>(true);

  return (
    <div className="App">
      <GlobalContext.Provider value={{collections, setCollections, isOpenSidebar, setIsOpenSidebar}}>
        <BrowserRouter>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:name" element={<Collection />} />
            <Route path="/account" element={<Account />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  )
}

export default App