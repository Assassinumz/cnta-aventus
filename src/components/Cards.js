import {useState, useEffect} from "react";
import "./Cards.css";
import IMG1 from "../assets/boy.png";
import { useNavigate } from "react-router-dom";
import instance from '../Request'

function Card(props) {
  const navigate = useNavigate()
  const [diagnosis, setDiagnosis] = useState()
  const [error, setError] = useState()
  const [user, setUser] = useState()


  const getChild = async () => {
    try {
      let result = await instance.request({
        url:`child/${props.child.id}`,
        method: 'get',
        headers: {
          'Authorization': `Bearer ${user}`
        },
        data: {
        },
      })


      setDiagnosis(result.data.diagnosis)


    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        setError(error.response.data.errors)
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  }

  useEffect(() => {
    let x = localStorage.getItem('access')
    if(x=== null) {
      navigate('/login')
    }
    setUser(x)
  }, [])

  useEffect(() => {
    getChild()
  }, [])

  return (
    <div className={`w-80 m-4 md:m-10 flex flex-col p-5 text-white rounded-xl hover:scale-125 transition bg-zinc-800/70 backdrop-blur-sm border-2 border-zinc-900 shadow-2xl`}>
      <div className="w-11/12 flex justify-center mx-auto">
        <img src={IMG1} />
      </div>

      <div className="flex flex-col mt-5">
        <h3 className={`text-3xl  ${diagnosis === 'Normal' ? 'text-green-400' : diagnosis === 'Moderate Malnutrition' ? 'text-yellow-400' : 'text-red-500'}`}>{props.child.name}</h3>

        <button onClick={() => {navigate(`/child/${props.child.id}`)}} className={`mt-5 bg-cyan-500  transition w-full !mx-0`}>View Profile</button>
      </div>
    </div>
  );
}

export default Card;
