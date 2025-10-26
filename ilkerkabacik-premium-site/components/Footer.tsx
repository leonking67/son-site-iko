import Link from 'next/link';

export default function Footer(){
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 justify-between">
        <div>
          <div className="font-display text-lg">İlker Kabacık</div>
          <div className="text-sm text-ice/70">FinTech • Blockchain • DeFi</div>
        </div>
        <div className="text-sm text-ice/70 flex gap-6">
          <a className="link-underline" href="mailto:ilkerkabacik@defipayusdt.io">E-mail</a>
          <a className="link-underline" href="https://www.linkedin.com" target="_blank">LinkedIn</a>
          <a className="link-underline" href="https://www.instagram.com" target="_blank">Instagram</a>
          <a className="link-underline" href="https://github.com" target="_blank">GitHub</a>
        </div>
      </div>
      <div className="text-center text-xs text-ice/50 pb-8">© {new Date().getFullYear()} İlker Kabacık — All rights reserved.</div>
    </footer>
  );
}