const FrameComponent = ({ prop, from4400LastMonth }) => {
  return (
    <div className="flex flex-col items-start justify-start text-left text-xs text-colours-text-light-secondary font-text-body-caption">
      <div className="rounded-md bg-colours-background-panel w-[232px] flex flex-col p-4 box-border items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch hidden flex-row items-center justify-between">
            <div className="relative">Outstanding</div>
            <div className="rounded-2xs bg-paleturquoise flex flex-row py-px px-2 items-start justify-start text-4xs text-colours-primary-900">
              <div className="relative">20.2%</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px] text-3xl text-colours-text-light-primary">
            <img
              className="relative rounded-3xl w-8 h-8 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/undefined.png"
            />
            <div className="flex flex-col items-start justify-center">
              <div className="relative">{prop}</div>
              <div className="relative text-xs text-colours-text-light-secondary">
                {from4400LastMonth}
              </div>
            </div>
          </div>
          <div className="self-stretch relative bg-gainsboro h-[85px] hidden" />
          <div className="self-stretch flex flex-row items-start justify-end gap-[10px] text-4xs">
            <div className="relative hidden">July</div>
            <div className="relative text-colours-secondary-700">{`View `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
