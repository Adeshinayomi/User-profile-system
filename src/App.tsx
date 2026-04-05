import { Header } from './component/Header'
import { Users } from './component/Users'
import { Modal } from './component/Modal'
import firstImage from './assets/images/first-image.jpg'
import secondImage from './assets/images/second-image.jpg'
import fourthImage from './assets/images/fourth-image.jpg'
import fifthImage from './assets/images/fifth-image.jpg'


type User={
    image:string,
    name:string,
    description:string,
    isOnline:boolean
}
const users:User[]=[{
    image:firstImage,
    name:'Sophie Bennette',
    description:'Product designer focused on simplicity',
    isOnline:true
},{
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
}]

function App() {
  
  return (
    <>
      <Header />  
      <Users users={users}/> 
      <Modal />   
    </>
  )
}

export default App
