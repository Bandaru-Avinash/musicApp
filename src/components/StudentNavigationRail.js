import Account from "./Account";

const StudentNavigationRail = ({
  onFrameContainerClick,
  onFrameContainer1Click,
}) => {
  return (
    <div className="bg-colours-background-panel box-border w-24 h-[1024px] flex flex-col py-2.5 px-3 items-center justify-start gap-[48px] text-left text-xs text-colours-secondary-800 font-text-body-caption border-r-[1px] border-solid border-colours-gray-300">
      <img
        className="relative w-12 h-12 object-cover"
        alt=""
        src="/undefined2.png"
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
        <div
          className="self-stretch rounded-md bg-colours-secondary-100 flex flex-col py-[5px] px-0 items-center justify-start cursor-pointer"
          onClick={onFrameContainerClick}
        >
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/undefined3.png"
          />
          <div className="relative">Home</div>
        </div>
        <div
          className="self-stretch rounded-md bg-colours-gray-200 flex flex-col py-[5px] px-1 items-center justify-start cursor-pointer text-colours-text-light-secondary"
          onClick={onFrameContainer1Click}
        >
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/undefined4.png"
          />
          <div className="relative">Courses</div>
        </div>
      </div>
      <Account />
    </div>
  );
};

export default StudentNavigationRail;
