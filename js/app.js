function site() {
  return {
    mobileOpen: false,
    scrolled: false,
    year: new Date().getFullYear(),
    init() {
      const onScroll = () => { this.scrolled = window.scrollY > 10 };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  };
}
