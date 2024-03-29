import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Icons} from "../../source/icons/Icons";
import "./finOrders.scss"
import {useCartContext} from "../../CartContext";

function FinOrders (){
  const {finOrders,active1, setActive1, songsData, setSongsData} = useCartContext()
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  
  
  
  function OpenOrder (el){
    setActive1(el)
  }
  
  function SetSongs (){
    setSongsData(active1)
  }
  
  return(
     <div className="OrdersList G-container">
       <div className="headerBlock G-flex-center G-alignItems-center">
         <div onClick={goBack} className="backButton">
           <img src={Icons.arrowLeft} alt=""/>
         </div>
         <p className="header">ОБРАБОТАННЫЕ  <span>ЗАЯВКИ</span></p>
       </div>
       
       <div className="main">
         <div className="listBlock">
           {finOrders.map((ell, index)=>{
             return(
                <div  key={index} onClick={()=>{
                  OpenOrder(ell)
                }} className={`LinkToOrder ${active1 === ell ? "active" : ""}`}>
                  <img src={Icons.whiteMark} alt=""/>
                  <p className="name">{ell.nameAsClient}</p>
         
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M2 2L23.5 23.5M23.5 23.5V2M23.5 23.5H2" stroke="#DC1989" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
             )
           })}
         </div>
         
         <div className="source">
            <div className="nameText block">
              <p className="name">{active1.nameAsClient}</p>
              <p className="prg">{active1.comment}</p>
            </div>
           
           <div className="data block"><span>Дата:</span>{active1.date[2] < 10 ? `0${active1.date[2]}`: active1.date[2]}.{active1.date[1] < 10 ? `0${active1.date[1]}` : active1.date[1]}.{active1.date[0]}</div>
           <div className="time block"><span>Время:</span>{active1.date[3]}:{active1.date[4]}</div>
           
           <div className="price block"><span>Цена:</span>{active1.price}</div>
           <Link to="/songs" onClick={SetSongs} className="songs G-block block"><span>Песни:</span>{active1.songs.length}</Link>
           
           <div className="number block"><span>Номер:</span>{active1.phoneNumber}</div>
           
           <div className="delete G-block block">УДАЛИТЬ ЗАКАЗ</div>
           <div className="submit">ЗАПИСАТЬ</div>
           
         </div>
         
       </div>
       
       
       
       
     </div>
  )
}

export default FinOrders