import Link from "next/link";
import TicketDeleteBtn from "./TicketDeleteBtn";
import TicketPriority from "./TicketPriority";
import TicketProgress from "./TicketProgress";
import TicketStatus from "./TicketStatus";

const TicketCard = ({ ticket }) => {
  const formatTimestamp = (timestamp) => {
    const option = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minutes: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", option);

    return formattedDate;
  };
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <TicketPriority priority={ticket.priority} />
        <div className="ml-auto">
          <TicketDeleteBtn id={ticket._id} />
        </div>
      </div>
      <Link href={`/TicketPage/${ticket._id}`} style={{display: 'contents'}}>
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 bg-gray-700 mb-2" />
        <p className="whitespace-pre-wrap">{ticket.description} </p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">{formatTimestamp(ticket.createdAt)}</p>
            <TicketProgress progress={ticket.progress} />
          </div>
          <div className="ml-auto flex items-end">
            <TicketStatus status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
