import { useParams } from "react-router-dom";
import React from "react";

const MailboxDetails = ({ mailboxes = [] }) => { 
    const { mailboxId } = useParams();

    if (!mailboxes || mailboxes.length === 0) {
        return <p>Loading mailboxes...</p>; // Handles cases where data is not yet loaded
    }

    const mailbox = mailboxes.find((box) => String(box._id) === mailboxId);

    if (!mailbox) {
        return <p>Mailbox not found.</p>;
    }

    return (
        <section>
            <h2>Mailbox Details</h2>
            <p><strong>Box Owner:</strong> {mailbox.owner}</p>
            <p><strong>Box Number:</strong> {mailbox._id}</p>
            <p><strong>Box Size:</strong> {mailbox.boxSize}</p>
        </section>
    );
};

export default MailboxDetails;

