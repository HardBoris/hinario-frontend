const hymnalSections = [
  { way: "/all", lettering: "Todos" },
  { way: "/worship", lettering: "Adoração" },
  { way: "/the_father", lettering: "Deus, o Pai" },
  { way: "/jesus_christ", lettering: "Jesus Cristo" },
  { way: "/holy_spirit", lettering: "Espírito Santo" },
  { way: "/holy_bible", lettering: "Sagradas Escrituras" },
  { way: "/the_gospel", lettering: "O Evangelho" },
  { way: "/christian_life", lettering: "Vida Cristã" },
  { way: "/christian_home", lettering: "Lar Cristão" },
  { way: "/church_and_doctrines", lettering: "Igreja e Doutrinas" },
  { way: "/responsive_chants", lettering: "Cânticos Responsivos" },
  { way: "/amens", lettering: "Améns" },
];

export const getHymnalSections = () => {
  return hymnalSections;
};
