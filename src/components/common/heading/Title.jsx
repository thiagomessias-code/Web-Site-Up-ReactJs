import React from 'react'
import '../hero/style'
export default function Title(props) {
  return (
    <>
    <div id='heading'>
      <h3>{props.subtitle} </h3>
      <h1>{props.title} </h1>
    </div>
  </>
  )
}
