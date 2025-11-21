# The Bearded Developer Website

A modern, responsive website built with Next.js 14, featuring a blog system, portfolio showcase, and business services pages. The site uses the App Router, Tailwind CSS for styling, and includes features like cookie consent management, contact forms, and dynamic article indexing.

## 🏗️ Architecture Overview

This is a Next.js 14 application using the `app/` directory structure with the following key architectural decisions:

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS v4 + SCSS for global styles
- **Deployment**: Cloudflare Pages via OpenNext
- **Content Management**: File-based articles with JSON metadata
- **Analytics**: Google Tag Manager integration
- **Font System**: Montserrat via next/font optimization

## 📁 Project Structure

```text
├── public/                          # Static assets
│   ├── img/                        # Images organized by type
│   │   ├── articles/               # Article images by slug
│   │   ├── client-logos/           # Client brand assets
│   │   ├── projects/               # Project screenshots
│   │   └── tech-logos/             # Technology brand assets
│   └── robots.txt                  # SEO crawler instructions
├── scripts/                        # Build and utility scripts
│   └── index-articles.js          # Article indexing automation
├── src/                            # Source code
│   ├── app/                        # Next.js App Router pages
│   │   ├── layout.js              # Root layout with providers
│   │   ├── page.js                # Homepage
│   │   ├── sitemap.js             # Dynamic sitemap generation
│   │   ├── globals.scss           # Global styles
│   │   ├── api/                   # API routes
│   │   │   └── contact/           # Contact form endpoint
│   │   ├── contact/               # Contact page
│   │   ├── cookies/               # Cookie policy page
│   │   ├── privacy/               # Privacy policy page
│   │   ├── projects/              # Portfolio showcase
│   │   ├── resources/             # Resource hub
│   │   │   ├── articles/          # Blog articles (file-based)
│   │   │   └── components/        # Component documentation
│   │   └── services/              # Service pages
│   ├── components/                # Reusable UI components
│   │   ├── articles/              # Article-related components
│   │   ├── common/                # Shared UI components
│   │   ├── cookie-consent/        # GDPR compliance components
│   │   ├── sections/              # Page section components
│   │   └── ...                    # Feature-specific components
│   ├── data/                      # Generated data files
│   │   └── article-index.json     # Auto-generated article metadata
│   └── hooks/                     # Custom React hooks
└── Configuration Files
    ├── next.config.mjs            # Next.js configuration
    ├── tailwind.config.js         # Tailwind CSS configuration
    ├── postcss.config.mjs         # PostCSS configuration
    ├── jsconfig.json              # JavaScript/path configuration
    ├── wrangler.jsonc             # Cloudflare Workers configuration
    └── open-next.config.ts        # OpenNext deployment configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/NetworkMonk/the-bearded-developer.git
   cd the-bearded-developer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables** (optional for basic development)

   ```bash
   # For contact form functionality (production only)
   SMTP2GO_API_KEY=your_smtp2go_key
   
   # For Google Analytics (optional)
   NEXT_PUBLIC_GTM_ID=your_gtm_id
   
   # For cookie domain configuration (optional)
   NEXT_PUBLIC_COOKIE_DOMAIN=.yourdomain.com
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build production application |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint code quality checks |
| `npm run index-articles` | **Critical**: Regenerate article index after content changes |
| `npm run preview` | Build and preview with Cloudflare |
| `npm run deploy` | Deploy to Cloudflare Pages |
| `npm run cf-typegen` | Generate Cloudflare environment types |

## 🔧 Environment Variables

