
# Telquel Magazine Website

Project Overview
A modern, responsive news website for Telquel, a leading Moroccan magazine, built with cutting-edge web technologies to deliver a premium reading experience.


## Core Technologies

### 1. Next.js (v13.5.1)

**Purpose:**

- Server-side rendering (SSR) for improved SEO
- Static site generation for better performance
- File-based routing system
- Built-in image optimization
- API routes for backend functionality

### 2. React (v18.2.0)

**Purpose:**

- Component-based UI architecture
- State management using hooks
- Client-side interactivity
- Virtual DOM for efficient updates

### 3. TypeScript (v5.2.2)

**Purpose:**

- Static type checking
- Enhanced IDE support
- Better code maintainability
- Improved developer experience

### 4. Tailwind CSS (v3.3.3)

**Purpose:**

- Utility-first CSS framework
- Responsive design
- Dark mode support
- Custom theming
- Rapid UI development

## UI Components & Libraries

### 1. shadcn/ui

**Purpose:**

- Accessible UI components
- Customizable design system
- Consistent styling
- Pre-built components including:
    - Navigation menus
    - Buttons
    - Cards
    - Forms
    - Modals

### 2. Lucide React

**Purpose:**

- Modern icon system
- Consistent icon design
- SVG-based icons
- Easy integration

### 3. next-themes

**Purpose:**

- Theme management
- Dark/light mode switching
- System preference detection
- Persistent theme storage

## Font System

### 1. Google Fonts

- **Inter**: Primary body font
- **Playfair Display**: Magazine title and headlines **Purpose:**
- Typography hierarchy
- Brand identity
- Readability
- Performance optimization

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── header.tsx       # Site header
│   ├── footer.tsx       # Site footer
│   └── theme-provider.tsx
├── lib/
│   └── utils.ts         # Utility functions
```

## Key Features

### 1. Responsive Design

- Mobile-first approach
- Breakpoint system
- Flexible layouts

### 2. Theme System

- Light/dark mode support
- CSS variables for theming
- Custom color palette
- Smooth theme transitions

### 3. Performance Optimization

- Image optimization
- Font optimization
- Code splitting
- Static generation

### 4. Accessibility

- ARIA attributes
- Keyboard navigation
- Screen reader support
- Color contrast compliance

### 5. SEO

- Meta tags
- Semantic HTML
- Server-side rendering
- Structured data

## Development Tools

### 1. ESLint

**Purpose:**

- Code quality
- Consistent coding style
- Error prevention

### 2. PostCSS

**Purpose:**

- CSS processing
- Autoprefixer
- Tailwind CSS processing

### 3. Development Scripts

```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## Build Configuration

- Static site export enabled
- ESLint configured
- Unoptimized images for static export
- TypeScript strict mode
- Module path aliases

This documentation provides a high-level overview of the project's technical architecture and the purpose of each technology used. The combination of these technologies creates a modern, performant, and maintainable news website.

If you wanna see how it looks like its live in here 
https://extraordinary-donut-20a358.netlify.app/


