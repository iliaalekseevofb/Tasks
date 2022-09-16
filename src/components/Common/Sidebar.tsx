import { collection } from "../../App";

type SidebarProps = {
  collections: collection[]
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div className="fixed z-10 top-12 left-0 bottom-0 w-64 h-screen py-6 bg-secondaryBgHover bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
      {props.collections.map((item) => (
        <div>
          {item.id}
          {item.name}
          {item.tasks.map((task) => (
            <h3>{task.name}</h3>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Sidebar