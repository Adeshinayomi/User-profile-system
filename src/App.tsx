import { useState } from 'react'
import { Header } from './component/Header'
import { Users } from './component/Users'
import { Modal } from './component/Modal'
import firstImage from './assets/images/first-image.jpg'
import secondImage from './assets/images/second-image.jpg'
import fourthImage from './assets/images/fourth-image.jpg'
import fifthImage from './assets/images/fifth-image.jpg'


function App() {

  const [modalIsOpen,setmodalIsOpen]=useState(false)

  function toggleModal():void{
    if(modalIsOpen){
      setmodalIsOpen(false)
    }else{
      setmodalIsOpen(true)
    }
  }

  type User={
    image:string,
    name:string,
    description:string,
    isOnline:boolean
  }

  const [users,setUsers]= useState<User[]>([{
      image:firstImage,
      name:'Sophie Bennette',
      description:'Product designer focused on simplicity',
      isOnline:true
  },
  {
    image:secondImage,
    name:'Benjamin Franklin',
    description:'Product designer focused on simplicity',
    isOnline:true
  },
  {
    image:fourthImage,
    name:'Christopher Mary',
    description:'Product designer focused on simplicity',
    isOnline:true
  },
  {
    image:fifthImage,
    name:'John Clarke',
    description:'Product designer focused on simplicity',
    isOnline:true
  }])

  function addUser(user:User):void{
    if(user.name !== '' && user.image !== '' && user.description !== ''){
      setUsers([...users,
        user]
      )
    }
  }

  return (
    <>
      <Header toggleModal={toggleModal}/>  
      <Users users={users} /> 
      <Modal modalIsOpen={modalIsOpen} toggleModal={toggleModal}  addUser={addUser}/>   
    </>
  )
}

export default App
