import TransitionLink from "./TransitionLink";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent border-t border-white/10 pt-16 pb-8 px-6 relative z-50 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div>
          <TransitionLink href="/" className="flex items-center gap-2 mb-6">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12,8 17,10 13,11" />
              <polygon points="6,14 13,11 12,8" />
              <polygon points="13,11 9,2 6,14" />
              <polygon points="12,8 15,3 13,11" opacity="0.65" />
              <polygon points="6,14 2,16 5,13" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-white">Zynkk</span>
          </TransitionLink>
          <p className="text-white/60 text-[14px] max-w-xs">Premium web solutions and career-launching internships for modern digital builders.</p>
        </div>
        
        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <span className="text-white font-semibold mb-2">Company</span>
            <TransitionLink href="/about" className="text-white/60 hover:text-white transition-colors text-[14px]">About Us</TransitionLink>
            <TransitionLink href="/services" className="text-white/60 hover:text-white transition-colors text-[14px]">Services</TransitionLink>
            <TransitionLink href="/internships" className="text-white/60 hover:text-white transition-colors text-[14px]">Internships</TransitionLink>
            <TransitionLink href="/contact" className="text-white/60 hover:text-white transition-colors text-[14px]">Contact Us</TransitionLink>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-semibold mb-2">Legal</span>
            <TransitionLink href="#" className="text-white/60 hover:text-white transition-colors text-[14px]">Privacy Policy</TransitionLink>
            <TransitionLink href="#" className="text-white/60 hover:text-white transition-colors text-[14px]">Terms of Service</TransitionLink>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-[13px]">© {new Date().getFullYear()} Zynkk. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-white/40 hover:text-white transition-colors">
            {/* Twitter */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
          <a href="#" className="text-white/40 hover:text-white transition-colors">
            {/* LinkedIn */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
