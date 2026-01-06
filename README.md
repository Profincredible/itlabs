## Branding

<p align="center">
  <img src="public/favicons/logo.png" alt="ITLabs Logo" width="200" />
</p>

The ITLabs Ghana logo and branding assets are located in the `public/favicons/` directory:
- `logo.png` - Main logo (512x512, source asset)
- `favicon-16x16.png` - 16×16 favicon
- `favicon-32x32.png` - 32×32 favicon
- `favicon-48x48.png` - 48×48 favicon
- `apple-touch-icon.png` - Apple touch icon (180×180)
- `favicon.ico` - Multi-resolution ICO file (16×16 and 32×32)

The site also includes a web manifest at `public/site.webmanifest` for progressive web app support.

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
