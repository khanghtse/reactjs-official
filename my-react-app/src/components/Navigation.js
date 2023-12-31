import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div className='navBoard'>
      <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
          <ul className='navClass'>
              <li><a className='active' href='#home'>Home</a></li>
              <li><a className='active' href='#news'>News</a></li>
              <li><a className='active' href='#about'>About</a></li>
              <li><a className='active' href='#contact'>Contact</a></li>
</ul>
          <div style={{position: 'relative'}}>
          <a className='switch-mode' href='#' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }} data-testid="toggle-theme-btn"
        >
          Switch Nav to {!dark ? 'Dark' : 'Light'} mode
         </a>
         </div>
      </nav>
    </div>
  )
}
