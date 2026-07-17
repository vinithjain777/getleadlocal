# GetLeadLocal - Premium Digital Marketing Agency Website

A production-ready Next.js 15 website for a digital marketing agency specializing in lead generation for local service businesses (plumbing, roofing, HVAC, electrical, etc.).

## 🎯 Overview

This is a premium, custom-designed agency website built with modern web standards and best practices. It's optimized for conversions, SEO, performance, and user experience.

### Target Clients

- Plumbing companies
- Roofing companies
- Flooring companies
- Construction businesses
- HVAC companies
- Electrical contractors
- Solar companies
- Landscaping businesses
- And other home service businesses

### Services Offered

1. **Google Ads** - High-intent customer acquisition
2. **Meta Ads** - Social media lead generation
3. **Local SEO** - Dominate local search results
4. **Landing Pages** - High-converting custom pages
5. **AI Automation** - Lead capture and nurturing
6. **GoHighLevel CRM** - Complete client management

## 🛠 Tech Stack

### Core

- **Next.js 15** - App Router (latest)
- **React 19** - Latest React version
- **TypeScript** - Strict type checking
- **Tailwind CSS** - Utility-first styling

### Animations & Interactions

- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

### Forms & Validation

- **React Hook Form** - Efficient form handling
- **Zod** - Type-safe schema validation

### SEO & Meta

- **next-seo** - SEO utilities
- **Structured Data** - JSON-LD support

### Fonts

- **Geist** - Premium typeface from Vercel

## 📁 Project Structure

```
.
├── app/
│   ├── (routes)/
│   │   ├── about/          # About page
│   │   ├── services/       # Services overview
│   │   ├── industries/     # Industries list & dynamic pages
│   │   │   └── [industry]/ # Dynamic industry pages
│   │   ├── blog/           # Blog listing
│   │   └── contact/        # Contact page & form
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── animations.tsx      # Framer Motion utilities
│   ├── navbar.tsx          # Navigation bar
│   ├── hero.tsx            # Hero section
│   ├── trust-bar.tsx       # Trust indicators
│   ├── industries.tsx      # Industries section
│   ├── services.tsx        # Services section
│   ├── why-choose-us.tsx   # Why Choose Us section
│   ├── process.tsx         # Process timeline
│   ├── faq.tsx             # FAQ accordion
│   ├── final-cta.tsx       # Final call-to-action
│   ├── contact-form.tsx    # Contact form
│   └── footer.tsx          # Footer
├── lib/
│   ├── constants.ts        # All business constants
│   ├── cn.ts               # Utility classname function
│   ├── seo.ts              # SEO utilities
│   └── site.ts             # Site configuration
├── types/
│   └── index.ts            # TypeScript interfaces
├── public/
│   ├── robots.txt          # SEO robots file
│   ├── sitemap.xml         # XML sitemap
│   └── manifest.json       # PWA manifest
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
├── postcss.config.js       # PostCSS configuration
├── .eslintrc.json          # ESLint config
└── .prettierrc.json        # Prettier config
```

## 🎨 Design Features

### Color Palette

- **Primary Blue**: `#2563EB` - Main CTAs and highlights
- **Secondary Yellow**: `#FACC15` - Call-to-action buttons
- **Background**: `#FFFFFF` - Clean white
- **Text**: `#111827` - Dark slate
- **Light Background**: `#F8FAFC` - Section backgrounds

### Typography

- **Font**: Geist (premium typeface from Vercel)
- **Fallback**: Inter/System fonts
- **Sizes**: Carefully scaled from 12px to 60px

### Components

- **Cards**: Rounded corners (12px-24px), subtle shadows, hover effects
- **Buttons**: Primary (blue), Secondary (yellow), Outline styles
- **Spacing**: 16px/24px/32px grid system
- **Animations**: Subtle fade-up, slide, and scale animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone or download the project**

   ```bash
   cd "c:\Users\MY\OneDrive\Documents\LOCAL LEAD"
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The site will auto-refresh on file changes

## 📦 Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format
```

