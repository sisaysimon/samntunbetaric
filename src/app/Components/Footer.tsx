import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { label: "Facebook", href: "/" },
    { label: "Twitter", href: "/" },
    { label: "Instagram", href: "/" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About</h2>
            <p className="text-sm">
              Samntun_Betaric provides top-notch services and resources for your
              unique needs. Discover more about us through the links below.
            </p>
          </div>
          {/* Column 2: Navigation */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <span className="hover:underline cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 3: Contact */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <ul className="space-y-2">
              <li>Email: sisaysimon94@gmail.com</li>
              <li>Phone: +251-920-980-645</li>
              <li>Address: Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>
        {/* Bottom Row */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">&copy; 2025 Samntun_Betaric. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social Media Links */}
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.href}>
                <span className="hover:underline cursor-pointer">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
