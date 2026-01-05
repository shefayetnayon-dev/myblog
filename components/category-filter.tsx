"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const categories = [
    "Technology",
    "Coding",
    "Design",
    "Life",
    "General"
]

export function CategoryFilter() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentCategory = searchParams.get("category")

    const handleSelect = (category: string) => {
        const params = new URLSearchParams(searchParams)
        if (category === currentCategory) {
            params.delete("category")
        } else {
            params.set("category", category)
        }
        router.replace(`/blog?${params.toString()}`)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    className="w-[200px] justify-between"
                >
                    {currentCategory || "All Categories"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]">
                <DropdownMenuItem
                    key="all"
                    onSelect={() => handleSelect("")}
                >
                    <Check
                        className={cn(
                            "mr-2 h-4 w-4",
                            !currentCategory ? "opacity-100" : "opacity-0"
                        )}
                    />
                    All Categories
                </DropdownMenuItem>
                {categories.map((category) => (
                    <DropdownMenuItem
                        key={category}
                        onSelect={() => handleSelect(category)}
                    >
                        <Check
                            className={cn(
                                "mr-2 h-4 w-4",
                                currentCategory === category ? "opacity-100" : "opacity-0"
                            )}
                        />
                        {category}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
