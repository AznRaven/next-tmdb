// import Ticket from "@/app/(models)/TicketModel";
import Ticket from "../../../(models)/TicketModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    const foundTicket = await Ticket.findOne({ _id: id });
    return NextResponse.json({ foundTicket }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  console.log("delete ran");
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);

    return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
export async function PUT(req, { params }) {
  console.log("update ran");
  try {
    const { id } = params;
    const body = await req.json()
    const ticketData = body.formData
    
    const updateTicketData = await Ticket.findByIdAndUpdate(id, {
        ...ticketData
    })

    return NextResponse.json({ message: "Ticket Updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
