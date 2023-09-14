import { useState, useCallback } from "react";
import Frame from "../components/Frame";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import StudentNavigationRail from "../components/StudentNavigationRail";
import CourseCard from "../components/CourseCard";

const AdminstratorCourses = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/adminstrator-overview");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/adminstrator-courses");
  }, [navigate]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className="relative bg-colours-background-body w-full h-[1024px] overflow-hidden text-center text-base text-colours-text-light-primary font-text-body-caption">
        <div
          className="absolute bottom-[49px] left-[1155px] rounded-lg bg-colours-secondary-200 shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.15),_0px_1px_3px_rgba(0,_0,_0,_0.3)] overflow-hidden flex flex-row items-center justify-center cursor-pointer"
          onClick={openFrame}
        >
          <div className="flex flex-row py-4 pr-5 pl-4 items-center justify-center gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/undefined7.png"
            />
            <div className="relative">Add Course</div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1380px] flex flex-row items-start justify-start">
          <StudentNavigationRail
            onFrameContainerClick={onFrameContainerClick}
            onFrameContainer1Click={onFrameContainer1Click}
          />
          <CourseCard />
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default AdminstratorCourses;
