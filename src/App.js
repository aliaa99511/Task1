
import React, { useState } from 'react'
import './App.css';
import Child from './components/Child'


function App () {

    const [data,setData] = useState({
        "info": {
            "_postman_id": "19bf1738-2769-48e2-ac75-e2439279e1db",
            "name": "react-task-staging",
            "schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json"
        },
        "item": [
            {
            "name": "Get schools",
            "id": "dbaa957e-2875-43d3-981c-3d744b91a627",
            "request": {
                "method": "GET",
                "header": [
                
                ],
                "url": "https://react-task-api.herokuapp.com/api/schools"
            },
            "response": [
                
            ]
            },
            {
            "name": "Add school",
            "id": "0a76ec1b-175b-4f81-9125-eb9f01124f1e",
            "request": {
                "method": "POST",
                "header": [
                
                ],
                "body": {
                "mode": "raw",
                "raw": "{\n    \"name\": \"School 3\",\n    \"description\": \"School 3\"\n}",
                "options": {
                    "raw": {
                    "language": "json"
                    }
                }
                },
                "url": "https://react-task-api.herokuapp.com/api/schools"
            },
            "response": [
                
            ]
            },
            {
            "name": "Add class",
            "id": "f1997132-9077-4a58-9c26-881b7faeefd3",
            "request": {
                "method": "POST",
                "header": [
                
                ],
                "body": {
                "mode": "raw",
                "raw": "{\n    \"name\": \"Class x\",\n    \"school\": \"61b605e10559dd4a4d5bb0ea\"\n}",
                "options": {
                    "raw": {
                    "language": "json"
                    }
                }
                },
                "url": "https://react-task-api.herokuapp.com/api/classes"
            },
            "response": [
                
            ]
            },
            {
            "name": "Get classes by school Id",
            "id": "0103893d-64dd-4460-b0d3-89596998af9d",
            "protocolProfileBehavior": {
                "disableBodyPruning": true
            },
            "request": {
                "method": "GET",
                "header": [
                
                ],
                "body": {
                "mode": "raw",
                "raw": "{\n    \"schoolId\": \"61b605e10559dd4a4d5bb0ea\"\n}",
                "options": {
                    "raw": {
                    "language": "json"
                    }
                }
                },
                "url": "https://react-task-api.herokuapp.com/api/classes"
            },
            "response": [
                
            ]
            },
            {
            "name": "signup",
            "id": "07f9df45-963e-44bb-869b-1af1e52328f3",
            "request": {
                "method": "POST",
                "header": [
                
                ],
                "body": {
                "mode": "raw",
                "raw": "{\n    \"firstName\": \"Ahmed\",\n    \"lastName\": \"Mohamed\",\n    \"email\": \"ahmed@ahmed.com\",\n    \"password\": \"ahmed\",\n    \"school\": \"61b605920559dd4a4d5bb0e5\",\n    \"class\": \"61b6067de1e54a8e82bdbfa9\"\n}",
                "options": {
                    "raw": {
                    "language": "json"
                    }
                }
                },
                "url": "https://react-task-api.herokuapp.com/api/users/signup"
            },
            "response": [
                
            ]
            },
            {
            "name": "signin",
            "id": "43bb40b5-72cc-457f-bd5a-7eb08a8ff561",
            "request": {
                "method": "POST",
                "header": [
                
                ],
                "body": {
                "mode": "raw",
                "raw": "{\n    \"email\": \"ahmed@ahmed.com\",\n    \"password\": \"ahmed\"\n}",
                "options": {
                    "raw": {
                    "language": "json"
                    }
                }
                },
                "url": "https://react-task-api.herokuapp.com/api/users/signin"
            },
            "response": [
                
            ]
            },
            {
            "name": "check if user exist",
            "id": "de0f7392-b3c8-4be5-bc0d-8df35f5d1d24",
            "protocolProfileBehavior": {
                "disableBodyPruning": true
            },
            "request": {
                "method": "GET",
                "header": [
                
                ],
                "body": {
                "mode": "raw",
                "raw": "{\n    \"email\": \"ahmed@ahmed.com\"\n}",
                "options": {
                    "raw": {
                    "language": "json"
                    }
                }
                },
                "url": "https://react-task-api.herokuapp.com/api/users/check"
            },
            "response": [
                
            ]
            }
        ]
    
    })




  const handleNameChange =(e)=>{
    setData({
      ...data,[e.target.name]:e.target.value
    })
  }




    return (
        <div className="App">
          {data.map((item , index)=>{
            return(
              <div key={item.item.id}>
                <Child
                  name={item.item.name}
                  firstName={item.item.request.raw.firstName}
                  lastName={item.item.request.raw.lastName}
                  email={item.item.request.raw.email}
                  schoolValue={item.item.request.raw.school}
                  classValue={item.item.request.raw.class}
                  password={item.item.request.raw.password}

                  index={index}
                  handleNameChange={handleNameChange}
                />
            </div>
            )
            })}

        </div>

    );
}
export default App;


/*
  const handleNameChange =(name ,index )=>{
    setData((currentData)=>{
      const data = [...currentData];
      data[index] = {...data[index] ,name}
      return data
    })
  }
*/