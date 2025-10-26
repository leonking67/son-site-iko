import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage(){
  return (
    <Section title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard title="PayUSDT" tag="DeFi" summary="DeFi tabanlı global ödeme altyapısı: cross-chain, micro-fee, hızlı onay." />
        <ProjectCard title="ASLAN Runner" tag="Game" summary="İstanbul temalı arcade mobil oyun. Unity tabanlı." />
        <ProjectCard title="CraftZone" tag="Game" summary="Sandbox / boş dünya konseptiyle multiplayer." />
        <ProjectCard title="ASLAN-XR 4000 LB" tag="Defense" summary="Simülasyon, GNSS-INS, fail-safe yapılar ve kontrol yazılımları." />
        <ProjectCard title="ASLAN-SİHA" tag="Aerospace" summary="Gelişmiş insansız hava aracı; stratejik AI entegrasyonu." />
        <ProjectCard title="Aladdin-Lite" tag="AI/Finance" summary="BlackRock Aladdin benzeri yatırım zekâsı ve veri analizi." />
        <ProjectCard title="Health Field" tag="Confidential" summary="Confidential & NDA-Locked Research." />
      </div>
    </Section>
  );
}