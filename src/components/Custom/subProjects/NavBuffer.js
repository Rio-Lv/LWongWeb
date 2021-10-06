import React, { useState, useEffect } from "react";

function NavBuffer(props) {
  const [pad, setPad] = useState(props.pad);
  const wheel = (e) => {
    if (e.deltaY < 0) {
      setPad(props.pad);
    } else if (e.deltaY > 0) {
      setPad(0);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", wheel);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: `${pad}px`,
        transition: `${props.transition}s`,
        // backgroundColor: "red",
      }}
    ></div>
  );
}

export default NavBuffer;
