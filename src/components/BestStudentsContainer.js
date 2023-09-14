const BestStudentsContainer = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-base text-colours-text-light-secondary font-text-body-caption">
      <div className="self-stretch flex flex-row items-center justify-between">
        <b className="relative tracking-[0.4px] uppercase">Best Students</b>
        <div className="relative text-sm text-colours-secondary-800">
          View All Students
        </div>
      </div>
      <div className="self-stretch rounded-md bg-colours-background-panel flex flex-col p-6 items-start justify-start text-sm text-colours-text-light-primary">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row pt-2 px-0 pb-4 items-start justify-between border-b-[1px] border-solid border-colours-gray-300">
            <b className="relative">Reg. No</b>
            <b className="relative">F. Name</b>
            <b className="relative">L. Name</b>
            <b className="relative">Course #</b>
            <b className="relative">Total Fees</b>
            <b className="relative">Reg. Date</b>
          </div>
          <div className="self-stretch flex flex-col py-1 px-0 items-start justify-start">
            <div className="self-stretch flex flex-row py-2 px-0 items-start justify-between border-b-[1px] border-solid border-colours-gray-200">
              <div className="relative">43422</div>
              <div className="relative">John</div>
              <div className="relative">Doe</div>
              <div className="relative">3</div>
              <div className="relative">$300</div>
              <div className="relative">01-6-2023</div>
            </div>
            <div className="self-stretch flex flex-row py-2 px-0 items-start justify-between border-b-[1px] border-solid border-colours-gray-200">
              <div className="relative">column</div>
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
              <div className="relative">column</div>
            </div>
            <div className="self-stretch flex flex-row py-2 px-0 items-start justify-between border-b-[1px] border-solid border-colours-gray-200">
              <div className="relative">column</div>
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
              <div className="relative">column</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestStudentsContainer;
