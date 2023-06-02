import React from "react";
import "./Cards.css";
import IMG1 from "../assets/graph.svg";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate()
  return (
    <div className="w-80 m-4 md:m-10 flex flex-col p-5 text-white rounded-xl hover:scale-125 transition bg-pink-200">
      <div className="">
        <img src={IMG1} />
      </div>

      <div className="flex flex-col mt-5">
        <h3 className="text-3xl text-cyan-500">{props.child.name}</h3>

        <button onClick={() => {navigate(`/child/${props.child.id}`)}} className="mt-5 hover:bg-cyan-500 transition w-full !mx-0">View Profile</button>
      </div>
    </div>
  );
}

export default Card;
