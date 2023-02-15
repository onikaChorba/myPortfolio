import "./Button.scss";

export const Button = (props) => {
  return (
    <div className="button">
      <span className="button__text">{props.text}</span>
    </div>
  );
};
