import React from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'

function Input({onchange,placeholder}) {
  return (
    <div>
    <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">{placeholder}</InputGroup.Text>
    <FormControl
      placeholder={placeholder}
      aria-label={placeholder}
      onChange={onchange}
      aria-describedby="basic-addon1"
    />
  </InputGroup>
    </div>
  )
}

export default Input