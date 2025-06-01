const Footer = () => {
  return (
    <footer className="py-6 mt-12 border-t" style={{ borderColor: 'var(--light-black-800)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white">&copy; 2025 Farhan Ahmed. All rights reserved.</p>
          <p className="text-sm mt-2 md:mt-0 italic text-white">
            "I'm not crazy, my mother had me tested. Just like I test my code!"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;