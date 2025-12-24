import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { contactAPI } from '../services/api';
import ContactModal from './ContactModal';
import Footer from './Footer';

const AdminPanel = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { token, logout } = useAuth();

  useEffect(() => {
    fetchContacts();
  }, [token]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const data = await contactAPI.getAll(token);
      setContacts(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch contacts');
      setLoading(false);
    }
  };

  const handleMarkAsResponded = async (id) => {
    try {
      const contact = contacts.find(c => c._id === id);
      await contactAPI.update(id, { ...contact, responded: !contact.responded }, token);
      fetchContacts();
    } catch (err) {
      setError('Failed to update contact');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await contactAPI.delete(id, token);
        fetchContacts();
      } catch (err) {
        setError('Failed to delete contact');
      }
    }
  };

  const handleView = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const handleUpdate = async (updatedContact) => {
    try {
      await contactAPI.update(updatedContact._id, updatedContact, token);
      setShowModal(false);
      fetchContacts();
    } catch (err) {
      setError('Failed to update contact');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={logout}
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Loading...</p>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {contacts.length === 0 ? (
                <li className="px-4 py-5 sm:px-6 text-center text-gray-500">
                  No contacts found
                </li>
              ) : (
                contacts.map(contact => (
                  <li key={contact._id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                          {contact.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="ml-4">
                          <div className="flex items-center">
                            <p className="text-sm font-medium text-blue-600 truncate">
                              {contact.name}
                            </p>
                            {contact.responded && (
                              <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Responded
                              </span>
                            )}
                          </div>
                          <p className="flex items-center text-sm text-gray-500">
                            <svg className="shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            {contact.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleView(contact)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleMarkAsResponded(contact._id)}
                          className="text-green-600 hover:text-green-900"
                        >
                          {contact.responded ? 'Mark as Unresponded' : 'Mark as Responded'}
                        </button>
                        <button
                          onClick={() => handleDelete(contact._id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </main>

      {showModal && (
        <ContactModal
          contact={selectedContact}
          onClose={() => setShowModal(false)}
          onUpdate={handleUpdate}
        />
      )}
      <Footer />
    </div>
  );
};

export default AdminPanel;
