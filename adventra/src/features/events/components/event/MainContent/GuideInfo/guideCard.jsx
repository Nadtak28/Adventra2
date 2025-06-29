import GuideAvatar from './guideAvatar';
import GuideDetails from './guideDetails';

function GuideCard() {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <h3 className="text-[#0e1a18] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        About your guide
      </h3>
      <div className="flex items-center gap-4 bg-[#f8fbfb] px-4 min-h-[72px] py-2 justify-between">
        <div className="flex items-center gap-4">
          <GuideAvatar />
          <GuideDetails />
        </div>
        <div className="shrink-0">
          <div className="text-[#0e1a18] flex size-7 items-center justify-center" data-icon="ArrowRight" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideCard;