import React from 'react'

function Person({user}) {
  return (
    <div className='card'>
   <img src="data:image/jpeg;base64,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" alt="" />

<h1>{user.name}</h1>
<p>{user.email}</p>
<ul>
    <li>
    {user.address.city}
    </li>
    <li>
    {user.address.suite}
    </li>
    <li>
    {user.address.zipcode}
    </li>

</ul>
    </div>
  )
}

export default Person