import UserEmail from "./userEmail";
import UserImage from "./userImage";
import UserName from "./userName";

export default function ProfileSection() {
  return (
    <div className="flex p-4">
      <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
        <div className="flex gap-4">
        <UserImage/>
          <div className="flex flex-col justify-center">
            <UserName/>
            <UserEmail/>
          </div>
        </div>
      </div>
    </div>
  );
}