// import { useQuery } from 'react-query'
import { useMutation } from 'react-query'
import './App.css'
// import { useEffect } from 'react';

function App() {

//   //! https://jsonplaceholder.org/posts     ----> GET method
//   const fetchData = useQuery(["posts"], () => {
//     return fetch('https://jsonplaceholder.org/posts')
//       .then(response => response.json());
//   },{
//     enabled: false
//   }
// );

// const{data, isLoading, refetch} = fetchData

//   console.log(data, isLoading, "fetch data")

//   if (isLoading) {
//     return <div>Loading.....</div>
//   }






//! https://jsonplaceholder.org/users     ----> POST method

const {data, reset, mutate, isLoading} = useMutation(["users"], (newPost) => {
  return fetch('https://jsonplaceholder.org/users', {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      'Content-type' : 'application/json; charset=UTF-8'
    }
  }).then(response => response.json());
})

if(isLoading){
  return <div>LOADING.....</div>
}

console.log(data, "Mutate Data")


  return (

    <div>
     {/* <button onClick={() => refetch()}>Datalari cek</button> */}
     <button onClick={() => mutate({title: "deneme", body: "DenemeBody", userId: 1})}>ADD data</button>
     <button onClick={() => reset()}>Reset data</button>
      <div>
        {/* {
          data && data.map((item, i) => (
            <div key={i}>
              {item.title}
            </div>
          ))
        } */}
      </div>
    </div>

  )
}

export default App
