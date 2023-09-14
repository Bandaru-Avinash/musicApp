const EnrolmentsContainer = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-base text-colours-text-light-secondary font-text-body-caption">
      <div className="self-stretch flex flex-row items-center justify-between">
        <b className="relative tracking-[0.4px] uppercase">Latest Enrolments</b>
        <div className="relative text-sm text-colours-secondary-800">
          View All Courses
        </div>
      </div>
      <div className="self-stretch rounded-md bg-colours-background-panel flex flex-col p-6 items-start justify-start text-sm text-colours-text-light-primary">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row pt-2 px-0 pb-4 items-start justify-between border-b-[1px] border-solid border-colours-gray-300">
            <b className="relative">Enr. No</b>
            <b className="relative">S. Name</b>
            <b className="relative">C. Name</b>
            <b className="relative">Fees</b>
            <b className="relative">Enr. Date</b>
          </div>
          <div className="self-stretch flex flex-col py-1 px-0 items-start justify-start">
            <div className="self-stretch flex flex-row py-2 px-0 items-start justify-between border-b-[1px] border-solid border-colours-gray-200">
              <div className="relative">1563124</div>
              <div className="relative">John Doe</div>
              <div className="relative">Percussion</div>
              <div className="relative">$120</div>
              <div className="relative">12-08-223</div>
            </div>
            <div className="self-stretch flex flex-row py-2 px-0 items-start justify-between border-b-[1px] border-solid border-colours-gray-200">
              <div className="relative">column</div>
              <div className="relative">column</div>
              <div className="relative">column</div>
              <div className="relative">column</div>
              <div className="relative">column</div>
            </div>
            <div className="self-stretch flex flex-row py-2 px-0 items-start justify-between border-b-[1px] border-solid border-colours-gray-200">
              <div className="relative">column</div>
              <div className="relative">column</div>
              <div className="relative">column</div>
              <div className="relative">column</div>
              <div className="relative">column</div>
            </div>
            <div className="self-stretch flex flex-row py-2 px-0 items-start justify-between border-b-[1px] border-solid border-colours-gray-200">
              <div className="relative">column</div>
              <div className="relative">column</div>
              <div className="relative">column</div>
              <div className="relative">column</div>
              <div className="relative">column</div>
            </div>
            <div className="self-stretch flex flex-row py-2 px-0 items-start justify-between border-b-[1px] border-solid border-colours-gray-200">
              <div className="relative">column</div>
              <div className="relative">column</div>
              <div className="relative">column</div>
              <div className="relative">column</div>
              <div className="relative">column</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrolmentsContainer;
