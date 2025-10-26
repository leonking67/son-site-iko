import Hero from '@/components/Hero';
import Section from '@/components/Section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section title="What I Do" subtitle="FinTech • Blockchain • DeFi Consultancy">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <div className="text-ice/90 font-medium">Token-Economics Design</div>
            <p className="text-sm text-ice/70 mt-2">Sürdürülebilir, veri temelli token ekonomileri ve teşvik mekanizmaları.</p>
          </div>
          <div className="card">
            <div className="text-ice/90 font-medium">DeFi Payment Architecture</div>
            <p className="text-sm text-ice/70 mt-2">Zincirler arası, düşük ücretli ve güvenli ödeme katmanı.</p>
          </div>
          <div className="card">
            <div className="text-ice/90 font-medium">Strategic Tech Advisory</div>
            <p className="text-sm text-ice/70 mt-2">Yatırımcı odaklı yol haritaları ve ürün stratejileri.</p>
          </div>
        </div>
      </Section>
      <Section title="PayUSDT — Highlight" subtitle="DeFi tabanlı global ödeme altyapısı">
        <div className="card">
          <p className="text-sm text-ice/80">
            Cross-chain, micro-fee, hızlı onay mimarisi. Cüzdan bağla, anında gönder/al akışı.
          </p>
          <div className="mt-4 flex gap-3">
            <a className="link-underline" href="/projects">Tüm projeler</a>
            <a className="link-underline" href="/consultancy">DeFi Consultancy</a>
          </div>
        </div>
      </Section>
    </>
  );
}