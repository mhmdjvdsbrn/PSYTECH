import React, { Component } from 'react';
import PatientCard from './PatientCard';
import { useState, useEffect } from "react";
function PatientsList() {
  const [drList, setDrList] = useState([]);
  const [url, setUrl] = useState("http://localhost:3001/list");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setDrList(json));
  }, [url]);
  
  const DrArr_lenght = drList.length;
  console.log(DrArr_lenght);
  const [isShowMore, setIsShowMore] = useState(true);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  const numberOfItems = !isShowMore ? drList.length : 10;
  numberOfItems < 10 && setIsShowMore(!isShowMore);

    return (
      <>
      <div className="container patient-list">
          <div>
            {drList.slice(0, numberOfItems).map((item) => {
              return (   
                  <PatientCard
                    data={{
                      image: item.picture,
                      name: item.name,
                    }}
                  />
            
              );
            })}
          </div>
       
      </div>
      <div>
        {isShowMore && (
          <button onClick={toggleReadMoreLess} className="showAllDrBtn">
            <span className="showAllDrBtn__show_all">
              {isShowMore && "بیشتر"}
            </span>
          </button>
        )}
      </div>
      </>
    );
  }

export default PatientsList;