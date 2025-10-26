import Section from '@/components/Section';

export default function AstroPage(){
  return (
    <Section title="Astro Leadership Map" subtitle="Founder DNA — Aslan Güneşi • İkizler Yükseleni">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <div className="font-medium">Vision & Stage Energy (Aslan)</div>
          <p className="text-sm text-ice/70 mt-2">Liderlik ateşi, görünürlük ve itici güç.</p>
        </div>
        <div className="card">
          <div className="font-medium">Communication & Code (İkizler)</div>
          <p className="text-sm text-ice/70 mt-2">Hızlı öğrenme, anlatı kurma, sistemleştirme.</p>
        </div>
        <div className="card">
          <div className="font-medium">System Architecture (Merkür)</div>
          <p className="text-sm text-ice/70 mt-2">Süreç, modülerlik ve ölçeklenebilirlik zekâsı.</p>
        </div>
      </div>
    </Section>
  );
}