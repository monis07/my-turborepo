"use client";

export const Button = () => {
  return (
    <button style={{width:"80px",height:"30px"}}
      onClick={() => alert(`Hello from your button component!`)}
    >
      Hello Button
    </button>
  );
};

