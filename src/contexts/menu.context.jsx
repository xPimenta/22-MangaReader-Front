import { createContext, useState } from "react"

export const MenuContext = createContext()

export function MenuProvider(props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [logoutArrow, setLogoutArrow] = useState(false)

  return (
    <MenuContext.Provider value={{ menuIsOpen, setMenuIsOpen, logoutArrow, setLogoutArrow }}>
      {props.children}
    </MenuContext.Provider>
  )
}