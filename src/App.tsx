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
    color: '#5ce66a',
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
    color: '#f7e648',
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
    color: '#3d61e3',
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