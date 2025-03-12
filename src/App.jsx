// src/App.jsx
import NavBar from './components/NavBar/NavBar.jsx';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // 
import MailboxList from './components/MailboxList/MailboxList.jsx';
import MailboxForm from './components/MailboxForm/MailboxForm.jsx';
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx';
import * as React from 'react';
import './App.css';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailbox) => {
    const newId = mailboxes.length ? mailboxes[mailboxes.length - 1]._id + 1 : 1;
    const mailboxWithId = { 
      ...newMailbox,
       _id: newId +1 
      };
    setMailboxes((prevMailboxes) => [...prevMailboxes, mailboxWithId]);
  };

  return (
    <Router> 
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <h1>Post Office</h1>
                <p>
                Welcome to the Post Office! Click on{' '}
                <Link to="/new-mailbox">New MailBox</Link> to receive your mail or{' '}
                <Link to="/mailboxes">check your mailbox</Link> to see everymail.
              </p>
              </main>
            }
          />
          {/* Passing mailboxes as props to MailboxList */}
          <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
          <Route path="/new-mailbox" element={<MailboxForm onSubmit={addBox} />} />
          <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
