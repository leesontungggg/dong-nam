const Toast = (props: any) => {
  const { className, text } = props;

  return (
    <div className={`${className} toast toast-top toast-center`}>
      <div className={`${className} alert alert-info`}>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Toast;
