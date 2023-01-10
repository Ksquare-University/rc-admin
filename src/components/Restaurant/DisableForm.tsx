import React,{useState} from "react";
import { InformationForm } from "./InformationForm";
import './DisableForm.css'

export const DisableForm = () =>{

    return(
        <div className="disableContainer">
            <div className="restauranteAvility">
                Enable/Disable
            </div>
            <div className="restauranteState">
                Open/Close
            </div>

        <div className="disableButtons">
            <button className="cancelButton"> Cancel </button>
    
            <button className="doneButton"> Done </button>
        </div>

        </div>
    );
}