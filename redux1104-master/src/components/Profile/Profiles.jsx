import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getOneUser} from '../../redux/action'
import {getPostUser} from '../../redux/action'
function Profiles() {
  const {id} = useParams();
  const dispatch = useDispatch()

  // .filter(el => el.id == id)
  // console.log(user)
  useEffect(() => {
    dispatch(getOneUser(id))
    dispatch (getPostUser(id))
  }, [])

    const user = useSelector(state=> state.user)
    const post = useSelector(state=> state.post)
    console.log(post)
  return (
    <div>   
        <div>{user.name}</div>
        <div>{user.email}</div>
        <div>{post?.map((el)=> 
            
              <div>
                {el.id}
                {el.body}
              
              </div>)
             }
      
       </div>
       </div>
      
  )
}

export default Profiles