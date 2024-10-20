import React from 'react'

export default function Watch({watch}) {
  return (
    <div>
        <h3>Watch Name:{watch.name}</h3>
        <p>Price: {watch.price}</p>
    </div>
  )
}
