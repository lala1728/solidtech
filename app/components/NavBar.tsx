import React from 'react'

const NavBar = () => {
  return (
    <section>
        <nav className="fixed top-0 left-0 right-0 w-full h-[100px] bg-black text-white flex items-center justify-center">
            <ul className="flex space-x-4">
                <li className="flex-1 text-center">Home</li>
                <li className="flex-1 text-center">Home</li>
                <li className="flex-1 text-center">Home</li>
                <li className="flex-1 text-center">Home</li>
            </ul>
        </nav>
    </section>
  )
}

export default NavBar