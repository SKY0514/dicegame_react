import "./assets/css/Button.css";

function Button({ children, onClick, color }) {
  const btnStyle = ["Button", color, "App-button"].join(" ");

  return (
    <button className={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
