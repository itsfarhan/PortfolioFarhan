import { useState } from 'react';
import { Mail, Coffee, CircleDollarSign, Send, User, AtSign, MessageSquare, FileText } from 'lucide-react';

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
          className="p-8 rounded-xl space-y-6 glass-effect backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 flex flex-col"
          style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }}
        >
          <h3 className="text-2xl font-semibold text-white mb-2">Let's Connect</h3>
          <p className="text-white">
            Whether you want to discuss a project, ask about tech, or just want to say hi,
            I am always open for a chat!
          </p>
          
          <div className="flex-grow"></div>
          
          <div className="flex flex-col gap-6 mt-6">
            <a
              href="mailto:hello@farhanahmed.pro"
              className="inline-flex items-center gap-3 text-emerald-400 hover:text-emerald-500 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium">Email</div>
                <div className="text-white group-hover:text-emerald-400 transition-colors">hello@farhanahmed.pro</div>
              </div>
            </a>
            
            <a
              href="https://calendly.com/hello-farhanahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-emerald-400 hover:text-emerald-500 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium">Coffee Chat</div>
                <div className="text-white group-hover:text-emerald-400 transition-colors">Schedule a meeting</div>
              </div>
            </a>
            
            <a
              href="https://ko-fi.com/itsfarhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-emerald-400 hover:text-emerald-500 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                <CircleDollarSign className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium">Support</div>
                <div className="text-white group-hover:text-emerald-400 transition-colors">Buy me a coffee</div>
              </div>
            </a>
          </div>
        </div>

        {/* Unified Form with FormSubmit.co */}
        <form
          action="https://formsubmit.co/5bdb03a51a3b91312a323dcf167753bd"
          method="POST"
          className="p-8 rounded-xl space-y-6 glass-effect backdrop-blur-md shadow-xl"
          style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }}
        >
          {/* Honeypot field */}
          <input type="text" name="_honey" style={{ display: 'none' }} />

          {/* Disable default captcha */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Redirect to thank you page */}
          <input type="hidden" name="_next" value="https://farhanahmed.pro/thankyou" />

          <h3 className="text-2xl font-semibold text-white mb-2">Send a Message</h3>

          {/* Pass formData fields */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="w-5 h-5 text-emerald-500" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full pl-12 pr-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px'
              }}
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <AtSign className="w-5 h-5 text-emerald-500" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full pl-12 pr-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px'
              }}
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FileText className="w-5 h-5 text-emerald-500" />
            </div>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all appearance-none"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px'
              }}
            >
              <option value="" disabled hidden>Select Reason</option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Freelance">Freelance</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MessageSquare className="w-5 h-5 text-emerald-500" />
            </div>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="w-full pl-12 pr-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px'
              }}
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px'
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;