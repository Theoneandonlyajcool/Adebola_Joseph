type TimelineProps = {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string;
};

export const Timeline = ({
  title,
  company,
  date,
  location,
  description,
}: TimelineProps) => {
  return (
    <div className="relative pl-12">
      {/* Vertical line */}
      <div className="absolute left-5 top-0 h-full w-0.5 bg-blue-300" />

      <TimelineItem
        title={title}
        company={company}
        date={date}
        location={location}
        description={description}
      />

      {/* <TimelineItem
        title="Associate AI Engineer"
        company="Legato Health Technology"
        date="June 2020 – Aug 2021"
        location="Hyderabad, Telangana"
        description="Automating healthcare products, cancer survival and recurrence prediction models."
      /> */}
    </div>
  );
};

type TimelineItemProps = {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string;
};

function TimelineItem({
  title,
  company,
  date,
  location,
  description,
}: TimelineItemProps) {
  return (
    <div className="relative mb-10">
      {/* Dot */}
      <div className="absolute -left-[34px] top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-white" />

      {/* Card */}
      <div className="bg-white rounded-xl shadow-md p-5">
        <div className="flex justify-between text-sm text-gray-500">
          <span>{date}</span>
          <span>{location}</span>
        </div>

        <h3 className="text-black mt-2 font-semibold text-lg">{title}</h3>
        <p className="text-sm text-blue-600">{company}</p>

        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
