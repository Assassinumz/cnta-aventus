import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Cards";
import Footer from './Footer';

import { useNavigate } from "react-router-dom";

import instance from '../Request'

function AfterLogin() {

  const [childs, setChilds] = useState([])
  const [error, setError] = useState()
  const [user, setUser] = useState()

  const navigate = useNavigate()

  const apiCall = async () => {
    if(!user) {
      return
    }
    try {
      let result = await instance.request({
        url:'child/',
        method: 'get',
        headers: {
          'Authorization': `Bearer ${user}`
        },
        data: {
        },
      })
  
      setChilds(result.data)

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
    apiCall()
  }, [user])

  return (
    <>
    <div className="relative">
      <Navbar />

      <div className="absolute bottom-0 right-0">
        <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1013%26quot%3b)' fill='none'%3e%3cpath d='M643.8 656.62C771.8 581.45 700.92 147.04 937.99 140.84 1175.07 134.64 1373.41 307.21 1526.38 308.84' stroke='rgba(255%2c 4%2c 207%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M493.67 614.92C672.83 587.4 771 158.7 1056.61 158 1342.22 157.3 1464.32 414.81 1619.55 421.2' stroke='rgba(255%2c 4%2c 207%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M338.18 609.2C462.01 601.81 552.52 373.94 774.68 373.21 996.83 372.48 992.92 443.21 1211.17 443.21 1429.42 443.21 1537.15 373.43 1647.67 373.21' stroke='rgba(255%2c 4%2c 207%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M231.11 606.3C393.48 603.89 524.64 412.88 849.62 407.95 1174.6 403.02 1305.52 208.87 1468.13 206.35' stroke='rgba(255%2c 4%2c 207%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M762.48 628.82C873.3 584.1 794.49 265.82 1045.09 243.28 1295.69 220.74 1463.67 87.92 1610.3 86.48' stroke='rgba(255%2c 4%2c 207%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1013'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e" />
      </div>

      <div className="absolute top-0 left-0">
        <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1011%26quot%3b)' fill='none'%3e%3cpath d='M1212.01-7.38C1030.91-0.36 901.11 287.6 552.61 293.83 204.1 300.06 62.33 444.07-106.8 445.03' stroke='rgba(6%2c 182%2c 212%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1215.49-103.61C1105.47-101.29 1009.68 46.99 801.9 47.09 594.12 47.19 595.11-22.91 388.31-22.91 181.52-22.91 79.59 46.84-25.28 47.09' stroke='rgba(6%2c 182%2c 212%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1048.93-34.61C845.44 1.85 744.47 508.01 426.18 509.46 107.88 510.91-26 235.8-196.58 229.46' stroke='rgba(6%2c 182%2c 212%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1211.81-81.47C1013.05-70.33 863.26 289.34 507.4 289.86 151.55 290.38-15.96 123.02-197 121.86' stroke='rgba(6%2c 182%2c 212%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M891.39-88.75C772.89-68.7 830.34 208.57 525.05 222.55 219.76 236.53-16.1 444.07-207.62 446.55' stroke='rgba(6%2c 182%2c 212%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1011'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e" />
      </div>

      <div className="pt-28 flex justify-center items-start px-10 relative z-20">
        <h1 className="text-6xl my-auto font-bold">All Profiles</h1>
      </div>
      
      <div className="w-full flex flex-wrap mt-10 px-10 h-screen items-start justify-center md:justify-start relative z-20">
        
        {
          childs.length > 0 ? childs.map((item, key) => {
            return (
              <Card key={key} child={item} />
            )
          }) :
          <div className="flex flex-col items-center w-full">
            <h1 className="text-5xl my-auto mx-auto">No profiles found.</h1>
            <button className="bg-cyan-500 px-10 py-4 mt-10">Add Profile</button>
          </div>
        }

        
      </div>
      
      
    </div>
    <Footer />
    </>
  );
}

export default AfterLogin;
