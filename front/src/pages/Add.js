import React from 'react'

const Add = () => {
  return (
    <div>
      <h2>Add Note</h2>
      <div className="card">
      <form>
        <input
        type="text"
        placeholder='Title'
        />
        <textarea
        cols="20"
        rows="7"
        placeholder='Content'
        />
      </form>
    </div>
    </div>
  )
}

export default Add