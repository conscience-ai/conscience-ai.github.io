export default function FooterImage() {
  return (
    <section className="w-full h-[400px] px-12 py-0 bg-[var(--color-bg-warm)] font-dm-sans">
      <div
        className="w-full h-full rounded-[16px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/main-images/footer-bg.jpg')" }}
      />
    </section>
  );
}
