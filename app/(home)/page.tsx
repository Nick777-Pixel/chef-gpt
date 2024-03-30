import { Suspense } from "react"

import { GenerateRecipe } from "@/components/generate-recipe"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"
import { RecipesCounter } from "@/components/recipes-counter"

export default async function IndexPage() {
  return (
    <div className="container grid">
      <PageHeader>
        <RecipesCounter />
        <PageHeaderHeading>
          Say goodbye to mealtime indecision with
          <span className="bg-gradient-to-r from-violet-500 to-teal-300 bg-clip-text text-transparent">
            {" NicoPrep"}
          </span>
        </PageHeaderHeading>
        <PageHeaderDescription>
          Free Recipe generator powered by OpenAI.
        </PageHeaderDescription>
      </PageHeader>
      <GenerateRecipe />
    </div>
  )
}