## 🔍 SEO Features

- ✅ Dynamic metadata with Open Graph tags
- ✅ Twitter Card integration
- ✅ JSON-LD structured data
- ✅ Canonical URLs
- ✅ Image optimization (WebP, AVIF)
- ✅ Alt text on all images
- ✅ robots.txt and sitemap.xml
- ✅ Semantic HTML structure
- ✅ Mobile responsiveness
- ✅ Core Web Vitals optimization

## ♿ Accessibility

- ✅ ARIA labels and descriptions
- ✅ Keyboard navigation support
- ✅ Semantic HTML (nav, main, section, etc.)
- ✅ Proper heading hierarchy
- ✅ Color contrast compliance (WCAG AA)
- ✅ Form validation and error messages

## 📊 Pages & Routes

| Route                    | Purpose                       |
| ------------------------ | ----------------------------- |
| `/`                      | Home page with all sections   |
| `/about`                 | About company page            |
| `/services`              | Services overview             |
| `/industries`            | Industries listing            |
| `/industries/[industry]` | Individual industry pages (8) |
| `/blog`                  | Blog listing                  |
| `/contact`               | Contact page with form        |

## 🎯 Sections on Home Page

1. **Sticky Navbar** - Fixed navigation with mobile menu
2. **Hero** - Headline, subheadline, CTAs, and image
3. **Trust Bar** - Google Partner, Meta Expert, etc.
4. **Industries** - 8 industry cards with images
5. **Services** - 6 service cards with features
6. **Why Choose Us** - 6 value proposition cards
7. **Process** - 6-step timeline
8. **FAQ** - Accordion with 6 questions
9. **Final CTA** - Call-to-action section
10. **Footer** - Links, contact info, socials

## 🔧 Customization

### Update Company Info

Edit `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: "Your Company Name",
  description: "Your company description",
  url: "https://yourwebsite.com",
};
```

### Add/Edit Industries

Update `INDUSTRIES` array in `lib/constants.ts`:

```typescript
{
  id: "your-industry",
  name: "Your Industry",
  description: "Description",
  icon: "IconName", // from lucide-react
  link: "/industries/your-industry",
  image: "https://images.unsplash.com/...",
}
```

### Update Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: "#YourColor",
    600: "#DarkerShade",
  },
  secondary: {
    500: "#YourCTAColor",
  },
}
```

## 📤 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect to Vercel
3. Vercel auto-detects Next.js
4. Deploy with one click

```bash
npm i -g vercel
vercel
```

### Other Platforms

The site is optimized for:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Railway**
- **Any Node.js host**

## 🔐 Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## 📝 Content Updates

### Update Home Page Hero

Edit `components/hero.tsx`

### Update Industries Section

Edit `components/industries.tsx` and `lib/constants.ts`

### Update Services Section

Edit `components/services.tsx` and `lib/constants.ts`

### Update FAQ

Edit `components/faq.tsx`

## 🐛 Troubleshooting

### Build errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Port already in use

```bash
# Use different port
npm run dev -- -p 3001
```

### Dependencies issues

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📈 Performance Tips

1. **Images**: Use Unsplash/Pexels for high-quality images
2. **Code Splitting**: Components are automatically split
3. **Lazy Loading**: Images use Next/Image optimization
4. **Caching**: Leverage browser and server caching

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Test locally: `npm run dev`
3. ✅ Update company information
4. ✅ Add real images and content
5. ✅ Customize colors and fonts
6. ✅ Set up contact form email notifications
7. ✅ Deploy to Vercel
8. ✅ Set up Google Analytics
9. ✅ Submit sitemap to Google Search Console

## 📄 License

This project is proprietary. All rights reserved.

## 💬 Support

For questions or issues, contact the development team.

---

**Built with ❤️ for local service businesses**
