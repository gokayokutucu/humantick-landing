type Section = { id: string; title: string };

export function ReferenceOnThisPageNav({
  sections,
  activeSectionId,
  onNavigate,
  onActiveChange,
}: {
  sections: Section[];
  activeSectionId: string;
  onNavigate?: () => void;
  onActiveChange?: (id: string) => void;
}) {
  return (
    <nav className="space-y-2 text-sm">
      {sections.map((section) => {
        const isActive = section.id === activeSectionId;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={() => {
              onActiveChange?.(section.id);
              onNavigate?.();
            }}
            className={`block transition-colors ${
              isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {section.title}
          </a>
        );
      })}
    </nav>
  );
}
