import type { UserType } from "./Types/type"
import type { Error } from "./Types/error"
import { useEffect, useState } from 'react'
import { Header } from './component/Header'
import { Users } from './component/Users'
import { Modal } from './component/Modal'



function App() {
  const [searchValue,setSearchValue]=useState('')

  const [error,setError]=useState<Error>({
    firstname:'',
    lastName:'',
    description:'',
    image:''
  })
  const [modalIsOpen,setmodalIsOpen]=useState(false)

  const [users,setUsers]= useState<UserType[]>(()=>{
    const saved=localStorage.getItem('users');

    if(saved){
      return JSON.parse(saved)
    }
    return[]
  })

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

  useEffect(()=>{
    localStorage.setItem('users',JSON.stringify(users))
  },[users])
  
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
      <Header toggleModal={toggleModal}  search={searchValue} setsearch={setSearchValue}/>  
      <Users deleteUser={deleteUser} toggleStatus={toggleStatus} users={users} search={searchValue}/> 
      <Modal modalIsOpen={modalIsOpen} toggleModal={toggleModal}  error={error}  addUser={addUser}/>   
    </>
  )
} 

export default App
