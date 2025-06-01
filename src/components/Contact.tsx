import { useState, useEffect } from 'react';
import { Mail, Coffee, CircleDollarSign, Send, User, AtSign, MessageSquare, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    reason: '',
    message: ''
  });
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen pb-32">
      <h2 className="text-3xl font-bold text-white mb-12 text-center animate-fade-in">Get In Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info Panel */}
        <div
          className={`p-8 rounded-xl space-y-6 glass-effect backdrop-blur-md transition-all duration-500 hover-card flex flex-col`}
          style={{ 
            backgroundColor: 'rgba(24, 24, 24, 0.7)',
            opacity: 0,
            animation: isLoaded ? 'fadeInLeft 0.6s forwards' : 'none',
            borderLeft: '1px solid rgba(16, 185, 129, 0.1)',
            borderTop: '1px solid rgba(16, 185, 129, 0.1)',
          }}
        >
          <h3 className="text-2xl font-semibold text-white mb-2 relative">
            Let's Connect
            <span 
              className="absolute bottom-0 left-0 h-[2px] bg-emerald-500 rounded-full"
              style={{ 
                width: '40%',
                opacity: 0,
                animation: isLoaded ? 'fadeIn 0.5s 0.3s forwards' : 'none'
              }}
            ></span>
          </h3>
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
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors transform group-hover:scale-110 duration-300">
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
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors transform group-hover:scale-110 duration-300">
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
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors transform group-hover:scale-110 duration-300">
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
          className={`p-8 rounded-xl space-y-6 glass-effect backdrop-blur-md shadow-xl hover-card`}
          style={{ 
            backgroundColor: 'rgba(24, 24, 24, 0.7)',
            opacity: 0,
            animation: isLoaded ? 'fadeInRight 0.6s forwards' : 'none',
            borderLeft: '1px solid rgba(16, 185, 129, 0.1)',
            borderTop: '1px solid rgba(16, 185, 129, 0.1)',
          }}
        >
          {/* Honeypot field */}
          <input type="text" name="_honey" style={{ display: 'none' }} />

          {/* Disable default captcha */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Redirect to thank you page */}
          <input type="hidden" name="_next" value="https://farhanahmed.pro/thankyou" />

          <h3 className="text-2xl font-semibold text-white mb-2 relative">
            Send a Message
            <span 
              className="absolute bottom-0 left-0 h-[2px] bg-emerald-500 rounded-full"
              style={{ 
                width: '40%',
                opacity: 0,
                animation: isLoaded ? 'fadeIn 0.5s 0.3s forwards' : 'none'
              }}
            ></span>
          </h3>

          {/* Pass formData fields */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-emerald-500 group-hover:text-emerald-400 transition-colors">
              <User className="w-5 h-5" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full pl-12 pr-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-transparent backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-emerald-500 group-hover:text-emerald-400 transition-colors">
              <AtSign className="w-5 h-5" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full pl-12 pr-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-transparent backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-emerald-500 group-hover:text-emerald-400 transition-colors">
              <FileText className="w-5 h-5" />
            </div>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all appearance-none bg-transparent backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
              }}
            >
              <option value="" disabled hidden>Select Reason</option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Freelance">Freelance</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Other">Other</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-emerald-500 group-hover:text-emerald-400 transition-colors">
              <MessageSquare className="w-5 h-5" />
            </div>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="w-full pl-12 pr-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-transparent backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <div className="group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-transparent backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full px-6 py-3.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
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