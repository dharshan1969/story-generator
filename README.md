# StoryForge - AI-Powered Story Generator

StoryForge is a modern web application that helps aspiring writers generate unique, original story ideas using AI. Users input a genre, theme, and main character type, and the application generates a complete story concept including a catchy title, engaging plot summary, and character description.

## 🚀 Features

- **AI-Powered Story Generation**: Uses OpenAI GPT-4o for creative content generation
- **Fallback System**: Robust local story generation when API is unavailable
- **Beautiful UI**: Modern, responsive design with Tailwind CSS and Shadcn/ui components
- **Real-time Validation**: Form validation with Zod schemas
- **Multiple Genres**: Supports Fantasy, Mystery, Romance, and more
- **Character Variety**: Generate stories for different character archetypes

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** with custom creative color variables
- **Shadcn/ui** component library built on Radix UI
- **TanStack Query** for server state management
- **React Hook Form** with Zod validation
- **Wouter** for lightweight routing

### Backend
- **Node.js** with Express.js framework
- **TypeScript** with ES modules
- **OpenAI API** integration
- **Zod** for request/response validation
- **Robust error handling** and fallback mechanisms

## 📦 Deployment on Vercel

### Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Push your code to a GitHub repository
3. **OpenAI API Key**: Get one from [platform.openai.com](https://platform.openai.com)

### Step-by-Step Deployment

#### Method 1: Vercel Dashboard (Recommended)

1. **Connect Repository**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**
   - **Framework Preset**: Other
   - **Root Directory**: Leave empty (uses root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

3. **Environment Variables**
   - In project settings, add environment variables:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   NODE_ENV=production
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your app will be live at `https://your-project-name.vercel.app`

#### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Project Root**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N**
   - What's your project's name? `storyforge`
   - In which directory is your code located? `./`

5. **Set Environment Variables**
   ```bash
   vercel env add OPENAI_API_KEY
   # Enter your OpenAI API key when prompted
   
   vercel env add NODE_ENV
   # Enter: production
   ```

6. **Redeploy with Environment Variables**
   ```bash
   vercel --prod
   ```

### Configuration Files

The project includes these Vercel-specific configuration files:

- **`vercel.json`**: Vercel deployment configuration
- **`package.json`**: Build scripts and dependencies

### Build Process

1. **Install Dependencies**: `npm install`
2. **Build Frontend**: Vite builds the React app to `dist/`
3. **Prepare Backend**: TypeScript compilation for serverless functions
4. **Deploy**: Static files served from CDN, API routes as serverless functions

## 🔧 Local Development

### Prerequisites
- **Node.js 18+** (Download from [nodejs.org](https://nodejs.org))
- **npm** (comes with Node.js) or **yarn**
- **VS Code** (Download from [code.visualstudio.com](https://code.visualstudio.com))

### VS Code Setup

#### 1. **Clone and Open in VS Code**
```bash
# Clone the repository
git clone <your-repo-url>
cd storyforge

# Open in VS Code
code .
```

#### 2. **Install Recommended Extensions**
VS Code will prompt you to install recommended extensions, or install these manually:
- **TypeScript and JavaScript Language Features** (built-in)
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**
- **Prettier - Code formatter**

#### 3. **Terminal Setup in VS Code**
Open integrated terminal: `Ctrl+` ` (backtick) or **View → Terminal**

#### 4. **Install Dependencies**
```bash
npm install
```

#### 5. **Environment Configuration**
Create a `.env` file in the root directory:
```env
OPENAI_API_KEY=your_openai_api_key_here
NODE_ENV=development
```

**Note**: The OpenAI API key is optional - the app has a robust fallback system that works without it.

#### 6. **Start Development Server**
```bash
npm run dev
```

The server will start at `http://localhost:5000`

### VS Code Development Workflow

#### **File Structure Navigation**
```
storyforge/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # UI components (forms, results)
│   │   ├── pages/         # Main pages (home, not-found)
│   │   ├── lib/           # Utilities (API client, utils)
│   │   └── hooks/         # Custom React hooks
├── server/                # Backend Express application
│   ├── services/          # Business logic (OpenAI integration)
│   ├── routes.ts          # API endpoints
│   └── index.ts           # Server entry point
├── shared/                # Shared TypeScript schemas
└── api/                   # Vercel deployment functions
```

#### **Key Development Commands**
Use VS Code terminal or command palette (`Ctrl+Shift+P`):

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run check

# Build individual parts
npm run build:client
npm run build:server
```

#### **VS Code Features for This Project**

**1. IntelliSense and Auto-completion**
- Full TypeScript support for backend and frontend
- Tailwind CSS class suggestions
- React component props auto-completion

**2. Debugging**
- Set breakpoints in TypeScript files
- Debug both client and server code
- Use VS Code debugger instead of console.log

**3. Integrated Git**
- Source control panel (`Ctrl+Shift+G`)
- Visual diff views
- Commit and push directly from VS Code

**4. Multi-file Editing**
- Split editor view for working on frontend/backend simultaneously
- Quick file switching with `Ctrl+P`
- Global search and replace with `Ctrl+Shift+F`

#### **Useful VS Code Shortcuts**
- `Ctrl+Shift+P` - Command palette
- `Ctrl+P` - Quick file open
- `Ctrl+Shift+F` - Search across all files
- `F12` - Go to definition
- `Alt+Shift+F` - Format document
- `Ctrl+Shift+G` - Git panel
- `Ctrl+J` - Toggle terminal

### Development Tips

#### **Hot Reload**
- Frontend changes auto-reload in browser
- Backend changes restart the server automatically
- No need to manually refresh during development

#### **API Testing**
Use VS Code extensions for API testing:
- **REST Client** extension for testing API endpoints
- Or use the integrated terminal with curl:
```bash
curl -X POST http://localhost:5000/api/generate-story \
  -H "Content-Type: application/json" \
  -d '{"genre": "Fantasy", "theme": "Love conquers all", "character": "Brave Knight"}'
```

#### **Error Handling**
- TypeScript errors show in VS Code Problems panel
- Runtime errors display in terminal and browser console
- Server logs appear in the integrated terminal

### Customization

#### **VS Code Settings**
Create `.vscode/settings.json` for project-specific settings:
```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  }
}
```

#### **Debugging Configuration**
Create `.vscode/launch.json` for debugging:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Server",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/server/index.ts",
      "env": {
        "NODE_ENV": "development"
      },
      "runtimeArgs": ["-r", "tsx/cjs"]
    }
  ]
}
```

## 🌟 Key Features Explained

### Robust Fallback System
- When OpenAI API is unavailable or quota exceeded, the app automatically falls back to local story generation
- Pre-written story templates ensure consistent quality
- Users experience no interruption in service

### Story Generation Templates
- **Fantasy**: Epic quests, magical realms, heroic journeys
- **Mystery**: Detective stories, hidden secrets, suspenseful plots  
- **Romance**: Love stories, relationship dynamics, emotional journeys
- **Multiple Themes**: Love conquers all, Betrayal, Redemption, Power of Secrets

### Character Archetypes
- Brave Knight: Noble warriors with moral dilemmas
- Curious Child: Innocent explorers discovering truth
- Rebellious Teen: Young fighters challenging the status quo
- Mysterious Stranger: Enigmatic figures with hidden pasts
- Reluctant Hero: Ordinary people thrust into extraordinary circumstances

## 🔍 API Endpoints

### `POST /api/generate-story`

Generate a story idea based on user inputs.

**Request Body:**
```json
{
  "genre": "Fantasy",
  "theme": "Love conquers all", 
  "character": "Brave Knight"
}
```

**Response:**
```json
{
  "title": "The Spellbound Romance",
  "plot": "In a world where magic divides kingdoms...",
  "character": "A seasoned warrior with a noble heart..."
}
```

## 🚨 Troubleshooting

### VS Code Development Issues

1. **TypeScript Errors in VS Code**
   - Restart TypeScript service: `Ctrl+Shift+P` → "TypeScript: Restart TS Server"
   - Check if all dependencies are installed: `npm install`
   - Verify TypeScript version: `npx tsc --version`

2. **Import Path Issues**
   - Ensure VS Code recognizes the path aliases defined in `tsconfig.json`
   - Use relative imports if absolute imports fail
   - Check if `@/` alias is working for components

3. **Tailwind CSS Not Working**
   - Install Tailwind CSS IntelliSense extension
   - Verify `tailwind.config.ts` is properly configured
   - Check if PostCSS extension is installed

4. **Hot Reload Not Working**
   - Restart development server: Stop (`Ctrl+C`) and run `npm run dev`
   - Clear browser cache and hard refresh (`Ctrl+Shift+R`)
   - Check if files are being watched correctly

5. **Port Already in Use**
   ```bash
   # Kill process on port 5000
   npx kill-port 5000
   # Or use different port
   PORT=3000 npm run dev
   ```

### Deployment Issues

1. **Build Fails on Vercel**
   - Check Node.js version (use Node 18+)
   - Verify all dependencies are in `package.json`
   - Check for TypeScript errors in VS Code Problems panel

2. **API Routes Not Working**
   - Ensure `vercel.json` is properly configured
   - Check environment variables are set
   - Verify API routes are in `/api/` directory

3. **OpenAI API Issues**
   - App automatically falls back to local generation
   - Check API key validity and quota
   - Monitor usage at [platform.openai.com/usage](https://platform.openai.com/usage)

4. **Environment Variables**
   - Set via Vercel Dashboard: Project Settings → Environment Variables
   - Redeploy after adding new variables
   - Use Vercel CLI: `vercel env add VARIABLE_NAME`

### Local Development Issues

1. **Server Won't Start**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   
   # Check Node.js version
   node --version  # Should be 18+
   ```

2. **Database Connection Issues**
   - The app works without database (uses in-memory storage)
   - Check if PostgreSQL-related dependencies are causing issues
   - Try running without database features first

3. **Build Process Issues**
   ```bash
   # Clean build and rebuild
   rm -rf dist client/dist
   npm run build
   ```

### Performance Optimization

- **Static Asset Caching**: Vercel automatically optimizes static assets
- **Serverless Functions**: API routes scale automatically
- **CDN Distribution**: Global content delivery for fast loading

## 📝 Project Structure

```
storyforge/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── lib/           # Utilities and helpers
│   │   └── hooks/         # Custom React hooks
│   └── dist/              # Built frontend assets
├── server/                # Backend Express application
│   ├── services/          # Business logic
│   ├── routes.ts          # API route definitions
│   └── index.ts           # Server entry point
├── shared/                # Shared TypeScript schemas
├── vercel.json           # Vercel deployment config
└── package.json          # Dependencies and scripts
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit changes: `git commit -m 'Add feature'`
5. Push to branch: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **OpenAI** for GPT-4o API
- **Vercel** for hosting platform
- **Shadcn/ui** for beautiful components
- **Tailwind CSS** for styling system

---

**🚀 Ready to deploy?** Follow the Vercel deployment steps above and your StoryForge app will be live in minutes!