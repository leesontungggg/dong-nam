const Toast = (props: any) => {
  const { className = "", text, variant = "info" } = props;

  return (
    <div className={`${className} toast toast-top toast-center`}>
      <div className={`alert alert-${variant}`}>
        <span className="text-black">{text}</span>
      </div>
    </div>
  );
};

export default Toast;
