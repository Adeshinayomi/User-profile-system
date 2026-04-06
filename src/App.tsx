import type { UserType } from "./Types/type"
import type { Error } from "./Types/error"
import { useEffect, useState } from 'react'
import { Header } from './component/Header'
import { Users } from './component/Users'
import { Modal } from './component/Modal'
import firstImage from './assets/images/first-image.jpg'
import secondImage from './assets/images/second-image.jpg'
import fourthImage from './assets/images/fourth-image.jpg'
import fifthImage from './assets/images/fifth-image.jpg'


function App() {
  const [error,setError]=useState<Error>({
    firstname:'',
    lastName:'',
    description:'',
    image:''
  })
  const [modalIsOpen,setmodalIsOpen]=useState(false)

  const [users,setUsers]= useState<UserType[]>([{
      id:1,
      image:firstImage,
      firstName:'Sophie',
      lastName:'Bennette',
      description:'Product designer focused on simplicity',
      isOnline:true
  },
  {
    id:2,
    image:secondImage,
    firstName:'Benjamin',
    lastName:'Franklin',
    description:'Product designer focused on simplicity',
    isOnline:true
  },
  {
    id:3,
    image:fourthImage,
    firstName:'Christopher',
    lastName:'Mary',    
    description:'Product designer focused on simplicity',
    isOnline:true
  },
  {
    id:4,
    image:fifthImage,
    firstName:'John ',
    lastName:'Clarke',
    description:'Product designer focused on simplicity',
    isOnline:true
  }])

  function toggleModal():void{
    setmodalIsOpen(prev=>!prev)
  }

  function addUser(user: UserType): void {
    const newErrors: Error = {
      firstname: '',
      lastName: '',
      description: '',
      image: '',
    };

    if (!user.firstName) {
      newErrors.firstname = 'Please input first name';
    }

    if (!user.lastName) {
      newErrors.lastName = 'Please input last name';
    }

    if (!user.description) {
      newErrors.description = 'Please input description';
    }

    if (!user.image) {
      newErrors.image = 'Please select image';
    }


    const hasError = Object.values(newErrors).some(err => err !== '');

    if (hasError) {
      setError(newErrors);
      return;
    }

    setUsers(prev => [...prev, user]);

    setError({
      firstname: '',
      lastName: '',
      description: '',
      image: '',
    });

    toggleModal();
  }

  function deleteUser(id:number):void{
    const newUsers=users.filter((user)=>{
      return user.id !== id
    }) 
    setUsers(newUsers)
  }
  function toggleStatus(id:number){
    setUsers(prev =>
      prev.map(user =>
        user.id === id
          ? { ...user, isOnline: !user.isOnline }
          : user
      )
    );

  }

  return (
    <>
      <Header toggleModal={toggleModal}/>  
      <Users users={users} deleteUser={deleteUser} toggleStatus={toggleStatus}/> 
      <Modal modalIsOpen={modalIsOpen} toggleModal={toggleModal} error={error}  addUser={addUser}/>   
    </>
  )
} 

export default App
