import React from 'react'

// import { AiFillShopping } from "react-icons/fa";
export default function Header() {
  return (
    <div className='w-full bg-emerald-500 h-16 sticky pt-3 top-0 z-40'>
          <div class="container max-w-screen-xl mx-auto flex items-center justify-between">
            <div>Logo</div>
            <div class=" flex items-center gap-4">
              <ul class="flex items-center gap-4 list-none">
                <li>Home</li>
                <li>Pages</li>
                <li>Element</li>
                <li>Blog</li>
              </ul>
              <div>
                  Shopping
              </div>  
            </div>
          </div>
    </div>
  )
}

