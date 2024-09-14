"use client";

export const Button = () => {
  return (
    <button style={{width:"100px",height:"30px",background:"black",borderRadius:"12px",color:"white"}}
      onClick={() => alert(`Hello from your button component!`)}
    >
      Demo Button
    </button>
  );
};

