import GuideProfile from "../main Content/GuideProfile/guideProfile";
import BookingSection from "../main Content/BookingSection/bookingSection";
import SimilarGuides from "../main Content/SimilarGuides/similarGuides";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OneGuideService } from "../../../api/oneGuideService";
const MainContent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    detail: oneGuide,
    loadingDetail: loadingOne,
    errorDetail: errorOne,
  } = useSelector((state) => state.guides);

  useEffect(() => {
    console.log("Guide ID from URL:", id);
    dispatch(OneGuideService(id));
  }, [id, dispatch]);

  console.log("Guide state from Redux:", oneGuide);

  if (loadingOne)
    return <p className="text-center">Loading guide details...</p>;
  if (errorOne) return <p className="text-center text-red-500">{errorOne}</p>;
  if (!oneGuide) return null;
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <GuideProfile guide={oneGuide} />

        <h2 className="text-[#0e1a18] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Book a city tour with {oneGuide.name}
        </h2>

        <BookingSection guide={oneGuide} />

        <h2 className="text-[#0e1a18] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Similar guides
        </h2>

        <SimilarGuides />
      </div>
    </div>
  );
};

export default MainContent;
