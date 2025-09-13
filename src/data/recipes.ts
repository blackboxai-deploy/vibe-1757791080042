export type Recipe = {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  servings: number;
  category: 'vegetarian' | 'quick' | 'dessert' | 'main';
  image: string;
};

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Vegetable Stir Fry',
    description: 'A quick and healthy vegetarian stir fry with fresh veggies.',
    ingredients: ['2 cups broccoli', '1 bell pepper', '1 carrot', '2 tbsp soy sauce', '1 tbsp sesame oil'],
    instructions: ['Heat oil in pan', 'Add vegetables and stir fry for 5 mins', 'Add soy sauce and serve'],
    prepTime: '15 mins',
    servings: 4,
    category: 'vegetarian',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/be13e9d7-5b7b-4187-bffe-9857dc5d8931.png',
  },
  {
    id: '2',
    title: 'Chocolate Cake',
    description: 'Rich and moist chocolate cake for dessert lovers.',
    ingredients: ['2 cups flour', '1 cup cocoa', '1.5 cups sugar', '2 eggs', '1 cup milk'],
    instructions: ['Mix dry ingredients', 'Add wet ingredients and bake at 350°F for 30 mins', 'Cool and frost'],
    prepTime: '45 mins',
    servings: 8,
    category: 'dessert',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e8a2f29f-5164-4095-a69d-570ffe9c2f5a.png',
  },
  {
    id: '3',
    title: 'Chicken Salad',
    description: 'Light and refreshing chicken salad for quick meals.',
    ingredients: ['2 chicken breasts', '1 cup lettuce', '1 tomato', '2 tbsp dressing', 'Salt and pepper'],
    instructions: ['Cook chicken', 'Chop veggies', 'Mix with dressing and serve'],
    prepTime: '20 mins',
    servings: 2,
    category: 'quick',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cca76ce7-a3dc-48d3-897b-90e3c2c79626.png',
  },
  {
    id: '4',
    title: 'Pasta Primavera',
    description: 'Pasta with spring vegetables.',
    ingredients: ['200g pasta', '1 zucchini', '1 cup cherry tomatoes', '2 tbsp olive oil', 'Parmesan cheese'],
    instructions: ['Boil pasta', 'Sauté veggies', 'Mix and top with cheese'],
    prepTime: '25 mins',
    servings: 4,
    category: 'vegetarian',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4cc28dc6-3c78-47cc-9f8b-9790cc5314cb.png',
  },
  {
    id: '5',
    title: 'Berry Smoothie',
    description: 'Quick blended berry smoothie.',
    ingredients: ['1 cup mixed berries', '1 banana', '1 cup yogurt', 'Honey to taste'],
    instructions: ['Blend all ingredients', 'Serve chilled'],
    prepTime: '5 mins',
    servings: 2,
    category: 'quick',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/31514f17-ffa6-428a-b1e6-f516bb4c81f7.png',
  },
  {
    id: '6',
    title: 'Grilled Salmon',
    description: 'Healthy grilled salmon with herbs.',
    ingredients: ['4 salmon fillets', '2 tbsp lemon juice', 'Herbs', 'Salt'],
    instructions: ['Season salmon', 'Grill for 10 mins', 'Serve with lemon'],
    prepTime: '20 mins',
    servings: 4,
    category: 'main',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6dc63495-4ada-4aab-a27a-556e391deb9d.png',
  },
];
