const Carousel = (props: any) => {
  const { img = [], className = "" } = props;

  return (
    <>
      <div className={`${className} carousel rounded-box`}>
        {img.map((img: any) => (
          <div className="carousel-item">
            <img src={img.url} alt={img.alt} />
          </div>
        ))}
      </div>
    </>
  );
};
export default Carousel;
