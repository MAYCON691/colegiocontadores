export type MenuItem = {
  label: string;
  href?: string;
  external?: boolean;
  children?: MenuItem[];
};

export const menuItems: MenuItem[] = [
  {
    label: "Inicio",
    href: "/#inicio",
  },
  {
    label: "Directorio",
    href: "/Directorio",
  },
  {
    label: "Asociados",
    href: "/asociados",
  },
  {
    label: "Actividades",
    href: "/actividades",
    children: [
      {
        label: "Eventos",
        href: "/actividades/eventos",
      },
      {
        label: "Boletín",
        href: "/actividades/boletin",
      },
      {
        label: "Servicios",
        href: "/actividades/servicios",
        children: [
          {
            label: "Solvencias",
            href: "/actividades/servicios/solvencias",
          },
          {
            label: "Legalizaciones",
            href: "/actividades/servicios/legalizaciones",
          },
          {
            label: "Ambientes",
            href: "/actividades/servicios/ambientes",
          },
        ],
      },
    ],
  },
  {
    label: "Normativas",
    href: "/normativas",
  },
  {
    label: "Convenios",
    href: "/convenios",
  },
  {
    label: "Galería",
    href: "/galeria",
  },
  {
    label: "Noticias",
    href: "/noticias",
  },
  {
    label: "Contactos",
    href: "/contactos",
  },
  {
    label: "Tour 360",
    href: "/tour360",
  },
];

export const quickLinks = [
  {
    label: "Gestión de Asociados",
    href: "http://siga.cclapaz.org/syscc/asociado",
  },
  {
    label: "Verificación de Solvencia",
    href: "http://siga.cclapaz.org/syscc/buscar.php",
  },
  {
    label: "Consulta Asociado",
    href: "http://siga.cclapaz.org/syscc/consulta.php",
  },
];