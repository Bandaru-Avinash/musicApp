const Frame = () => {
  return (
    <div className="relative rounded-lg bg-colours-background-panel w-[495px] flex flex-col p-4 box-border items-start justify-start gap-[16px] max-w-full max-h-full overflow-auto text-left text-3xl text-colours-text-light-primary font-text-body-caption">
      <div className="relative text-center">Add Course</div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xs text-colours-text-light-secondary">
        <div className="self-stretch rounded bg-colours-background-panel flex flex-row p-2 items-center justify-start gap-[8px] border-[1px] border-solid border-colours-gray-200">
          <div className="flex-1 relative">Course Name</div>
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/undefined5.png"
          />
        </div>
        <div className="self-stretch rounded bg-colours-background-panel flex flex-row p-2 items-center justify-start gap-[8px] border-[1px] border-solid border-colours-gray-200">
          <div className="flex-1 relative">Description</div>
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/undefined5.png"
          />
        </div>
        <div className="self-stretch rounded bg-colours-background-panel flex flex-row p-2 items-center justify-start gap-[8px] border-[1px] border-solid border-colours-gray-200">
          <div className="flex-1 relative">Instructor</div>
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/undefined5.png"
          />
        </div>
        <div className="self-stretch rounded bg-colours-background-panel flex flex-row p-2 items-center justify-start gap-[8px] border-[1px] border-solid border-colours-gray-200">
          <div className="flex-1 relative">Instrument</div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/undefined6.png"
          />
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/undefined5.png"
          />
        </div>
        <div className="self-stretch rounded bg-colours-background-panel flex flex-row p-2 items-center justify-start gap-[8px] border-[1px] border-solid border-colours-gray-200">
          <div className="flex-1 relative">Day of the week</div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/undefined6.png"
          />
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/undefined5.png"
          />
        </div>
        <div className="self-stretch rounded bg-colours-background-panel flex flex-row p-2 items-center justify-start gap-[8px] border-[1px] border-solid border-colours-gray-200">
          <div className="flex-1 relative">Price</div>
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/undefined5.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-end gap-[10px] text-sm">
        <div className="rounded flex flex-row py-2 px-4 items-start justify-start">
          <div className="relative">Cancel</div>
        </div>
        <div className="rounded bg-colours-secondary-200 flex flex-row py-2 px-4 items-start justify-start">
          <div className="relative">Add Course</div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
