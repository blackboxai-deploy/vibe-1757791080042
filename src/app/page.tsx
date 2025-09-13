import { recipes } from "@/data/recipes";
import { RecipeCard } from "@/components/RecipeCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Simple Cooking Recipes</h1>
        <p className="text-xl text-muted-foreground">Discover easy, delicious recipes for every occasion.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredRecipes.length > 0 ? (
            featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <Skeleton className="h-64 w-full" />
          )}
        </div>
      </section>
    </div>
  );
}