### Required for Production

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP2GO_API_KEY` | SMTP2GO API key for contact form emails | `api-xxx` |

### Optional

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager ID for analytics | `GTM-XXXXXXX` |
| `NEXT_PUBLIC_COOKIE_DOMAIN` | Cookie domain for GDPR consent management | `.yourdomain.com` |

## 📝 Content Management

### Adding New Articles

The site uses a file-based article system. Each article requires:

1. **Create article directory**

   ```text
   src/app/resources/articles/your-article-slug/
   ```

2. **Add required files**

   ```text
   your-article-slug/
   ├── meta.json          # Article metadata (required)
   └── page.js           # Article content component (required)
   ```

3. **Add article assets**

   ```text
   public/img/articles/your-article-slug/
   ├── thumbnail.png     # List view thumbnail
   ├── hero-image.png    # Article header image
   └── ...               # Additional article images
   ```

4. **Regenerate article index** (Critical!)

   ```bash
   npm run index-articles
   ```

### Article Metadata Schema

```json
{
  "title": "Article Title",
  "subTitle": "Article Subtitle",
  "description": "SEO description",
  "date": "2024-01-15",
  "author": "Author Name",
  "image": "/img/articles/slug/hero.png",
  "tags": ["tag1", "tag2"],
  "metadata": {
    "title": "Full SEO title",
    "description": "SEO meta description",
    "robots": "index, follow"
  }
}
```

## 🎨 Styling System

### Tailwind CSS

The project uses Tailwind CSS v4 with custom brand colors:

```javascript
// Brand colors defined in tailwind.config.js
brand: {
  black: "#131515",
  orange: "#EE6123", 
  teal: "#028090",
  blue: "#006D77",
  "light-blue": "#83C5BE",
  "light-orange": "#FFDDD2",
  platinum: "#EDF6F9"
}
```

### SCSS Integration

Global styles in `src/app/globals.scss` complement Tailwind for:

- Button animations
- Complex component styling
- CSS custom properties

## 🔌 API Endpoints

### POST `/api/contact`

Contact form submission endpoint using SMTP2GO.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "message": "Your message here",
  "company": "Optional company name"
}
```

**Response:**

```json
{
  "message": "Email sent successfully"
}
```

## 🧩 Key Components

### Article System

- `ArticleList.js` - Displays paginated article listings
- `Article.js` - Individual article layout
- `ArticleContainer.js` - Article wrapper with metadata
- `Thumbnail.js` - Article preview cards

### Navigation & Layout

- `Nav.js` - Main navigation with mobile menu
- `Footer.js` - Site footer with links and contact info
- `Container.js` - Consistent page width wrapper

### Cookie Consent (GDPR Compliant)

- `ConsentForm.js` - Main consent management
- `FloatingBanner.js` - Cookie consent banner
- `Customise.js` - Granular consent preferences

## 🚀 Deployment

### Cloudflare Pages (Primary)

The site deploys to Cloudflare Pages using OpenNext:

```bash
npm run deploy
```

This runs:

1. `opennextjs-cloudflare build` - Builds for Cloudflare
2. `opennextjs-cloudflare deploy` - Deploys to Cloudflare Pages

### Alternative: Vercel

The project is also compatible with Vercel deployment:

```bash
npm run build
```

Then deploy via Vercel CLI or GitHub integration.

## 🔍 SEO Features

- Dynamic sitemap generation (`src/app/sitemap.js`)
- Structured metadata in article system
- Optimized images with Next.js Image component
- Google Tag Manager integration
- Semantic HTML structure

## 🛠️ Development Workflow

### Making Changes

1. **Code changes**: Edit files in `src/`
2. **New articles**: Follow the article creation process above
3. **After article changes**: Always run `npm run index-articles`
4. **Test locally**: `npm run dev`
5. **Build check**: `npm run build`
6. **Deploy**: `npm run deploy`

### Important Notes

- **Always run `npm run index-articles`** after adding/updating articles
- Use `NextJsImage` component for optimized images
- Follow existing component patterns for consistency
- Test contact form with valid SMTP2GO credentials

## 📚 Dependencies

### Core Dependencies

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS v4** - Utility-first CSS framework
- **SCSS** - Enhanced CSS preprocessing

### UI & Styling

- **@headlessui/react** - Unstyled accessible UI components
- **@fortawesome/react-fontawesome** - Icon library
- **yet-another-react-lightbox** - Image gallery component

### Functionality

- **js-cookie** - Cookie management
- **react-intersection-observer** - Scroll-based animations
- **prism-react-renderer** - Code syntax highlighting

### Analytics & Third-party

- **@next/third-parties** - Google Tag Manager integration
- **@vercel/analytics** - Web analytics

### Development & Deployment

- **@opennextjs/cloudflare** - Cloudflare Pages deployment
- **wrangler** - Cloudflare Workers CLI
- **ESLint** - Code linting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly with `npm run dev`
5. Run `npm run lint` to check code quality
6. For article changes, run `npm run index-articles`
7. Submit a pull request

## 📞 Support

For questions about this project:

- Email: [info@thebeardeddeveloper.co.uk](mailto:info@thebeardeddeveloper.co.uk)
- Website: [thebeardeddeveloper.co.uk](https://thebeardeddeveloper.co.uk)

## 📄 License

This project is private and proprietary to The Bearded Developer.
