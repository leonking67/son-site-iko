'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/consultancy', label: 'DeFi Consultancy' },
  { href: '/astro', label: 'Astro Leadership Map' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar(){
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-midnight/60">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-wide">
          İlker <span className="text-secondary">Kabacık</span>
        </Link>
        <ul className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm hover:text-secondary transition ${pathname === l.href ? 'text-secondary' : 'text-ice/80'}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="md:inline-flex hidden px-4 py-2 rounded-xl bg-secondary text-white text-sm font-medium hover:opacity-90">
          Work with me
        </Link>
      </nav>
    </header>
  );
}