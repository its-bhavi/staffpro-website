import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/data/navLinks';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isScrolled = scrollY > 40;
  const showDark = !isHome || isScrolled;

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-[350ms] ease-out"
        style={{
          backgroundColor: showDark
            ? 'rgba(255,255,255,0.92)'
            : 'transparent',
          backdropFilter: showDark ? 'blur(16px)' : 'none',
          borderBottom: showDark
            ? '1px solid rgba(0,0,0,0.06)'
            : '1px solid transparent',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-container mx-auto px-6 flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-2.5 z-50" aria-label="StaffPro Home">
            <div
              className={`w-[38px] h-[38px] rounded-[10px] flex items-center justify-center font-display font-extrabold text-lg transition-all duration-300 ${
                showDark
                  ? 'bg-gradient-to-br from-primary to-primary-light text-white'
                  : 'bg-white/15 text-white'
              }`}
            >
              S
            </div>
            <span
              className={`font-body text-xl font-bold transition-colors duration-300 ${
                showDark ? 'text-text-primary' : 'text-white'
              }`}
            >
              StaffPro
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-[14.5px] font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === link.path
                    ? showDark
                      ? 'text-primary-bright bg-primary-pale'
                      : 'text-white bg-white/15'
                    : showDark
                    ? 'text-gray-600 hover:text-primary-bright hover:bg-gray-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button to="/contact" variant={showDark ? 'primary' : 'primary-white'} size="sm" icon>
              Request Staff
            </Button>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden z-50 w-10 h-10 flex items-center justify-center"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu
                className={`w-6 h-6 transition-colors duration-300 ${
                  showDark ? 'text-text-primary' : 'text-white'
                }`}
              />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary-dark/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center gap-6"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileOpen(false)}
                    className={`font-body text-2xl font-semibold transition-colors duration-200 ${
                      location.pathname === link.path
                        ? 'text-primary-sky'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <Button
                  to="/contact"
                  variant="primary-white"
                  size="lg"
                  icon
                  onClick={() => setIsMobileOpen(false)}
                >
                  Request Staff
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
