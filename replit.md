# StoryForge - AI-Powered Story Generator

## Overview

StoryForge is a creative writing web application that helps aspiring writers generate unique, original story ideas using AI. Users input a genre, theme, and main character type, and the application generates a complete story concept including a catchy title, engaging plot summary, and character description.

## System Architecture

This is a full-stack TypeScript application with a modern React frontend and Express.js backend, designed for deployment on Replit with PostgreSQL database support.

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom creative color variables
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Validation**: Zod schemas for request/response validation

## Key Components

### Database Schema (`shared/schema.ts`)
- **Users Table**: Basic user management with username/password
- **Story Schemas**: Zod validation schemas for story generation requests and responses
- Uses Drizzle ORM with PostgreSQL dialect

### API Endpoints (`server/routes.ts`)
- `POST /api/generate-story`: Main story generation endpoint
  - Validates input using Zod schemas
  - Integrates with OpenAI GPT-4o for creative content generation
  - Returns structured story data (title, plot, character)

### OpenAI Integration (`server/services/openai.ts`)
- Uses GPT-4o model for story generation
- Custom creative writing prompt designed to produce human-like, engaging content
- Structured JSON output format for consistent parsing

### Storage Layer (`server/storage.ts`)
- Abstracted storage interface for future database integration
- Currently implements in-memory storage for users
- Ready for Drizzle ORM integration with PostgreSQL

### UI Components
- **StoryGeneratorForm**: User input form with genre, theme, and character fields
- **StoryResults**: Displays generated story with formatted sections
- **Shadcn/ui Components**: Professional UI components for forms, cards, buttons, etc.

## Data Flow

1. User fills out story generation form with three inputs:
   - Genre (Fantasy, Mystery, Romance, etc.)
   - Theme (Love conquers all, Betrayal, etc.)
   - Main Character Type (Brave Knight, Curious Child, etc.)

2. Frontend validates input using Zod schemas and sends POST request to `/api/generate-story`

3. Backend validates request, constructs creative writing prompt, and calls OpenAI API

4. OpenAI returns structured JSON with story title, plot summary, and character description

5. Backend returns formatted response to frontend

6. Frontend displays results in organized, visually appealing sections

## External Dependencies

### Core Technologies
- **OpenAI API**: GPT-4o model for story generation
- **Neon Database**: Serverless PostgreSQL hosting
- **Replit**: Development and deployment platform

### Key Libraries
- **Frontend**: React, Vite, TanStack Query, React Hook Form, Tailwind CSS
- **Backend**: Express.js, Drizzle ORM, Zod validation
- **UI**: Radix UI primitives, Shadcn/ui components, Lucide icons

## Deployment Strategy

### Development
- Uses Vite dev server with hot module replacement
- Express server runs on port 5000
- Environment variables for OpenAI API key and database URL

### Production Build
- Vite builds optimized static assets to `dist/public`
- ESBuild bundles server code to `dist/index.js`
- Static files served by Express in production

### Replit Configuration
- Autoscale deployment target
- PostgreSQL module for database
- Port 5000 mapped to external port 80
- Workflow automation for development

## Deployment Configuration

### Vercel Setup
- Added `vercel.json` for deployment configuration
- Created serverless function entry point in `api/index.js`
- Updated build scripts for Vercel compatibility
- Added environment variable examples and ignore files

### Build Process
- Frontend: Vite builds React app to `client/dist/`
- Backend: ESBuild bundles server to `dist/index.js`
- Static files served from CDN, API routes as serverless functions

## Changelog
- June 24, 2025: Added comprehensive VS Code development setup and documentation
- June 24, 2025: Enhanced story generation with detailed 8-12 sentence plots and rich character descriptions
- June 24, 2025: Vercel deployment configuration added
- June 24, 2025: Fixed UI issues (background, navigation, "Generate Again" button)
- June 24, 2025: Implemented robust fallback story generation system
- June 24, 2025: Initial setup with OpenAI integration

## User Preferences

Preferred communication style: Simple, everyday language.