import React from "react"
import styled from "styled-components"

const Marker = ({ text, ...props}) => <Wrapper alt={text} {...props}/>

Marker.defaultProps = {
  onClick: null,
}

export default Marker

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: ${ props => props.isActive ? 'orangered' : 'red' };
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${props => (props.onClick ? "pointer" : "default")};
  &:hover {
    z-index: 1;
  }

`
