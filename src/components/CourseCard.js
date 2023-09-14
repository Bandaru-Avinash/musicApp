import { useState, useCallback } from "react";
import Frame2 from "./Frame2";
import PortalPopup from "./PortalPopup";
import Frame1 from "./Frame1";

const CourseCard = () => {
  const [isFrame1Open, setFrame1Open] = useState(false);
  const [isFrame2Open, setFrame2Open] = useState(false);

  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  const openFrame2 = useCallback(() => {
    setFrame2Open(true);
  }, []);

  const closeFrame2 = useCallback(() => {
    setFrame2Open(false);
  }, []);

  return (
    <>
      <div className="w-[1380px] flex flex-row items-start justify-start text-left text-9xl text-colours-text-light-secondary font-text-body-caption">
        <div className="w-[1284px] flex flex-col py-6 px-9 box-border items-start justify-start gap-[32px]">
          <div className="flex flex-col items-start justify-start">
            <b className="relative">Courses</b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
            <div className="self-stretch flex flex-row items-center justify-between">
              <b className="relative tracking-[0.4px] uppercase inline-block w-52 shrink-0">
                Course List
              </b>
              <div className="rounded bg-colours-background-panel box-border w-[223px] flex flex-row p-2 items-center justify-start gap-[8px] text-xs border-[1px] border-solid border-colours-gray-200">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/undefined5.png"
                />
                <div className="flex-1 relative">Search</div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
                  alt=""
                  src="/undefined5.png"
                />
              </div>
            </div>
            <div className="self-stretch rounded-md bg-colours-background-panel flex flex-col p-6 items-start justify-start text-sm text-colours-text-light-primary">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row pt-2 px-0 pb-4 items-start justify-between border-b-[1px] border-solid border-colours-gray-300">
                  <div className="flex-1 flex flex-row items-start justify-between">
                    <div className="flex-1 relative">Name</div>
                    <div className="flex-1 relative">Description</div>
                    <div className="flex-1 relative">Instructor</div>
                    <div className="flex-1 relative">Instrument</div>
                    <div className="flex-1 relative">Day of Week</div>
                    <div className="flex-1 relative"># of Students</div>
                    <div className="flex-1 relative">Price</div>
                    <div className="flex-1 relative">Status</div>
                  </div>
                  <b className="relative">Actions</b>
                </div>
                <div className="self-stretch flex flex-col py-1 px-0 items-start justify-start">
                  <div className="self-stretch flex flex-row py-2 px-0 items-start justify-between border-b-[1px] border-solid border-colours-gray-200">
                    <div className="flex-1 flex flex-row items-start justify-between">
                      <div className="flex-1 relative">Classical Guitar</div>
                      <div className="flex-1 relative">
                        Guitar classes for...
                      </div>
                      <div className="flex-1 relative">Ms. Jane Doe</div>
                      <div className="flex-1 relative">Guitar</div>
                      <div className="flex-1 relative">Wednesday</div>
                      <div className="flex-1 relative">26</div>
                      <div className="flex-1 relative">$60</div>
                      <div className="flex-1 h-6 flex flex-col items-start justify-between text-xs text-colours-text-light-secondary">
                        <div className="rounded bg-colours-primary-200 flex flex-row py-1 px-4 items-start justify-start">
                          <div className="relative">Active</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-[49px] h-6 flex flex-row items-center justify-center cursor-pointer"
                      onClick={openFrame1}
                    >
                      <div className="rounded-3xl w-6 overflow-hidden shrink-0 flex flex-row py-1 px-2.5 box-border items-start justify-between">
                        <img
                          className="relative w-1 h-4 object-cover"
                          alt=""
                          src="/undefined8.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row py-2 px-0 items-start justify-between border-b-[1px] border-solid border-colours-gray-200">
                    <div className="flex-1 flex flex-row items-start justify-between">
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 h-6 flex flex-col items-start justify-between text-xs text-colours-text-light-secondary">
                        <div className="rounded bg-colours-primary-200 flex flex-row py-1 px-4 items-start justify-start">
                          <div className="relative">Active</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[49px] h-6 flex flex-row items-center justify-center">
                      <div className="rounded-3xl w-6 overflow-hidden shrink-0 flex flex-row py-1 px-2.5 box-border items-start justify-between">
                        <img
                          className="relative w-1 h-4 object-cover"
                          alt=""
                          src="/undefined8.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row py-2 px-0 items-start justify-between border-b-[1px] border-solid border-colours-gray-200">
                    <div className="flex-1 flex flex-row items-start justify-between">
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 h-6 flex flex-col items-start justify-between text-xs text-colours-text-light-secondary">
                        <div className="rounded bg-colours-secondary-200 flex flex-row py-1 px-4 items-start justify-start">
                          <div className="relative">Closed</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[49px] h-6 flex flex-row items-center justify-center">
                      <div className="rounded-3xl w-6 overflow-hidden shrink-0 flex flex-row py-1 px-2.5 box-border items-start justify-between">
                        <img
                          className="relative w-1 h-4 object-cover"
                          alt=""
                          src="/undefined9.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row py-2 px-0 items-start justify-between border-b-[1px] border-solid border-colours-gray-200">
                    <div className="flex-1 flex flex-row items-start justify-between">
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 h-6 flex flex-col items-start justify-between text-xs text-colours-text-light-secondary">
                        <div className="rounded bg-colours-secondary-200 flex flex-row py-1 px-4 items-start justify-start">
                          <div className="relative">Closed</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[49px] h-6 flex flex-row items-center justify-center">
                      <div className="rounded-3xl w-6 overflow-hidden shrink-0 flex flex-row py-1 px-2.5 box-border items-start justify-between">
                        <img
                          className="relative w-1 h-4 object-cover"
                          alt=""
                          src="/undefined9.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row py-2 px-0 items-start justify-between border-b-[1px] border-solid border-colours-gray-200">
                    <div className="flex-1 flex flex-row items-start justify-between">
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 h-6 flex flex-col items-start justify-between text-xs text-colours-text-light-secondary">
                        <div className="rounded bg-colours-gray-200 flex flex-row py-1 px-4 items-start justify-start">
                          <div className="relative">Archived</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-[49px] h-6 flex flex-row items-center justify-center cursor-pointer"
                      onClick={openFrame2}
                    >
                      <div className="rounded-3xl w-6 overflow-hidden shrink-0 flex flex-row py-1 px-2.5 box-border items-start justify-between">
                        <img
                          className="relative w-1 h-4 object-cover"
                          alt=""
                          src="/undefined8.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row py-2 px-0 items-start justify-between border-b-[1px] border-solid border-colours-gray-200">
                    <div className="flex-1 flex flex-row items-start justify-between">
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 h-6 flex flex-col items-start justify-between text-xs text-colours-text-light-secondary">
                        <div className="rounded bg-colours-gray-200 flex flex-row py-1 px-4 items-start justify-start">
                          <div className="relative">Archived</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[49px] h-6 flex flex-row items-center justify-center">
                      <div className="rounded-3xl w-6 overflow-hidden shrink-0 flex flex-row py-1 px-2.5 box-border items-start justify-between">
                        <img
                          className="relative w-1 h-4 object-cover"
                          alt=""
                          src="/undefined8.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row py-2 px-0 items-start justify-between">
                    <div className="flex-1 flex flex-row items-start justify-between">
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 relative">column</div>
                      <div className="flex-1 h-6 flex flex-col items-start justify-between text-xs text-colours-text-light-secondary">
                        <div className="rounded bg-colours-gray-200 flex flex-row py-1 px-4 items-start justify-start">
                          <div className="relative">Archived</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[49px] h-6 flex flex-row items-center justify-center">
                      <div className="rounded-3xl w-6 overflow-hidden shrink-0 flex flex-row py-1 px-2.5 box-border items-start justify-between">
                        <img
                          className="relative w-1 h-4 object-cover"
                          alt=""
                          src="/undefined8.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <Frame2 onClose={closeFrame1} />
        </PortalPopup>
      )}
      {isFrame2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame2}
        >
          <Frame1 onClose={closeFrame2} />
        </PortalPopup>
      )}
    </>
  );
};

export default CourseCard;
