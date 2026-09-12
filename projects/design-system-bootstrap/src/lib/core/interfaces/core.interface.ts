/**
 * Temas visuales disponibles en el sistema de diseño.
 */
export type Themes = 
    | 'primary'
    | 'secondary' 
    | 'success' 
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';

/** Tipo de tema para badges. */
export type BadgeType = Themes;

/** Clases de texto disponibles para badges. */
export type BadgeTypeText = 'text-white' | 'text-dark';

/** Tipo de tema para botones. */
export type ButtonType = Themes;

/** Tipo de tema para el estado visual del input, por ejemplo validación. */
export type InputType = Themes;

/** Tipo de tema para el color del texto. */
export type TextType = Themes;

/**
 * Configuración de un botón dentro de un grupo de botones.
 */
export interface ButtonGroupData {
  /** Identificador único del botón */
  idButton: string;

  /** Tipo visual del botón */
  type: ButtonType;

  /** Texto visible del botón */
  text: string;
}

/**
 * Representa un enlace de navegación.
 */
export interface NavLink {
    /** Texto visible del enlace */
    text: string;
    /** Url asociada al enlace */
    url: string;
}

/**
 * Configuración de la barra de navegación.
 */
export interface NavbarConfig {
  /** Título principal del Navbar */
  title: string;

  /** Configuración del icono del Navbar */
  iconConfig: NavbarIconConfig;

  /** Lista de enlaces de navegación */
  navLinks: NavLink[];
}

/**
 * Configuración del icono de la barra de navegación.
 */
export interface NavbarIconConfig {
    /** Nombre del icono (sin el prefijo `bi-`) */
    icon: string;

    /** Tamaño del icono en unidades `rem` */
    size: number;
}

export interface InputConfig {
  /** Texto de ayuda mostrado cuando el campo está vacío */
  placeholder?: string;
  /** Valor actual del input */
  value: string;
  /** Tipo HTML del input */
  type?: 'text' | 'search' | 'email' | 'password';
  /** Tema visual (ej. borde rojo si theme = 'danger' en validación) */
  theme?: InputType;
  /** Si el input está deshabilitado */
  disabled?: boolean;
}

/**
 * Configuración de un bloque de texto tipográfico.
 */
export interface TextConfig {
  /** Contenido textual a mostrar */
  content: string;
  /** Variante tipográfica */
  variant: 'title' | 'subtitle' | 'body' | 'caption';
  /** Color/tema del texto */
  theme?: TextType;
}