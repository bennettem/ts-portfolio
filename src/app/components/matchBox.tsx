const MatchBox = () => {
  //   return <div className="w-32 h-16 bg-blue-500"></div>;

  return (
    // <div className="flex flex-row w-1/4 h-16 justify-center items-center relative">
    //   <div className="absolute top-0 w-2/3 h-1/2 bg-green-300 transform skew-x-12 -skew-y-12"></div>
    //   <div className="absolute bottom-0 w-2/3 h-1/2 bg-indigo-500 transform -skew-x-12"></div>
    //   <div className="absolute left-0 w-2/3 h-1/2 bg-indigo-200 transform -skew-x-12"></div>
    // </div>

    <div className="container">
      <div className="box">
        <div className="box-front side">
          <span className="inner">
            <span className="diamond"></span>
          </span>
        </div>
        <div className="box-side side">
          <span className="inner-side"></span>
        </div>
        <div className="box-bottom side"></div>
      </div>
    </div>
  );
};

export default MatchBox;
