"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Recipe } from "@/data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <img
          src={recipe.image}
          alt={`Image of ${recipe.title}`}
          className="h-48 w-full object-cover"
          onError={(e) => { e.currentTarget.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/18bb4c66-e002-458e-a78f-d15b8aa90cf5.png'; }}
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-bold mb-2">{recipe.title}</CardTitle>
        <p className="text-sm text-muted-foreground mb-2">{recipe.description}</p>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Prep: {recipe.prepTime}</span>
          <span>Servings: {recipe.servings}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/recipes/${recipe.id}`}>View Recipe</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
