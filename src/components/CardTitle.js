import React from 'react'
import './CardTitle.scss'

export default function CardTitle({name, mail}) {
  return (
    <div class="card">
        <h2>Profile</h2>
        <p>Full Name: <span>{name}</span></p>
        <p>Email: <span>{mail}</span></p>
    </div>
  )
}
