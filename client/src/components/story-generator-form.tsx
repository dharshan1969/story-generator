import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { storyRequestSchema, type StoryRequest, type StoryResponse } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Zap, Loader2, Library, Lightbulb, Users } from "lucide-react";

interface StoryGeneratorFormProps {
  onStoryGenerated: (
    result: StoryResponse,
    formData: { genre: string; theme: string; character: string }
  ) => void;
  lastFormData: { genre: string; theme: string; character: string } | null;
}

export function StoryGeneratorForm({ onStoryGenerated, lastFormData }: StoryGeneratorFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<StoryRequest>({
    resolver: zodResolver(storyRequestSchema),
    defaultValues: {
      genre: "",
      theme: "",
      character: "",
    },
  });

  const generateStoryMutation = useMutation({
    mutationFn: async (data: StoryRequest): Promise<StoryResponse> => {
      const response = await apiRequest("POST", "/api/generate-story", data);
      return response.json();
    },
    onSuccess: (result, variables) => {
      onStoryGenerated(result, variables);
      toast({
        title: "Story Generated!",
        description: "Your creative story idea is ready.",
      });
    },
    onError: (error) => {
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate story. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: StoryRequest) => {
    setIsLoading(true);
    try {
      await generateStoryMutation.mutateAsync(data);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-populate form with last data if available
  useEffect(() => {
    if (lastFormData) {
      form.setValue("genre", lastFormData.genre);
      form.setValue("theme", lastFormData.theme);
      form.setValue("character", lastFormData.character);
    }
  }, [lastFormData, form]);

  return (
    <>
      {/* Story Generator Form */}
      <Card className="glass-morphism rounded-2xl shadow-xl mb-8 animate-slide-up">
        <CardContent className="p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Genre Input */}
                <FormField
                  control={form.control}
                  name="genre"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Library className="w-4 h-4 mr-2 text-creative-purple" />
                        Genre
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="e.g., Fantasy, Mystery, Romance..."
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-creative-purple focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Theme Input */}
                <FormField
                  control={form.control}
                  name="theme"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Lightbulb className="w-4 h-4 mr-2 text-creative-indigo" />
                        Theme
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="e.g., Love conquers all, Betrayal..."
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-creative-indigo focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Character Type Input */}
                <FormField
                  control={form.control}
                  name="character"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Users className="w-4 h-4 mr-2 text-creative-amber" />
                        Main Character
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="e.g., Brave Knight, Curious Child..."
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-creative-amber focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Generate Button */}
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  disabled={isLoading || generateStoryMutation.isPending}
                  className="creative-gradient text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 animate-pulse-glow"
                >
                  {isLoading || generateStoryMutation.isPending ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Zap className="w-5 h-5" />
                  )}
                  <span>
                    {isLoading || generateStoryMutation.isPending
                      ? "Generating..."
                      : "Generate Story Idea"}
                  </span>
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Loading State */}
      {(isLoading || generateStoryMutation.isPending) && (
        <Card className="glass-morphism rounded-2xl shadow-xl mb-8 animate-slide-up">
          <CardContent className="p-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 border-4 border-creative-purple border-t-transparent rounded-full animate-spin"></div>
              <p className="text-lg font-medium text-gray-700">Crafting your unique story...</p>
              <p className="text-sm text-gray-500">Our AI is weaving together your creative elements</p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
