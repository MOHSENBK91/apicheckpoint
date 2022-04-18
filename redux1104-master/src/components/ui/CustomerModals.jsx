import {Modal,Button} from 'react-bootstrap'
import {useState} from 'react'
import CustomInput from './Input'
import { useDispatch,useSelector } from 'react-redux';
import {addNewUser} from '../../redux/action'
export default function CustomerModals() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const users = useSelector(state => state.users).length
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [street,setStreet] = useState('')
    const [suite,setSuite] = useState('')
    const [city,setCity] = useState('')
    const [zipCode,setZipCode] = useState('')
    const [lat,setLat] = useState('')
    const [lng,setLng] = useState('')
    const addUser = () =>{
        dispatch(addNewUser({id:users+1,name,email,address:{street,suite,city,zipCode,geo:{lat,lng}}}))
        // handleClose()
    }
    return (
      <>
        <span className='btn' variant="primary" onClick={handleShow}>
          Launch demo modal
        </span>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <CustomInput placeholder='name' onchange={e=> setName(e.target.value)} />
              <CustomInput placeholder='email' onchange={e=> setEmail(e.target.value)} />
              <div>
                  <label>Adress</label>
              <CustomInput placeholder='street' onchange={e=> setStreet(e.target.value)} />
              <CustomInput placeholder='suite' onchange={e=> setSuite(e.target.value)} />
              <CustomInput placeholder='city' onchange={e=> setCity(e.target.value)} />
              <CustomInput placeholder='zipcode' onchange={e=> setZipCode(e.target.value)} />
              <div>
                  <label>Geo</label>
                  <CustomInput placeholder='Lat' onchange={e=> setLat(e.target.value)} />
                    <CustomInput placeholder='Lng' onchange={e=> setLng(e.target.value)} />
              </div>
              </div>
             
            
              
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => addUser()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 