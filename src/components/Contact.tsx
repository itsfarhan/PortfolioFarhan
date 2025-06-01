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
    <div className="min-h-screen pt-8 pb-32">
      <h2 className="text-3xl font-bold text-white mb-12 text-center animate-fade-in relative inline-block mx-auto">
        Get In Touch
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info Panel */}
        <div
          className="rounded-lg glass-effect hover-card overflow-hidden flex flex-col"
          style={{ 
            opacity: 0,
            animation: isLoaded ? 'fadeInLeft 0.6s forwards' : 'none',
          }}
        >
          <div className="p-6 flex flex-col h-full">
            <h3 className="text-xl font-medium text-white mb-4 pb-2 border-b border-white/10 relative">
              Let's Connect
              <span 
                className="absolute bottom-0 left-0 h-[2px] bg-emerald-400 rounded-full"
                style={{ 
                  width: '30%',
                  opacity: 0,
                  animation: isLoaded ? 'fadeIn 0.5s 0.3s forwards' : 'none'
                }}
              ></span>
            </h3>
            
            <p className="text-white/70 text-sm">
              Whether you want to discuss a project, ask about tech, or just want to say hi,
              I am always open for a chat!
            </p>
            
            <div className="flex-grow"></div>
            
            <div className="flex flex-col gap-5 mt-6">
              <a
                href="mailto:hello@farhanahmed.pro"
                className="inline-flex items-center gap-3 text-white/80 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors transform group-hover:scale-110 duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-white/60 text-xs group-hover:text-emerald-300 transition-colors">hello@farhanahmed.pro</div>
                </div>
              </a>
              
              <a
                href="https://calendly.com/hello-farhanahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white/80 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors transform group-hover:scale-110 duration-300">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium">Coffee Chat</div>
                  <div className="text-white/60 text-xs group-hover:text-emerald-300 transition-colors">Schedule a meeting</div>
                </div>
              </a>
              
              <a
                href="https://ko-fi.com/itsfarhan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white/80 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors transform group-hover:scale-110 duration-300">
                  <CircleDollarSign className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium">Support</div>
                  <div className="text-white/60 text-xs group-hover:text-emerald-300 transition-colors">Buy me a coffee</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/5bdb03a51a3b91312a323dcf167753bd"
          method="POST"
          className="rounded-lg glass-effect hover-card overflow-hidden"
          style={{ 
            opacity: 0,
            animation: isLoaded ? 'fadeInRight 0.6s forwards' : 'none',
          }}
        >
          {/* Honeypot field */}
          <input type="text" name="_honey" style={{ display: 'none' }} />

          {/* Disable default captcha */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Redirect to thank you page */}
          <input type="hidden" name="_next" value="https://farhanahmed.pro/thankyou" />

          <div className="p-6">
            <h3 className="text-xl font-medium text-white mb-4 pb-2 border-b border-white/10 relative">
              Send a Message
              <span 
                className="absolute bottom-0 left-0 h-[2px] bg-emerald-400 rounded-full"
                style={{ 
                  width: '30%',
                  opacity: 0,
                  animation: isLoaded ? 'fadeIn 0.5s 0.3s forwards' : 'none'
                }}
              ></span>
            </h3>

            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-emerald-400/70 group-hover:text-emerald-400 transition-colors">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-2 rounded-md text-white/90 focus:outline-none transition-all bg-white/5 border border-white/10 focus:border-emerald-400/30 focus:bg-white/8 text-sm"
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-emerald-400/70 group-hover:text-emerald-400 transition-colors">
                  <AtSign className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full pl-10 pr-4 py-2 rounded-md text-white/90 focus:outline-none transition-all bg-white/5 border border-white/10 focus:border-emerald-400/30 focus:bg-white/8 text-sm"
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-emerald-400/70 group-hover:text-emerald-400 transition-colors">
                  <FileText className="w-4 h-4" />
                </div>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-md text-white/90 focus:outline-none transition-all appearance-none bg-white/5 border border-white/10 focus:border-emerald-400/30 focus:bg-white/8 text-sm"
                >
                  <option value="" disabled hidden>Select Reason</option>
                  <option value="Project Inquiry">Project Inquiry</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-emerald-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-emerald-400/70 group-hover:text-emerald-400 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="w-full pl-10 pr-4 py-2 rounded-md text-white/90 focus:outline-none transition-all bg-white/5 border border-white/10 focus:border-emerald-400/30 focus:bg-white/8 text-sm"
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
                  className="w-full px-4 py-2 rounded-md text-white/90 focus:outline-none transition-all bg-white/5 border border-white/10 focus:border-emerald-400/30 focus:bg-white/8 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;