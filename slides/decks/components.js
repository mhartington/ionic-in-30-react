import React from 'react';
export function FlexLayout(props) {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        padding: '2em',
        zIndex:1,
        justifyContent: props.justify ? props.justify : 'space-evenly',
        flexDirection: props.direction ? props.direction : 'column',
        alignItems: props.alignItems ? props.alignItems : 'initial',
        alignContent: props.alignContent ? props.alignContent : 'initial',
      }}
    >
      {props.children}
    </div>
  );
}
export function BackgroundLayout(props) {
  const styles = {};
  if(props.bgGradient){
    styles.background = props.bgGradient
  }
  return [
    <div
      style={{
        position: 'absolute',
        zIndex: 0,
        opacity: props.opacity ? props.opacity : 1,
        backgroundColor: props.bgColor ? props.bgColor : null,
        backgroundImage: props.bgImg ? `url(${props.bgImg})` : null,
        backgroundRepeat: props.bgRepeat
          ? props.bgRepeat
          : 'no-repeat no-repeat',
        backgroundPosition: props.bgPos ? props.bgPos : 'bottom center',
        backgroundSize: props.bgSize ? props.bgSize : '80%',
        height: '100%',
        width: '100%',
        ...styles
      }}
    ></div>,
    <FlexLayout {...props}>{props.children}</FlexLayout>,
  ];
}
