const Avatar = (props: any) => {
  const { handleAvatar, className = "" } = props;

  const handleClick = () => {
    handleAvatar();
  };

  return (
    <>
      <div className={`${className} avatar online`}>
        <div className="w-24 rounded-full">
          <img
            onClick={handleClick}
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <div className={`${className} avatar offline`}>
        <div className="w-24 rounded-full">
          <img
            onClick={handleClick}
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Avatar;
