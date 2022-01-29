import React from "react";

const CardMenu = ({dataImg, dataJudul}) => {
    return (
    <div className='content-menu'>
        <div className="container-menu p-2">
          <div className="card-menu">
            <div className="imgBx-menu">
              <img alt="Menu" src={dataImg} />
            </div>
            <div className="contentBx-menu">
              <div className='pb-2 judul-menu'>{dataJudul}</div>
              <div className='buy-menu'>Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CardMenu