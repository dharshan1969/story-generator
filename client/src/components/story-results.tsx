import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, BookOpen, Users, RotateCcw } from "lucide-react";
import type { StoryResponse } from "@shared/schema";

interface StoryResultsProps {
  storyResult: StoryResponse;
  onGenerateAgain: () => void;
}

export function StoryResults({ storyResult, onGenerateAgain }: StoryResultsProps) {
  return (
    <div className="animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Your Story Idea</h3>
        <Button
          onClick={onGenerateAgain}
          variant="outline"
          className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center space-x-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Generate Again</span>
        </Button>
      </div>

      {/* Story Title */}
      <Card className="bg-white rounded-xl shadow-lg border border-gray-100 mb-6">
        <CardContent className="p-6">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-creative-purple to-creative-indigo rounded-lg flex items-center justify-center mr-3">
              <Star className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800">Catchy Title</h4>
          </div>
          <div className="text-2xl font-bold text-gray-900 leading-tight">
            {storyResult.title}
          </div>
        </CardContent>
      </Card>

      {/* Plot Summary */}
      <Card className="bg-white rounded-xl shadow-lg border border-gray-100 mb-6">
        <CardContent className="p-6">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-creative-indigo to-creative-amber rounded-lg flex items-center justify-center mr-3">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800">Plot Summary</h4>
          </div>
          <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {storyResult.plot}
          </div>
        </CardContent>
      </Card>

      {/* Character Description */}
      <Card className="bg-white rounded-xl shadow-lg border border-gray-100">
        <CardContent className="p-6">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-creative-amber to-creative-purple rounded-lg flex items-center justify-center mr-3">
              <Users className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800">Main Character</h4>
          </div>
          <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {storyResult.character}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
