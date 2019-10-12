import React from 'react';
import './custom-button.styles.scss';
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherprops
}) => (
  /*
  value=x ?'xx':''
value+= y?' yy':''
*/
  <button className={
    isGoogleSignIn ? 'google-sign-in custom-button':'custom-button' +
    inverted?'inverted custom-button':'custom-button' 
    }



     {...otherprops}>
    {children}
  </button>
)

export default CustomButton;