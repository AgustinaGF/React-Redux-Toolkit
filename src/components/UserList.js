import React from 'react'

export default function UserList() {
  const users = [
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
      "id": 9,
      "email": "tobias.funke@reqres.in",
      "first_name": "Tobias",
      "last_name": "Funke",
      "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
      "id": 10,
      "email": "byron.fields@reqres.in",
      "first_name": "Byron",
      "last_name": "Fields",
      "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
  ]
  return (
    <div className='container'>
      <div className='row'>
        {users.map((user, index)=>(
          <div key={index} className='col-md-3'> 
          <div className='card'>
            <img src={user.avatar} alt="avatar"/>
            <div className='card-body'> 
            <h5 className='card-title'>{`${user.first_name} ${user.last_name}`}</h5>
            <p className='card-text'>{user.email}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}
