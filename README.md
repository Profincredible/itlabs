## Branding

<div align="center">
  <img src="public/favicons/logo.png" alt="ITLabs Ghana Logo" width="200" />
</div>

The ITLabs Ghana logo and favicons are located in `public/favicons/`:
- **logo.png** - Main logo (512x512px) for documentation and branding
- **favicon.ico** - Multi-resolution icon for browser tabs
- **favicon-16x16.png**, **favicon-32x32.png**, **favicon-48x48.png** - Standard favicon sizes
- **apple-touch-icon.png** - iOS home screen icon (180x180px)
- **site.webmanifest** - Web app manifest with icon references

The logo features the "IT" initials in a tech-focused design with colors matching the site's gradient theme (blue #0ea5e9, indigo #6366f1, purple #a855f7).

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `VITE_GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
   - Copy `.env.local.example` to `.env.local`
   - Get your API key from [Google AI Studio](https://aistudio.google.com/apikey)
3. Run the app:
   `npm run dev`

## Deploy to Vercel

1. In your Vercel project settings, go to **Environment Variables**
2. Add a new environment variable:
   - **Name:** `VITE_GEMINI_API_KEY`
   - **Value:** Your Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey)
3. Redeploy your application for the changes to take effect

**Note:** The AI consultant uses the Gemini 2.5 Flash model.
