import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  // if (isError) {
  //   return <h2>Error success</h2>
  // }
  return (
    <section>
      <h1>{text || 'Aldin'}</h1>
      <h2>{!text && <h3>America</h3>}</h2>
      <button className='btn' onMouseOver={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && (
        <div className='sidebar'>
          <h4>SideBar</h4>
          <ul>
            <li className='item'>Twitter</li>
            <li className='item'>Facebook</li>
            <li className='item'>Instagram</li>
          </ul>
        </div>
      )}
      {isError ? <p>Sidebar Open.</p> : <p>Sidebar Hidden</p>}
    </section>
  )
}

export default ShortCircuit
