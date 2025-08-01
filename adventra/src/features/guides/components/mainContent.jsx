import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GuidesService } from "../api/guidesService";
import PageLayout from "./pageLayout";
import ContentContainer from "./contentContainer";
import SectionHeader from "./sectionHeader";
import GuideGrid from "./guideGrid";

function MainContent() {
  const dispatch = useDispatch();

  const {
    list: guides,
    loadingList,
    errorList,
  } = useSelector((state) => state.guides);

  useEffect(() => {
    dispatch(GuidesService());
  }, [dispatch]);

  return (
    <PageLayout>
      <ContentContainer>
        <SectionHeader
          title="Meet Our Guides"
          description="Our guides are passionate locals who bring their unique perspectives and expertise to every tour. Get to know the people who will make your journey unforgettable."
        />

        {loadingList && <p className="text-center text-gray-500">Loading...</p>}
        {errorList && <p className="text-center text-red-500">{errorList}</p>}
        {!loadingList && !errorList && <GuideGrid guides={guides} />}
      </ContentContainer>
    </PageLayout>
  );
}

export default MainContent;
