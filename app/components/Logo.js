function Logo() {
  return (
    <a href="/" className="flex items-center gap-4 z-10">
      <img src="/logo.png" height="60" width="60" alt="The Green Heaven logo" />
      <span className="text-xl font-semibold text-primary-100">
        The Green Heaven
      </span>
    </a>
  );
}

export default Logo;
