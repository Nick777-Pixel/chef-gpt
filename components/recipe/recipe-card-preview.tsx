"use client"

import Link from "next/link"

import type { Tables } from "@/types/database.types"
import { deleteRecipe } from "@/lib/delete-recipe"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { DeleteRecipeButton } from "@/components/recipe/delete-recipe-button"

type Recipe = Tables<"recipes">

interface RecipeCardProps {
  recipe: Recipe
  isPrivate?: boolean
}

const handleDeleteRecipe = async (id: string) => {
  await deleteRecipe(id)
  toast({
    title: "Cool!",
    description: "Recipe successfully deleted",
  })
}

export function RecipeCardPreview({
  recipe,
  isPrivate = false,
}: RecipeCardProps) {
  const onDeleteRecipe = async () => {
    await handleDeleteRecipe(recipe.id)
  }
  const isVegan = recipe?.vegan === "Yes"
  const isPaleo = recipe?.paleo === "Yes"
  const cookingTime = recipe?.cooking_time?.replaceAll(/[^0-9]/g, "")

  const cardContent = (
    <>
      <CardHeader className="grid items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle className="line-clamp-1 text-lg">
            {recipe?.title}
          </CardTitle>
          {isPrivate && <DeleteRecipeButton onClick={onDeleteRecipe} />}
          <CardDescription className="line-clamp-2">
            {recipe?.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Badge>{recipe?.difficulty}</Badge>
          <Badge variant="secondary">🕓 {cookingTime} min</Badge>
          {isVegan && <Badge variant="vegan">Vegan</Badge>}
          {isPaleo && <Badge variant="paleo">Paleo</Badge>}
        </div>
      </CardContent>
      {isPrivate && (
        <CardFooter>
          <Link href={`/dashboard/my-recipes/${recipe.id}`}>
            <Button variant="outline" size="lg" className="w-full">
              View recipe
            </Button>
          </Link>
        </CardFooter>
      )}
    </>
  )
  return isPrivate ? (
    <Link href={`/recipes/${recipe.id}`}>
      <Card className="my-4 hover:bg-accent hover:shadow-lg">
        {cardContent}
      </Card>
    </Link>
  ) : (
    <Card className="my-4 hover:bg-accent hover:shadow-lg">{cardContent}</Card>
  )
}
