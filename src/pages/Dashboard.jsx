import React from 'react'
import { auth, onAuthStateChanged } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    onAuthStateChanged(auth, (user) => {

        if (user) {
        console.log("getting data from firestore .....wait.....")
          // const uid = user.uid;
         
        }
        else(    navigate("/"))
      });
console.log(auth)
  return (
    <div>Dashboard
   <h1> majid</h1>
    </div>
  )
}

export default Dashboard