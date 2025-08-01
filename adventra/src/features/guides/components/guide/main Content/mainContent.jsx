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
    dispatch(OneGuideService(id));
  }, [id, dispatch]);

  if (loadingOne)
    return <p className="text-center">Loading guide details...</p>;
  if (errorOne) return <p className="text-center text-red-500">{errorOne}</p>;
  if (!oneGuide) return null;

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-5">
      <div className="max-w-[960px] mx-auto flex flex-col gap-6">
        <GuideProfile guide={oneGuide} />

        <h2 className="text-[#0e1a18] text-lg sm:text-xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4">
          Book a city tour with {oneGuide.name}
        </h2>

        <div className="w-full max-w-md mx-auto px-2 sm:px-0">
          <BookingSection guide={oneGuide} />
        </div>

        <h2 className="text-[#0e1a18] text-lg sm:text-xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4">
          Similar guides
        </h2>

        <SimilarGuides />
      </div>
    </div>
  );
};

export default MainContent;
