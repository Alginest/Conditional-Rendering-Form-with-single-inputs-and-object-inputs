import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button className='btn' onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show && <Item />}
    </div>
  )
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)

  const setWidth = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', setWidth)
    return () => {
      window.removeEventListener('resize', setWidth)
    }
  }, [])
  return (
    <div style={{ marginTop: '200px' }}>
      <h1>Window width</h1>
      <h2>size: {size} px</h2>
    </div>
  )
}
export default ShowHide
