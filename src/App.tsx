import { useState } from 'react';
import { Navbar, Sidebar } from "./components";

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
    link: '/finance', 
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
    link: '/university', 
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
    link: '/work', 
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
    <div className="w-full h-full">
      <Navbar />
      <Sidebar collections={collections} />
    </div>
  )
}

export default App