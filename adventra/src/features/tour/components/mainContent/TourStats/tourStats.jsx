import StatItem from './statItem';
import IconCalendar from './iconCalender';
import IconUsers from './iconUSers';
import IconActivity from './iconActivity';

function TourStats() {
  return (
    <div className="flex flex-wrap gap-6 border-b border-[#e9f1f0] pb-6">
      {/* Duration */}
      <StatItem
        icon={(props) => <IconCalendar {...props} />}
        label="Duration"
        value="14 Days"
      />

      {/* Group Size */}
      <StatItem
        icon={(props) => <IconUsers {...props} />}
        label="Group Size"
        value="Max 20 People"
      />

      {/* Difficulty Level */}
      <StatItem
        icon={(props) => <IconActivity {...props} />}
        label="Difficulty"
        value="Moderate"
      />
    </div>
  );
}

export default TourStats;
