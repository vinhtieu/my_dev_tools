import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActive } from '../features/sidebar/sidebarSlice'
import { NavLink } from 'react-router-dom'
import {
  clr_link_water,
  clr_woodsmoke,
  clr_botticelli,
  clr_catskill_white,
  clr_picton_blue,
  clr_onahau
} from '../constants'

const Sidebar = () => {
  const list = useSelector((state) => state.sidebar.items)
  const dispatch = useDispatch()

  const handleSelectingItem = (item) => {
    dispatch(setActive(item.title))
  }

  const renderSidebarItem = list.map((item, index) => (
    <li
      key={index}
      onClick={() => {
        handleSelectingItem(item)
      }}
    >
      <NavLink
        className={`${
          item.active
            ? 'text-black bg-sky-400/25'
            : 'bg-transparent hover:bg-sky-400/10 text-[#171A1C]'
        } w-full h-10 p-2 rounded-md flex item-center `}
        to={item.path}
      >
        {item.title}
      </NavLink>
    </li>
  ))
  return (
    <div
      id="sidebar"
      className={'w-[275px] h-screen border-[#DDE7EE] border-r border-t flex flex-col px-4 py-4'}
    >
      <div id="logo"></div>
      <nav id="sidebar__nav">
        <ul className="space-y-2 text-lg  cursor-pointer">{renderSidebarItem}</ul>
      </nav>
    </div>
  )
}

export default Sidebar
