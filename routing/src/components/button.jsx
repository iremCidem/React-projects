import classNames from "classnames";

const Button = ({ children, rounded, primary, handleClick, ...rest }) => {
  const classes = classNames(rest.className, "px-3 py-2 border", {
    "rounded-full": rounded,
    "bg-slate-500": primary,
  });
  return (
    <div>
      <button className={classes} onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
