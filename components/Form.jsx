import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send email');
      }

      const data = await response.json();
      setStatus(data.message);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error:', error.message);
      setStatus('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="bg-[url('/BGForm.jpg')] w-full font-outfit font-normal text-xl h-[800px] bg-cover bg-no-repeat bg-center flex items-center justify-center">
      <div className="bg-opacity-95 bg-BG text-white p-8 w-full max-w-4xl rounded-md shadow-md">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full font-outfit font-normal text-lg p-2 bg-transparent border-b border-gray-400 focus:border-Gold outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full font-outfit font-normal text-lg p-2 bg-transparent border-b border-gray-400 focus:border-Gold outline-none"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-medium mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full font-outfit font-normal text-lg p-2 bg-transparent border-b border-gray-400 focus:border-Gold outline-none"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-lg font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full font-outfit font-normal text-lg p-2 bg-transparent border-b border-gray-400 focus:border-Gold outline-none"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-lg font-medium mb-1">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full font-outfit font-normal text-lg p-2 bg-transparent border-b border-gray-400 focus:border-Gold outline-none"
            ></textarea>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="mt-4 bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-Gold hover:text-white transition-colors duration-300"
            >
              Get An Appointment
            </button>
          </div>
        </form>
        {status && <p className="text-center mt-4 font-semibold text-Gold">{status}</p>}
      </div>
    </div>
  );
}

export default Form;
