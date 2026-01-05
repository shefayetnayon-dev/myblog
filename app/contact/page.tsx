'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { sendEmail } from "@/app/actions"
import { useActionState } from "react"

const initialState = {
    success: false,
    message: '',
}

export default function ContactPage() {
    const [state, formAction, isPending] = useActionState(sendEmail, initialState)

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="max-w-xl mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h1 className="text-4xl font-bold tracking-tight">Contact Me</h1>
                    <p className="text-muted-foreground">
                        Have a question or want to work together? Send me a message!
                    </p>
                </div>

                <form action={formAction} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                        <Input name="name" id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                        <Input name="email" id="email" type="email" placeholder="Your email" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Your message..."
                            required
                        />
                    </div>
                    {state.message && (
                        <p className={`text-sm ${state.success ? 'text-green-500' : 'text-red-500'}`}>
                            {state.message}
                        </p>
                    )}
                    <Button type="submit" className="w-full" disabled={isPending}>
                        {isPending ? "Sending..." : "Send Message"}
                    </Button>
                </form>
            </div>
        </div>
    )
}

