import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
    currentPage: number
    totalPages: number
    baseUrl: string
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    if (totalPages <= 1) return null

    return (
        <div className="flex items-center justify-center space-x-2 mt-8">
            <Link
                href={currentPage > 1 ? `${baseUrl}?page=${currentPage - 1}` : "#"}
                aria-disabled={currentPage <= 1}
                tabIndex={currentPage <= 1 ? -1 : undefined}
            >
                <Button
                    variant="outline"
                    size="icon"
                    disabled={currentPage <= 1}
                    className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
            </Link>

            {pages.map((page) => (
                <Link key={page} href={`${baseUrl}?page=${page}`}>
                    <Button
                        variant={currentPage === page ? "default" : "outline"}
                        size="icon"
                    >
                        {page}
                    </Button>
                </Link>
            ))}

            <Link
                href={currentPage < totalPages ? `${baseUrl}?page=${currentPage + 1}` : "#"}
                aria-disabled={currentPage >= totalPages}
                tabIndex={currentPage >= totalPages ? -1 : undefined}
            >
                <Button
                    variant="outline"
                    size="icon"
                    disabled={currentPage >= totalPages}
                    className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </Link>
        </div>
    )
}
