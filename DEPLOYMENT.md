# Tech Love Consulting — Deployment & Setup Guide

## Deployment to Netlify

### Initial Setup

1. Push this repository to GitHub (or connect directly from Netlify)
2. Log in to [Netlify](https://app.netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command:** `pnpm run build`
   - **Publish directory:** `dist/public`
   - **Node version:** 22 (set in Environment variables: `NODE_VERSION = 22`)

### Custom Domain (GoDaddy DNS)

1. In Netlify: Go to Site settings > Domain management > Add custom domain
2. Add `techlove.consulting`
3. In GoDaddy DNS settings:
   - Delete any existing A records for `@`
   - Add a CNAME record: `@` pointing to your Netlify site URL (e.g., `tech-love-consulting.netlify.app`)
   - Or add an A record pointing to Netlify's load balancer IP: `75.2.60.5`
4. For `www` subdomain: Add CNAME `www` pointing to your Netlify site URL
5. Enable HTTPS in Netlify (automatic with Let's Encrypt)

### Netlify Forms

Forms are already configured with `data-netlify="true"` attributes. After deployment:

1. Go to Netlify dashboard > Forms
2. You should see two forms: `discovery-call` and `contact`
3. Set up email notifications: Forms > Form notifications > Add notification
4. Route to: `Erynn.Kirshner@techloveconsulting.com`

### Decap CMS Setup

1. In Netlify: Go to Site settings > Identity
2. Enable Identity
3. Under Registration: Set to "Invite only"
4. Invite yourself (Erynn.Kirshner@techloveconsulting.com)
5. Enable Git Gateway: Site settings > Identity > Services > Git Gateway > Enable
6. Access the CMS at: `https://techlove.consulting/admin`

### Google Analytics

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Open `client/src/components/CookieBanner.tsx`
4. Replace `G-XXXXXXXXXX` with your actual Measurement ID
5. Analytics will only load after a visitor clicks "Accept" on the cookie banner

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `techlove.consulting`
3. Choose "HTML tag" verification
4. Add the provided meta tag to `client/index.html` in the `<head>` section
5. Verify ownership
6. Submit sitemap: `https://techlove.consulting/sitemap.xml`

## Content Management

### Publishing Blog Posts

1. Go to `https://techlove.consulting/admin`
2. Log in with your Netlify Identity credentials
3. Click "Blog Posts" > "New Blog Post"
4. Fill in title, date, description, category
5. Write content in the markdown editor
6. Click "Publish"

### Updating Testimonials

1. Go to `/admin`
2. Click "Testimonials" > "New Testimonial"
3. Add client name, title, company, and quote
4. Set display order (lower numbers appear first)
5. Publish

### Updating Client Results

1. Go to `/admin`
2. Click "Client Results" > "New Result"
3. Add headline, situation, work done, and outcome
4. Publish

## Scheduling Tool Integration

When you select a scheduling tool (Calendly, TidyCal, etc.):

1. Open `client/src/pages/DiscoveryCall.tsx`
2. Find the form section (marked with comments)
3. Replace the form with the scheduling tool's embed code
4. Example for Calendly:
   ```tsx
   <div className="calendly-inline-widget" 
        data-url="https://calendly.com/your-link" 
        style={{ minWidth: '320px', height: '700px' }} />
   <script src="https://assets.calendly.com/assets/external/widget.js" async />
   ```

## File Structure

```
client/
  public/
    admin/          — Decap CMS admin interface
    robots.txt      — Search engine crawl rules
    sitemap.xml     — XML sitemap for search engines
    llms.txt        — AI/LLM-readable business summary
  src/
    components/     — Reusable UI components
    pages/          — All page components
    App.tsx         — Route definitions
    index.css       — Design system and brand tokens
```
