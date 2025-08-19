# VJIT Space Team 🚀🌌

A modern, interactive website for the VJIT (Vignan's Institute of Information Technology) Space Team, showcasing our journey in space exploration, innovation, and student-led research projects. Built with Next.js 15, TypeScript, and cutting-edge web technologies.

## 🌟 About VJIT Space Team

The **VJIT Space Team** is a passionate group of students committed to space exploration and technological innovation. Founded in 2022, we unite engineering students from diverse disciplines to collaborate on innovative projects that push the boundaries of science and technology.

### 🎯 Our Mission
To inspire and educate the next generation of space enthusiasts while developing innovative solutions for space exploration challenges. We aim to bridge the gap between academic knowledge and practical applications in the space industry.

### 🏆 Our Achievements
- **10+ Projects Completed** - Various space-related research and development projects
- **2 Awards Won** - Recognition for excellence in space competitions
- **50+ Team Members** - Growing community of space enthusiasts and engineers

## 🌐 Website Features

### 🎨 Modern User Interface
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark Theme**: Professional space-themed dark mode interface
- **Smooth Animations**: Framer Motion powered interactions and transitions
- **Gradient Accents**: Beautiful purple-to-blue gradients throughout

### 📱 Interactive Sections
- **Hero Section**: Engaging landing with call-to-action buttons
- **About Us**: Team mission, values, and core principles
- **Past Experience**: Interactive carousel showcasing our projects
- **Contact Form**: Functional contact form for inquiries and recruitment
- **Footer**: Complete contact information and social links

### 🏗️ Technical Excellence
- **Next.js 15**: Latest Next.js with App Router and React 19
- **TypeScript**: Full type safety and enhanced developer experience
- **Tailwind CSS 4**: Modern styling with CSS variables and dark mode
- **Shadcn/UI**: Beautiful, accessible component library
- **Framer Motion**: Smooth animations and page transitions

## 🚀 Our Projects & Experiences

### 🛰️ CanSat Competition 2022
- Designed and built a small satellite prototype
- Successfully launched to 1km altitude
- Collected atmospheric data during descent
- **Achievement**: Best Design Award ⭐

### 🌍 World CanSat Rocketry Competition (WCRC)
- International challenge for miniaturized satellites
- Deployed CanSats from rockets at 1-2km altitude
- Completed specific missions including data collection
- **Achievement**: Best Innovation Award

### 🏢 SMOPS 2022 Conference
- Attended prestigious space conference in Bengaluru
- Engaged with ISRO scientists and researchers
- Discussed advancements in space technology
- Networking with global space community

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 15.2.0**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **TypeScript 5**: Static type checking and modern JavaScript

### UI & Styling
- **Tailwind CSS 4**: Utility-first CSS framework
- **Shadcn/UI**: Component library with Radix UI primitives
- **Lucide React**: Beautiful, customizable icon library
- **Framer Motion**: Animation and gesture library
- **Next Themes**: Theme switching capabilities

### Development Tools
- **ESLint 9**: Code linting with Next.js configuration
- **PostCSS**: CSS processing and optimization
- **PNPM**: Fast, disk space efficient package manager

### Component Architecture
- **Radix UI Slot**: Flexible component composition
- **Class Variance Authority**: Type-safe component variants
- **Tailwind Merge**: Efficient class name merging
- **CLSX**: Conditional class name utility

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.0.0 or higher
- **PNPM** (preferred) or **npm**/**yarn**
- **Git** for version control

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd vjit-space-team
   ```

2. **Install dependencies**:
   ```bash
   # Using PNPM (recommended)
   pnpm install
   
   # Or using npm
   npm install
   
   # Or using yarn
   yarn install
   ```

3. **Start development server**:
   ```bash
   # Using PNPM
   pnpm dev
   
   # Or using npm
   npm run dev
   
   # Or using yarn
   yarn dev
   ```

4. **Open in browser**:
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The page auto-updates as you edit files

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start

# Or build and export static files
pnpm build && pnpm export
```

## 📁 Project Structure

```
vjit-space-team/
├── public/                    # Static assets
│   ├── cansat-2022.jpg       # CanSat project image
│   ├── image2.jpg            # WCRC project image  
│   ├── image3.jpg            # Team photo
│   ├── image4.jpg            # SMOPS conference image
│   ├── logo.png              # VJIT Space Team logo
│   ├── white_logo.png        # White variant logo
│   └── *.svg                 # Various SVG icons
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout component
│   │   ├── page.tsx          # Home page component
│   │   └── globals.css       # Global styles
│   ├── components/           # React components
│   │   ├── ui/              # Shadcn/UI components
│   │   │   ├── button.tsx   # Button component
│   │   │   ├── input.tsx    # Input component
│   │   │   └── textarea.tsx # Textarea component
│   │   ├── about-us.tsx     # About section
│   │   ├── contact-form.tsx # Contact form
│   │   ├── footer.tsx       # Footer component
│   │   ├── hero.tsx         # Hero section
│   │   ├── navbar.tsx       # Navigation bar
│   │   ├── past-experience.tsx # Projects carousel
│   │   └── theme-provider.tsx  # Theme context
│   └── lib/
│       └── utils.ts         # Utility functions
├── components.json          # Shadcn/UI configuration
├── next.config.ts          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Component Overview

### 🏠 Hero Section (`hero.tsx`)
- Eye-catching landing section with gradient text
- Animated call-to-action buttons
- Smooth scroll navigation
- Background overlay effects

### ℹ️ About Us (`about-us.tsx`)
- Team mission and values presentation
- Feature cards with icons (Innovation, Excellence, Teamwork, Achievement)
- Team photo with overlay effects
- Animated content reveals on scroll

### 📊 Past Experience (`past-experience.tsx`)
- Interactive project carousel
- Project details with achievements
- Navigation controls and indicators
- Achievement statistics display

### 📬 Contact Form (`contact-form.tsx`)
- Functional contact form with validation
- Contact information cards
- Axios integration for form submission
- Loading states and error handling

### 🧭 Navigation (`navbar.tsx`)
- Responsive navigation bar
- Smooth scroll to sections
- Mobile-friendly hamburger menu
- Logo and branding integration

## ⚙️ Configuration

### Next.js Configuration (`next.config.ts`)
```typescript
const nextConfig: NextConfig = {
  // Add custom configurations here
  images: {
    domains: ['localhost'], // Add image domains as needed
  },
};
```

### Tailwind Configuration (`tailwind.config.js`)
- Custom color palette with CSS variables
- Dark mode configuration
- Custom animations and utilities
- Component-specific styling extensions

### Shadcn/UI Configuration (`components.json`)
- Component library setup with "new-york" style
- TypeScript and RSC enabled
- Custom aliases for imports
- Lucide icons integration

## 🎨 Design System

### Color Palette
- **Primary**: Purple to Blue gradients (`purple-500` to `blue-500`)
- **Background**: Dark theme with neutral tones
- **Accent**: Gradient borders and highlights
- **Text**: High contrast for accessibility

### Typography
- **Headers**: Bold fonts with gradient text effects
- **Body**: Clean, readable font hierarchy
- **Accents**: Gradient clipping for visual impact

### Animations
- **Page Load**: Staggered content reveals
- **Hover Effects**: Subtle transitions and transformations
- **Scroll Animations**: Content appears as user scrolls
- **Interactive Elements**: Button hovers and focus states

## 🔧 Development

### Available Scripts
```bash
# Development server with Turbopack
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Code linting
pnpm lint

# Type checking
pnpm type-check
```

### Adding New Components
1. **Shadcn/UI Components**:
   ```bash
   pnpm dlx shadcn@latest add [component-name]
   ```

2. **Custom Components**:
   - Create in `src/components/`
   - Follow TypeScript and React best practices
   - Use Tailwind for styling
   - Add proper prop types

### Code Quality
- **ESLint**: Configured with Next.js rules
- **TypeScript**: Strict type checking enabled
- **Prettier**: Code formatting (add if needed)
- **Git Hooks**: Pre-commit linting (add if needed)

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Production deployment
vercel --prod
```

### Other Platforms
- **Netlify**: Connect GitHub repository
- **Railway**: Git-based deployment
- **DigitalOcean**: App Platform deployment
- **AWS Amplify**: Continuous deployment

### Environment Variables
```bash
# .env.local (for local development)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_FORM_API=/api/contact

# Production environment variables
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📞 Contact Information

### Get in Touch
- **Email**: ecehod@vjit.ac.in
- **Phone**: +91 7780448692
- **Address**: VJIT Campus, Hyderabad, India
- **Website**: [Visit our site](http://localhost:3000)

### Join Our Team
Interested in joining the VJIT Space Team? We welcome students from all engineering disciplines who are passionate about space exploration and innovation.

**What we offer:**
- Hands-on experience with space technologies
- Participation in national and international competitions
- Networking opportunities with industry professionals
- Research and development projects
- Leadership and teamwork skills development

## 🤝 Contributing

### How to Contribute
1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** with proper testing
4. **Commit changes**: `git commit -m 'Add amazing feature'`
5. **Push to branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Development Guidelines
- **Follow TypeScript best practices**
- **Use Tailwind for styling consistency**
- **Maintain responsive design principles**
- **Add proper error handling**
- **Write meaningful commit messages**
- **Test on multiple devices and browsers**

### Content Updates
- **Project Updates**: Add new projects to `past-experience.tsx`
- **Team Information**: Update team details in `about-us.tsx`
- **Contact Information**: Modify contact details in `contact-form.tsx`
- **Images**: Add new images to `public/` folder

## 🔍 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   pnpm dev
   ```

2. **Type Errors**
   ```bash
   # Run type checking
   pnpm tsc --noEmit
   ```

3. **Styling Issues**
   ```bash
   # Rebuild Tailwind
   pnpm build:css
   ```

4. **Package Issues**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

## 📊 Performance

### Optimization Features
- **Next.js Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic bundle splitting
- **CSS Optimization**: Tailwind CSS purging
- **Font Optimization**: Next.js font optimization
- **Static Generation**: Pre-rendered pages for better performance

### Monitoring
- **Web Vitals**: Core web vitals tracking
- **Analytics**: Add Google Analytics or similar
- **Performance**: Lighthouse score optimization
- **SEO**: Meta tags and structured data

## 🌟 Future Enhancements

### Planned Features
- **Blog Section**: Share updates and achievements
- **Member Profiles**: Showcase team members
- **Project Gallery**: Detailed project documentation
- **Event Calendar**: Upcoming events and meetings
- **Alumni Network**: Connect with former members

### Technical Improvements
- **API Integration**: Backend for contact form
- **Database**: Store team and project information
- **Authentication**: Member login system
- **CMS Integration**: Content management system
- **Mobile App**: React Native companion app

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **VJIT Faculty**: For guidance and support
- **Team Members**: For dedication and hard work
- **ISRO**: For inspiring our space endeavors
- **Open Source Community**: For amazing tools and libraries

---

**🚀 Exploring the Cosmos, One Project at a Time! 🌌**

*Built with ❤️ by the VJIT Space Team*
