# Portfolio Technical Handover Guide

> [!NOTE]
> This document exists for maintainability and future expansion. The portfolio itself is intentionally simple and human-focused. Recruiters are not expected to read this.

This document is a technical summary of the "Protofilo" project architecture, designed for developers or AI agents.

## Project Architecture
- **Vite Build System**: Rapid dev server and optimized rollup builds.
- **Vanilla JS Core**: Near-zero overhead.
- **CSS-First Design**: GPU animations and tokenized variables in `:root`.

## Maintenance & Expansion
- **Adding Projects**: Use the pre-styled `.project-card` class in `index.html`.
- **Transitions**: Controlled via `--transition-smooth` token in `style.css`.
## Maintenance & Expansion
- **Adding Projects**: Use the pre-styled `.project-card` class in `index.html`.
- **Transitions**: Controlled via `--transition-smooth` token in `style.css`.
- **Scroll Handling**: Uses `IntersectionObserver` for animations and an optimized `requestAnimationFrame` listener with `{ passive: true }` for navbar transforms.
- **Accessibility**: Includes `prefers-reduced-motion` logic and `focus-visible` utilities to meet modern web standards.

*For more details on specific file responsibilities, refer to the comments within the code.*

*For more details on specific file responsibilities, refer to the comments within the code.*
