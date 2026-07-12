# Diseño del Portfolio Personal

## Resumen

Portfolio web personal para un programador junior. Será una aplicación Nuxt 4 de una sola página con navegación por scroll, diseño oscuro, minimalista y clásico, organizado por features con componentes Vue 3, composables y CSS Modules.

## Objetivos

- Presentar al usuario como desarrollador junior de forma profesional y clara.
- Facilitar la edición futura del contenido mediante un único archivo de datos.
- Aplicar buenas prácticas de Vue 3 / Nuxt: Composition API, componentes enfocados, composables reutilizables y CSS Modules.
- Ofrecer una experiencia visual limpia, responsive y con micro-interacciones sutiles.

## Alcance incluido

- Página de inicio (`/`) con las siguientes secciones:
  1. Hero
  2. Sobre mí
  3. Skills
  4. Proyectos
  5. Experiencia laboral
  6. Educación y certificaciones
  7. Contacto + footer
- Navegación fija con scroll suave y resaltado de sección activa.
- Botón para descargar CV (archivo `public/cv.pdf`).
- Datos editables centralizados en `frontend/app/features/portfolio/content/portfolio.ts`.
- Placeholders realistas para proyectos, experiencia, educación y skills.
- Foto de perfil como placeholder editable.

## Alcance excluido

- Blog o páginas adicionales.
- Formulario de contacto funcional (solo enlaces directos).
- Modo claro / selector de tema.
- Animaciones complejas o dependencias de animación externas.

## Decisiones de diseño

### Estilo visual

- **Dirección:** minimalista, limpio, oscuro y clásico.
- **Paleta de colores:**
  - Fondo principal: `#0a0a0f`
  - Superficies: `#12121a`
  - Bordes: `#1f1f2e`
  - Texto principal: `#e8e8ef`
  - Texto secundario: `#9ca3af`
  - Acento: `#c9a86c`
- **Tipografía:**
  - Títulos: `Playfair Display` (Google Fonts).
  - Cuerpo y UI: `Source Sans 3` (Google Fonts).

### Layout

- Single-page con navegación fija superior.
- Secciones apiladas verticalmente con generoso espaciado.
- Diseño responsive: mobile-first.
- Contenedor máximo de ~1100px centrado.

## Estructura del proyecto

```
frontend/
├── app/
│   ├── app.vue
│   ├── pages/
│   │   └── index.vue
│   └── features/
│       └── portfolio/
│           ├── components/
│           │   ├── PortfolioHeader.vue
│           │   ├── PortfolioHero.vue
│           │   ├── PortfolioAbout.vue
│           │   ├── PortfolioSkills.vue
│           │   ├── PortfolioProjects.vue
│           │   ├── PortfolioExperience.vue
│           │   ├── PortfolioEducation.vue
│           │   ├── PortfolioContact.vue
│           │   └── PortfolioFooter.vue
│           ├── composables/
│           │   ├── usePortfolio.ts
│           │   ├── useScrollReveal.ts
│           │   └── useActiveSection.ts
│           ├── content/
│           │   └── portfolio.ts
│           ├── styles/
│           │   ├── PortfolioHeader.module.css
│           │   ├── PortfolioHero.module.css
│           │   ├── PortfolioAbout.module.css
│           │   ├── PortfolioSkills.module.css
│           │   ├── PortfolioProjects.module.css
│           │   ├── PortfolioExperience.module.css
│           │   ├── PortfolioEducation.module.css
│           │   ├── PortfolioContact.module.css
│           │   └── PortfolioFooter.module.css
│           └── types/
│               └── portfolio.ts
├── public/
│   ├── cv.pdf
│   └── profile.jpg (placeholder)
└── nuxt.config.ts
```

## Componentes

Cada componente es responsable de una sola sección del portfolio.

| Componente | Responsabilidad |
|------------|-----------------|
| `PortfolioHeader.vue` | Navegación fija, links de sección, menú móvil. |
| `PortfolioHero.vue` | Nombre, título, descripción corta, foto, CTAs. |
| `PortfolioAbout.vue` | Descripción personal extendida. |
| `PortfolioSkills.vue` | Grid de habilidades agrupadas por categoría. |
| `PortfolioProjects.vue` | Tarjetas de proyectos con tecnologías y links. |
| `PortfolioExperience.vue` | Línea de tiempo de experiencia laboral. |
| `PortfolioEducation.vue` | Educación y certificaciones. |
| `PortfolioContact.vue` | Email, LinkedIn, GitHub y mensaje de cierre. |
| `PortfolioFooter.vue` | Copyright y créditos. |

## Composables

| Composable | Responsabilidad |
|------------|-----------------|
| `usePortfolio()` | Expone todos los datos del archivo `content/portfolio.ts`. |
| `useScrollReveal()` | Aplica animaciones de entrada al hacer scroll (CSS-only, con Intersection Observer). |
| `useActiveSection()` | Detecta qué sección está visible para resaltar el link de navegación. |

## Datos y contenido

El archivo `content/portfolio.ts` contendrá toda la información editable:

- `profile`: nombre, título, descripción, email, LinkedIn, GitHub, ubicación.
- `about`: texto extendido.
- `skills`: array de categorías con lista de tecnologías.
- `projects`: array con título, descripción, tecnologías, links.
- `experience`: array con puesto, empresa, fechas, descripción.
- `education`: array con título, institución, año, descripción opcional.

Los textos se inicializarán con placeholders realistas que el usuario podrá reemplazar fácilmente.

## Estilos

- Cada componente tendrá su propio archivo `.module.css`.
- Se importarán como `import styles from './styles/Component.module.css'`.
- Variables CSS globales para colores, tipografía y espaciado en `app.vue` o en un archivo global.
- Mobile-first con media queries.
- Sin frameworks CSS externos.

## Interacciones

- Scroll suave al hacer clic en links de navegación.
- Resaltado del link activo según la sección visible.
- Fade-in sutil de secciones al entrar en viewport.
- Hover en tarjetas: ligera elevación y cambio de borde.
- Botón de CV: descarga directa de `public/cv.pdf`.

## Requisitos técnicos

- Nuxt 4 con Vue 3.5+.
- TypeScript en todos los componentes y composables.
- Composition API con `<script setup lang="ts">`.
- Uso de `shallowRef` para valores primitivos y `computed` para derivados.
- CSS Modules para aislamiento de estilos.
- Google Fonts cargadas vía `nuxt.config.ts` o link en `app.vue`.

## Accesibilidad

- Navegación por teclado funcional.
- Contraste de colores adecuado (texto claro sobre fondo oscuro).
- Atributos `aria-label` en iconos y botones.
- Imágenes con `alt` descriptivo.

## Criterios de aceptación

- [ ] El proyecto compila sin errores (`pnpm dev` funciona).
- [ ] La página muestra todas las secciones definidas.
- [ ] El contenido es editable desde `content/portfolio.ts`.
- [ ] La navegación permite saltar entre secciones.
- [ ] El diseño se ve correctamente en móvil, tablet y desktop.
- [ ] Las animaciones de scroll funcionan sin dependencias externas.
- [ ] El botón de CV descarga el archivo correcto.

## Próximos pasos

1. Crear el plan de implementación detallado.
2. Implementar la estructura de carpetas y archivos.
3. Configurar Google Fonts y variables globales.
4. Crear datos, tipos y composables.
5. Implementar componentes y estilos.
6. Verificar build y responsive.
