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
