import React, { useState } from 'react';

const MailboxForm = ({ onSubmit }) => {
    const [newMailbox, setNewMailbox] = useState({
        boxOwner: '',
        boxSize: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMailbox((prevMailbox) => ({
            ...prevMailbox,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(newMailbox);
        setNewMailbox({ boxOwner: '', boxSize: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="boxOwner">Box Owner:</label>
                <input
                    type="text"
                    id="boxOwner"
                    name="boxOwner"
                    value={newMailbox.boxOwner}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="boxSize">Box Size:</label>
                <select
                    id="boxSize"
                    name="boxSize"
                    value={newMailbox.boxSize}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </div>
            <button type="submit">Add Mailbox</button>
        </form>
    );
};

export default MailboxForm;

