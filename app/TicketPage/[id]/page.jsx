import TicketForm from "../../(components)/Ticket/TicketForm";
import React from "react";

const getTicketByID = async (id) => {
  const res = await fetch(`http:/localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get ticket.");
  }
  return res.json()
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};
  if (EDITMODE) {
    updateTicketData = await getTicketByID(params.id);
    updateTicketData = updateTicketData.foundTicket
  } else {
    updateTicketData = {
      _id: 'new',
    }
  }
  return <TicketForm ticket={updateTicketData}/>;
};

export default TicketPage;