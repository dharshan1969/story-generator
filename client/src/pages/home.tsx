import { useState } from "react";
import { StoryGeneratorForm } from "@/components/story-generator-form";
import { StoryResults } from "@/components/story-results";
import { PenTool } from "lucide-react";
import type { StoryResponse } from "@shared/schema";

export default function Home() {
  const [storyResult, setStoryResult] = useState<StoryResponse | null>(null);
  const [lastFormData, setLastFormData] = useState<{
    genre: string;
    theme: string;
    character: string;
  } | null>(null);

  const handleStoryGenerated = (
    result: StoryResponse,
    formData: { genre: string; theme: string; character: string }
  ) => {
    setStoryResult(result);
    setLastFormData(formData);
  };

  const handleGenerateAgain = () => {
    setStoryResult(null);
  };

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #f5f3ff 0%, #e0e7ff 25%, #fce7f3 50%, #e0e7ff 75%, #f5f3ff 100%)'
    }}>
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-creative-purple to-creative-indigo rounded-lg flex items-center justify-center">
                <PenTool className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-creative-purple to-creative-indigo bg-clip-text text-transparent">
                StoryForge
              </h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Unleash Your{" "}
            <span className="bg-gradient-to-r from-creative-purple via-creative-indigo to-creative-amber bg-clip-text text-transparent">
              Creative Genius
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transform simple ideas into compelling stories with our AI-powered creative writing assistant.
            Just provide three details and watch magic unfold.
          </p>
        </div>

        {/* Story Generator Form */}
        <StoryGeneratorForm
          onStoryGenerated={handleStoryGenerated}
          lastFormData={lastFormData}
        />

        {/* Results Section */}
        {storyResult && (
          <StoryResults
            storyResult={storyResult}
            onGenerateAgain={handleGenerateAgain}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-md border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600">&copy; 2024 StoryForge. Empowering creativity through AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
