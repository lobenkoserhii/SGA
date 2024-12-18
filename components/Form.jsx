import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    repair: '',
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
        throw new Error('Failed to send email');
      }

      const data = await response.json();
      setStatus(data.message);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        repair: '',
      });
    } catch (error) {
      console.error('Error:', error.message);
      setStatus('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="bg-[url('/BGForm.jpg')] w-full font-outfit font-normal text-xl h-[800px] bg-cover bg-no-repeat bg-center flex items-center justify-center">
      <div className="bg-opacity-95 bg-BG text-white p-8 NPC:w-[1024px] font-outfit font-normal text-xl">
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full font-outfit font-normal text-xl p-2 bg-transparent border-b border-[#3A4553] outline-none focus:outline-none focus:border-Gold"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full font-outfit font-normal text-xl p-2 bg-transparent border-b border-[#3A4553] outline-none focus:outline-none focus:border-Gold"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-medium">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full font-outfit font-normal text-xl p-2 bg-transparent border-b border-[#3A4553] outline-none focus:outline-none focus:border-Gold"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-lg font-medium">
              Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full font-outfit font-normal text-xl p-2 bg-transparent border-b border-[#3A4553] outline-none focus:outline-none focus:border-Gold"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="repair" className="block text-lg font-medium">
              Repair Needed *
            </label>
            <textarea
              id="repair"
              name="repair"
              value={formData.repair}
              onChange={handleChange}
              required
              rows="4"
              className="w-full font-outfit font-normal text-xl p-2 bg-transparent border-b border-[#3A4553] outline-none focus:outline-none focus:border-Gold"
            ></textarea>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="mt-4 bg-white hover:bg-Gold text-black font-bold py-4 px-8"
            >
              Submit
            </button>
          </div>
        </form>
        {status && <p className="text-center mt-4 font-semibold">{status}</p>}
      </div>
    </div>
  );
}

export default Form;
