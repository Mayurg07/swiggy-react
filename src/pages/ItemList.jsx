import React from 'react'
import '../styles/ItemList.css'
import pizza from '../assets/images/pizza-img.jpeg'

const ItemList = () => {
  return (
    <div className="meal">
        <div className="title">
            <div className="heading">
                <h2>What's on your mind?</h2>
            </div>
            <div className="arrows">
                <div class="arrow-left">
                    <span><i class="ri-arrow-left-line"></i></span>
                </div>
                <div class="arrow-right">
                    <span><i class="ri-arrow-right-line"></i></span>
                </div>
            </div>
        </div>

        <div className="item-list">
            <div className="item-info">
                <div className="item-img">
                    <img src={pizza} alt="" />
                </div>
                <div className="item-name">Pizza</div>
            </div>

            <div className="item-info">
                <div className="item-img">
                    <img src={pizza} alt="" />
                </div>
                <div className="item-name">Pizza</div>
            </div>

            <div className="item-info">
                <div className="item-img">
                    <img src={pizza} alt="" />
                </div>
                <div className="item-name">Pizza</div>
            </div>

            <div className="item-info">
                <div className="item-img">
                    <img src={pizza} alt="" />
                </div>
                <div className="item-name">Pizza</div>
            </div>

            <div className="item-info">
                <div className="item-img">
                    <img src={pizza} alt="" />
                </div>
                <div className="item-name">Pizza</div>
            </div>

            <div className="item-info">
                <div className="item-img">
                    <img src={pizza} alt="" />
                </div>
                <div className="item-name">Pizza</div>
            </div>
            
            <div className="item-info">
                <div className="item-img">
                    <img src={pizza} alt="" />
                </div>
                <div className="item-name">Pizza</div>
            </div>
        </div>
        <hr className="border" />
    </div>
    
  )
}

export default ItemList;
