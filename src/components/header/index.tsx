function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center space-y-2 mb-6">
      <h1 className="font-bold font-serif text-6xl sm:text-5xl">{title}</h1>
      <h2 className="text-xl font-serif font-light uppercase tracking-wide">
        {subtitle}
      </h2>
    </div>
  );
}

export default Header;
