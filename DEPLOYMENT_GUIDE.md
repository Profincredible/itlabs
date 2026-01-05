# AI Consultant Deployment Guide

## Overview
This guide explains how to properly configure and deploy the ITLabs AI Consultant powered by Google's Gemini 2.5 Flash model.

## Problem Fixed
The AI consultant was not working due to:
1. **Incorrect Model Name**: Used `gemini-3-flash-preview` (non-existent) instead of `gemini-2.5-flash`
2. **Wrong Environment Variable**: Used `API_KEY` instead of `VITE_GEMINI_API_KEY`
3. **Missing Vite Prefix**: Client-side code requires `VITE_` prefix for environment variables

## Local Development Setup

### 1. Get Your Gemini API Key
- Visit [Google AI Studio](https://aistudio.google.com/apikey)
- Sign in with your Google account
- Create a new API key or use an existing one
- **Note**: This API key works with Gemini 2.0+ models including:
  - gemini-2.5-flash
  - gemini-2.5-pro
  - gemini-2.0-flash

### 2. Configure Environment Variables
```bash
# Copy the example file
cp .env.local.example .env.local

# Edit .env.local and add your API key
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

### 3. Install and Run
```bash
npm install
npm run dev
```

The AI Consultant should now work at http://localhost:5173

## Vercel Deployment

### 1. Set Environment Variable in Vercel
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `VITE_GEMINI_API_KEY`
   - **Value**: Your Gemini API key from Google AI Studio
   - **Environments**: Select all (Production, Preview, Development)

### 2. Redeploy
After setting the environment variable:
- Click **Deploy** → **Redeploy** to trigger a new deployment
- Or push a new commit to trigger automatic deployment

### 3. Verify
- Visit your deployed site
- Click the AI Consultant chat bubble in the bottom right
- Send a test message
- You should receive a response from the AI

## Troubleshooting

### "AI Consultant is not configured"
- **Cause**: Environment variable is not set or not visible to the application
- **Fix**: 
  - Ensure you named it exactly `VITE_GEMINI_API_KEY` (with VITE_ prefix)
  - Redeploy after setting the variable
  - Check that it's enabled for the correct environment (Production/Preview)

### "The systems are currently under maintenance"
- **Cause**: API error (invalid key, rate limit, or network issue)
- **Fix**:
  - Verify your API key is valid at Google AI Studio
  - Check browser console for detailed error messages
  - Ensure you have Gemini API access enabled in your Google Cloud project
  - Check if you've exceeded API quotas

### Model not found error
- **Cause**: Using wrong model name
- **Fix**: Ensure `services/geminiService.ts` uses `gemini-2.5-flash` or another valid Gemini 2.x model

## API Key Security

⚠️ **Important Security Notes**:
- The API key is embedded in the client-side JavaScript bundle
- This is acceptable for demo/personal projects but NOT recommended for production
- For production applications, consider:
  - Setting up a backend proxy server
  - Using Vercel serverless functions
  - Implementing proper API key management and rate limiting

## Model Information

The AI Consultant uses **Gemini 2.5 Flash**:
- Fast response times suitable for chat
- Good balance of speed and quality
- Cost-effective for conversational AI
- Supports multi-turn conversations with context

You can change to other models by editing `services/geminiService.ts`:
- `gemini-2.5-pro` - Higher quality, slower, more expensive
- `gemini-2.0-flash` - Previous generation, still fast

## Cost Management

Gemini API usage is metered:
- Free tier: 15 requests per minute
- Check your usage at [Google AI Studio](https://aistudio.google.com)
- Monitor costs in your Google Cloud Console
- Consider implementing rate limiting for public sites

## Support

If you continue experiencing issues:
1. Check browser console for detailed error messages
2. Verify the environment variable in Vercel dashboard
3. Test with a fresh API key from Google AI Studio
4. Ensure you're using Node.js version 20 or later locally

---

Last Updated: 2026-01-05
