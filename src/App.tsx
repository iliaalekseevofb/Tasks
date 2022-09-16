import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar } from "./components";
import { Dashboard, Collection, Collections, Account, Landing, SignIn, SignUp } from './pages';

export interface collection {
  id: number, 
  name: string, 
  link: string, 
  color: string,
  tasks: {
    id: number,
    name: string,
    isCompleted: boolean
  }[]
}

const sampleCollections: collection[] = [
  {
    id: 1, 
    name: 'Finance', 
    link: 'finance', 
    color: '#cf8cca',
    tasks: [
      {
        id: 1,
        name: 'Pay the taxes',
        isCompleted: false
      }
    ]
  },
  {
    id: 2, 
    name: 'University', 
    link: 'university', 
    color: '#6ebac4',
    tasks: [
      {
        id: 1,
        name: 'Finish my project',
        isCompleted: false
      },
      {
        id: 2,
        name: 'Pass the exam',
        isCompleted: false
      }
    ]
  },
  {
    id: 3, 
    name: 'Work', 
    link: 'work', 
    color: '#845fa3',
    tasks: [
      {
        id: 1,
        name: 'Contact Dima',
        isCompleted: false
      }
    ]
  },
]

const App = () => {
  const[collections, setCollections] = useState<collection[]>(sampleCollections);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Sidebar collections={collections} />
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