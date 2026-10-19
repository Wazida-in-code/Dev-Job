const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="border-t border-base-300 mt-12">
      <div className="container w-11/12 max-w-7xl mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-base-content/60 text-center sm:text-left">
        <p>© {currentYear} DevJobs. All rights reserved.</p>
        <p>DevJobs</p>
      </div>
    </footer>
  );
};

export default Footer;
