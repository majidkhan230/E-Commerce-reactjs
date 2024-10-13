import React from 'react'

const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-8">
      <div className="bg-white p-6 border rounded-lg">
        <div className="flex items-start mb-6">
          <img src="/assets/images/icons-phone.png" alt="Call" className="w-8 h-8 mr-4" />
          <div>
            <h3 className="text-lg font-bold">Call To Us</h3>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex items-start">
          <img src="/assets/images/icons-mail.png" alt="Email" className="w-8 h-8 mr-4" />
          <div>
            <h3 className="text-lg font-bold">Write To Us</h3>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>support@exclusive.com</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 border rounded-lg">
        <form className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <input type="text" placeholder="Your Name *" className="border p-3 rounded" />
            <input type="email" placeholder="Your Email *" className="border p-3 rounded" />
            <input type="tel" placeholder="Your Phone *" className="border p-3 rounded" />
          </div>
          <textarea placeholder="Your Message" className="w-full border p-3 rounded h-32"></textarea>
          <button type="submit" className="bg-red-500 text-white px-6 py-3 rounded">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact