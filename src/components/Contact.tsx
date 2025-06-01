import { useState } from 'react';
import { Mail, Coffee, CircleDollarSign } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    reason: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen pb-32">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Get In Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info Panel */}
        <div
          className="p-8 rounded-lg space-y-6 glass-effect"
          style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }}
        >
          <p className="text-white">
            Whether you want to discuss a project, ask about tech, or just want to say hi,
            I am always open for a chat!
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:hello@farhanahmed.pro"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-500 transition-colors"
            >
              <Mail className="w-5 h-5" />
              hello@farhanahmed.pro
            </a>
            <a
              href="https://calendly.com/hello-farhanahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-500 transition-colors"
            >
              <Coffee className="w-5 h-5" />
              Schedule a Coffee Chat
            </a>
            <a
              href="https://ko-fi.com/itsfarhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-500 transition-colors"
            >
              <CircleDollarSign className="w-5 h-5" />
              Sponsor a coffee for Farhan
            </a>
          </div>
        </div>

        {/* Unified Form with FormSubmit.co */}
        <form
          action="https://formsubmit.co/5bdb03a51a3b91312a323dcf167753bd"
          method="POST"
          className="p-8 rounded-lg space-y-6"
          style={{ backgroundColor: 'var(--light-black-800)' }}
        >
          {/* Honeypot field */}
          <input type="text" name="_honey" style={{ display: 'none' }} />

          {/* Disable default captcha */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Redirect to thank you page */}
          <input type="hidden" name="_next" value="https://farhanahmed.pro/thankyou" />

          {/* Pass formData fields */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px'
              }}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px'
              }}
            />
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium mb-1 text-white">
              Reason for Contact
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px'
              }}
            >
              <option value="" disabled hidden>
                Select an option
              </option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Freelance">Freelance</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1 text-white">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px'
              }}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px'
              }}
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;