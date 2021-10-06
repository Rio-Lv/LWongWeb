import React, { useState } from "react";
import styled from "styled-components";

function Comp(props) {
  const [loaded, setLoaded] = useState();
  return (
    <div>
      <Image
        style={{
          backgroundImage: `url(${props.url})`,
        }}
      />
      <T>{props.text}</T>
    </div>
  );
}

export default Comp;
const T = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 200px;
`;
const Image = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;
