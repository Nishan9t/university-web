import React from 'react'

export default function addStudent() {
  return (
    <div>
        <h1 className="text-center">Add Student</h1><br/>
        <input type='text'>name</input>
        <input type='number'>roll no</input>
        <button class="btn btn-primary" >Add</button>
    </div>
  )
}
