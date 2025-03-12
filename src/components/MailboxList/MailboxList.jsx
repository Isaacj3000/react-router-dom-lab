import React from 'react';
import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
    return (
        <div>
            <h2>Mailboxes</h2>
            <ul>
                {mailboxes.length > 0 ? (
                    mailboxes.map((mailbox) => (
                        <li key={mailbox._id}>
                            <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
                        </li>
                    ))
                ) : (
                    <p>No mailboxes available.</p>
                )}
            </ul>
        </div>
    );
};

export default MailboxList;
