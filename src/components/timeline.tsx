const Timeline = (props: any) => {
  const { items = [], className = "" } = props;

  return (
    <ul
      className={`${className} timeline timeline-vertical lg:timeline-horizontal`}
    >
      {items.map((item: any, index: any) => {
        const isLast = items.length - 1 === index;
        const isFirst = index === 0;

        return (
          <li>
            {!isFirst && <hr />}
            <div className="text-black timeline-start">{item.year}</div>
            <div className="text-black timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  className=" text-black"
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-black timeline-end timeline-box">
              {item.description}
            </div>
            {!isLast && <hr />}
          </li>
        );
      })}
    </ul>
  );
};

export default Timeline;
