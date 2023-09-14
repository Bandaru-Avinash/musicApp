import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StudentNavigationRail from "../components/StudentNavigationRail";
import FrameComponent from '../components/FrameComponent'
import EnrolmentsContainer from "../components/EnrolmentsContainer";
import BestStudentsContainer from "../components/BestStudentsContainer";

const AdminstratorOverview = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/adminstrator-overview");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/adminstrator-courses");
  }, [navigate]);

  return (
    <div className="relative bg-colours-background-body w-full flex flex-row items-start justify-start text-left text-9xl text-colours-text-light-secondary font-text-body-caption">
      <StudentNavigationRail
        onFrameContainerClick={onFrameContainerClick}
        onFrameContainer1Click={onFrameContainer1Click}
      />
      <div className="flex-1 h-[1024px] overflow-hidden flex flex-col py-6 px-9 box-border items-start justify-start gap-[32px]">
        <div className="flex flex-col items-start justify-start">
          <b className="relative">Overview</b>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between">
          <FrameComponent
            prop="164"
            from4400LastMonth="total number of students"
          />
          <FrameComponent
            prop="12"
            from4400LastMonth="total number of courses"
          />
          <FrameComponent
            prop="$2000"
            from4400LastMonth="total amount earned"
          />
          <FrameComponent
            prop="Guitar"
            from4400LastMonth="best performing course"
          />
          <FrameComponent
            prop="Flute"
            from4400LastMonth="worst performing course"
          />
        </div>
        <EnrolmentsContainer />
        <BestStudentsContainer />
      </div>
    </div>
  );
};

export default AdminstratorOverview;
