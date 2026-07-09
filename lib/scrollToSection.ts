export function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
  
    el.scrollIntoView({ behavior: "smooth" });
  
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
  }