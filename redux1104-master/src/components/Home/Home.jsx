import React from 'react'
import Users from '../ui/Cards/CustomCards'
import {useSelector} from 'react-redux'
import {Row,Col} from 'react-bootstrap'
function Home() {
  const users = useSelector(state => state.users)
  return (
    <div>
     
      <Row xs={3} md={4} className="g-4">
      {users?.map(user => 
            <Col> 
              <Users user={user} /> 
            </Col>
      )}
        </Row>
    </div>
  )
}

export default Home