import React from 'react';
import './Menu-item.styles.scss';
const MenuItem = ({
  title,imageUrl,id,size
}) => (
  <div className={size + " menu-item"} style={
    {
      // {imageUrl=imageUrl}
      backgroundImage:"url(" + imageUrl + ")"//href={"#demo" + this.state.id}
    }}>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='sub-title'>SHOP NOW</span>
    </div>
  </div>

)
export default MenuItem;
