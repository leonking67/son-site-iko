import Section from '@/components/Section';

export default function ContactPage(){
  return (
    <Section title="Let’s build the system" subtitle="Projeni özetle, sana dönüş yapayım.">
      <form
        className="grid md:grid-cols-2 gap-6 card"
        action="https://formspree.io/f/your-form-id"
        method="POST"
      >
        <div>
          <label className="text-sm text-ice/80">Name</label>
          <input name="name" required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-secondary/60" />
        </div>
        <div>
          <label className="text-sm text-ice/80">Email</label>
          <input type="email" name="email" required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-secondary/60" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-ice/80">Purpose</label>
          <input name="purpose" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-secondary/60" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-ice/80">Message</label>
          <textarea name="message" rows={5} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-secondary/60" />
        </div>
        <div className="md:col-span-2 flex justify-end">
          <button className="px-5 py-3 rounded-xl bg-secondary text-white shadow-soft hover:opacity-90" type="submit">Send</button>
        </div>
      </form>
      <p className="text-xs text-ice/50 mt-4">İstersen Google Form bağlantısı da eklenebilir.</p>
    </Section>
  );
}