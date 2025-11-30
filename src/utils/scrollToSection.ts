// src/utils/scrollToSection.ts
export const scrollToSection = (sectionId: string) => {
  const target = document.getElementById(sectionId);
  if (!target) return;

  // This line forces reflow → guarantees all animations are committed before scroll
  void target.offsetHeight;

  const header = document.querySelector('header');
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const buffer = window.innerWidth < 768 ? 16 : 24;

  const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - buffer;

  window.scrollTo({ top: y, behavior: 'smooth' });
};
