const Avatar = ({ handleAvatar }: any) => {
  const handleClick = () => {
    handleAvatar();
  };
  return (
    <>
      <div className="avatar online ">
        <div className="w-24 rounded-full">
          <img
            onClick={handleClick}
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <div className="avatar offline ">
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
