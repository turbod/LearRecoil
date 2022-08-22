import React, { useState } from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil'

const darkModeAtom = atom({
  key: 'darkMode',
  default: false,
})

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom)

  return (
    <input type='checkbox' checked={darkMode} onChange={(event) => setDarkMode(event.currentTarget.checked)} />
  )
}

const Button = () => {
  const darkMode = useRecoilValue(darkModeAtom)

  return (<button style={{ backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black' }}>My UI button</button>)
}

export const Atoms = () => {
  return <div>
    <div>
      <DarkModeSwitch />
    </div>
    <div><Button /></div>
    </div>
}