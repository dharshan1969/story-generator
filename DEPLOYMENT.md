# StoryForge - Vercel Deployment Guide

## Quick Deploy to Vercel

### Option 1: One-Click Deploy (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/storyforge&env=OPENAI_API_KEY&envDescription=OpenAI%20API%20key%20for%20story%20generation&envLink=https://platform.openai.com/api-keys)

### Option 2: Manual Deployment

1. **Fork/Clone Repository**
   ```bash
   git clone https://github.com/yourusername/storyforge.git
   cd storyforge
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Environment Variables**
   In Vercel dashboard → Project Settings → Environment Variables:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   NODE_ENV=production
   ```

4. **Deploy**
   - Vercel will automatically build and deploy
   - Your app will be live at `https://your-project.vercel.app`

## Build Configuration

The project is configured with:
- **Frontend**: Vite builds React app to `client/dist/`
- **Backend**: API routes as Vercel serverless functions
- **Fallback**: Local story generation when OpenAI API is unavailable

## Environment Variables Required

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for story generation | Optional* |
| `NODE_ENV` | Environment (production/development) | Yes |

*Optional because the app has a robust fallback system

## Troubleshooting

### Build Issues
- Ensure Node.js 18+ is used
- Check all dependencies are in package.json
- Verify TypeScript compilation succeeds

### API Issues
- The app automatically falls back to local generation if OpenAI fails
- Check API key validity at [platform.openai.com](https://platform.openai.com)
- Monitor usage limits

### Performance
- Static assets are automatically optimized by Vercel
- API routes scale automatically as serverless functions
- Global CDN ensures fast loading worldwide

## Local Development

```bash
# Install dependencies
npm install

# Set environment variables
cp .env.example .env
# Edit .env with your OpenAI API key

# Start development server
npm run dev

# Open http://localhost:5000
```

## Project Structure for Vercel

```
storyforge/
├── api/
│   └── index.js          # Vercel serverless function entry
├── client/
│   └── dist/             # Built frontend (after build)
├── server/               # Express backend source
├── dist/                 # Compiled backend (after build)
├── vercel.json          # Vercel configuration
└── package.json         # Build scripts
```

## Deployment Checklist

- [ ] Repository pushed to GitHub
- [ ] OpenAI API key obtained (optional)
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Environment variables configured
- [ ] Build successful
- [ ] Story generation tested
- [ ] Fallback system verified

Your StoryForge app is now ready for global deployment on Vercel!