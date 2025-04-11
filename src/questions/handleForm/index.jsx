import React, { useState } from 'react'

const index = () => {
const [formData , setFormData] = useState({name: '', email:''});

const handleSubmit = (e) => {
    e.preventDefault();
}

const handleOnChange = (e) => {
const {item, value} = e.target;
setFormData({...formData, [item] : value})
}
  return (
<>
<form onSubmit={handleSubmit}>

<label>
    Name:
    <input type="text" value={formData.name} name='name' onChange={handleOnChange} />
</label>


<label>
    Name:
    <input type="email" value={formData.email} name='email' onChange={handleOnChange} />
</label>

</form>



</>
  )
}

export default index
