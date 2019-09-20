import React , { useState } from "react";
import Tweet from "./Tweet"

function App() {
  const [users, setUsers] = useState([
    { name: 'Omer', message: 'This is Omer' , likes: 72},
    { name: 'Osama', message: 'This is Osama', likes: 122 },
    { name: 'Alveera', message: 'This is Alveera', likes:123 }
  ]);
  
  return (
    <div className="app">
      {users.map(user => (
        <Tweet name = {user.name} message = {user.message} likes = {user.likes}/>

      ))}
    </div>
  );
}

export default App;