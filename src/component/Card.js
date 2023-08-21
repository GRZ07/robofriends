/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import './Card.css'

const Card = ({name, email, id}) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc hi">
            <img src={`https://robohash.org/${id} `} alt="Jo" />
            <div>
                <h2>{name}</h2>
                <pre>{email}</pre>
            </div>
        </div>
    )
}
export default Card;