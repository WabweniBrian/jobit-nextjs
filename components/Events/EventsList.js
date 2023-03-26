const EventsList = ({ events }) => {
  return (
    <div className="flex flex-wrap gap-3 mt-5">
      {events.map((event) => (
        <div className="card p-2 flex-1 basis-[18rem]" key={event.id}>
          <img
            src={event?.image || "/images/photo-3.jpg"}
            alt={event?.title}
            className="h-48 w-full object-cover rounded-lg"
          />
          <div className="mt-2">
            <div className="flex-center-between">
              <h1 className="text-lg font-bold">{event?.title}</h1>
              <span className="text-muted uppercase">{event?.date}</span>
            </div>
            <div className="flex-center-between mt-2">
              <p className="text-sm">Event By {event?.organizer}</p>
              <span className="text-lg text-primary">
                {event?.capacity}: capacity
              </span>
            </div>
            <p className="text-sm">{event?.time}</p>
            <span className="opacity-60 text-sm text-primary">
              {event?.address}
            </span>
            <p className="my-3">{event?.description}</p>
            <div className="flex-align-center gap-2 mt-3">
              <div className="flex-align-center">
                <img
                  src="/images/avatar-3.png"
                  alt=""
                  className="w-8 rounded-full border-2 border-white  dark:border-hover-color"
                />
                <img
                  src="/images/avatar-4.png"
                  alt=""
                  className="w-8 rounded-full -ml-2 border-2  border-white dark:border-hover-color"
                />
                <img
                  src="/images/avatar-2.png"
                  alt=""
                  className="w-8 rounded-full -ml-2 border-2  border-white dark:border-hover-color"
                />
                <div className="w-8 h-8 -ml-2 rounded-full grid place-items-center bg-secondaryLightYellow border-2  border-white dark:border-hover-color">
                  <span className="text-xs text-slate-600">+24</span>
                </div>
              </div>
              <p className="text-sm">Intrested</p>
            </div>
            <button className="btn btn-primary-light w-full mt-3">
              attend
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
