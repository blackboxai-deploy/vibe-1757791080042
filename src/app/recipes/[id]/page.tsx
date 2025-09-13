import { recipes } from "@/data/recipes";
 
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { notFound } from "next/navigation";

 
interface RecipePageProps {
  params: Promise<{ id: string }>;
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params;
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
 
      <img
        src={recipe.image}
        alt={`Image of ${recipe.title}`}
        className="w-full max-w-lg rounded-lg shadow-md"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Details</h2>
          <p>Prep Time: {recipe.prepTime}</p>
          <p>Servings: {recipe.servings}</p>
          <p>Category: {recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p>{recipe.description}</p>
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="ingredients">
          <AccordionTrigger>Ingredients</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              {recipe.ingredients.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="instructions">
          <AccordionTrigger>Instructions</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal pl-5 space-y-2">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}
