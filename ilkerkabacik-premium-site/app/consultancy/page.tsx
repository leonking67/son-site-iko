import Section from '@/components/Section';

export default function ConsultancyPage(){
  return (
    <Section title="Blockchain & DeFi Consultancy" subtitle="Ödeme mimarisi, token ekonomi, stratejik planlama">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <div className="font-medium">Token-Economics</div>
          <p className="text-sm text-ice/70 mt-2">Enflasyon, arz-talep dengesi, utility & staking modelleri.</p>
        </div>
        <div className="card">
          <div className="font-medium">Payment Architecture</div>
          <p className="text-sm text-ice/70 mt-2">Cross-chain, düşük ücret, hızlı onay; güvenlik kontrolleri.</p>
        </div>
        <div className="card">
          <div className="font-medium">Go-to-Market</div>
          <p className="text-sm text-ice/70 mt-2">Ürün konumlandırma, bütçe ve büyüme stratejileri.</p>
        </div>
      </div>
    </Section>
  );
}