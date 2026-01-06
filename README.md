## Branding

![ITLabs Ghana Logo](public/favicons/logo.png)

The project logo and favicon assets are located in `public/favicons/`:
- `logo.png` - Primary project logo (512x512)
- `favicon.ico` - Multi-resolution ICO file (16x16, 32x32)
- `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png` - Standard favicon sizes
- `apple-touch-icon.png` - iOS home screen icon (180x180)
- `android-chrome-192x192.png`, `android-chrome-512x512.png` - Android home screen icons

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
