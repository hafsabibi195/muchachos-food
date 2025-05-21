import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#FF0000] to-[#CC0000] text-white">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-6 text-center">
        <h2 className="text-2xl font-bold text-black mb-3">
          Ready to Order?
        </h2>
        <p className="text-black text-base mb-4 max-w-2xl mx-auto">
          Experience the best food delivery service in town.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <Link
            href="/cart"
            className="inline-block bg-white text-[#FF0000] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            View Cart
          </Link>
          <a
            href="https://www.instagram.com/muchachosfood_?igsh=MWtnZWViZjZtcmt3dg=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF0000]/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-[#FF0000]/20 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              />
            </svg>
            Follow us on Instagram
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {/* Brand Section */}
          <div className="space-y-2 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-2">
              <Image
                src="/dummy-logo.svg"
                alt="Muchachos Food"
                width={35}
                height={35}
                className="animate-pulse"
              />
              <h2 className="text-base font-bold text-black">Muchachos Food</h2>
            </div>
            <p className="text-black/80 text-base leading-relaxed">
              Authentic Mexican cuisine delivered to your doorstep. Experience the rich flavors of Mexico with our handcrafted dishes.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-2">
              <a 
                href="https://www.instagram.com/muchachosfood_?igsh=MWtnZWViZjZtcmt3dg==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Information and Hours */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-black">Contact & Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <ul className="space-y-2">
                  <li className="flex items-center text-white/80 hover:text-white transition-colors duration-300">
                    <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-base">+92 300 1234567</span>
                  </li>
                  <li className="flex items-center text-white/80 hover:text-white transition-colors duration-300">
                    <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-base">info@muchachosfood.com</span>
                  </li>
                  <li className="flex items-center text-white/80 hover:text-white transition-colors duration-300">
                    <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-base">Islamabad G8 Markaz</span>
                  </li>
                </ul>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <ul className="space-y-2 text-white/80">
                  <li className="flex justify-between hover:text-white transition-colors duration-300">
                    <span className="text-base">Monday - Friday</span>
                    <span className="text-base">11:00 AM - 11:00 PM</span>
                  </li>
                  <li className="flex justify-between hover:text-white transition-colors duration-300">
                    <span className="text-base">Saturday</span>
                    <span className="text-base">11:00 AM - 12:00 AM</span>
                  </li>
                  <li className="flex justify-between hover:text-white transition-colors duration-300">
                    <span className="text-base">Sunday</span>
                    <span className="text-base">11:00 AM - 11:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-4 pt-3 text-center">
          <p className="text-white/80 text-base">
            © {new Date().getFullYear()} Muchachos Food. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
