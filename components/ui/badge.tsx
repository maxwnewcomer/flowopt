import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default",
  {
    variants: {
      variant: {
        base: "border-transparent bg-base-3 border-base-6 text-base-12 hover:bg-base-4",
        primary:
          "border-transparent bg-primary-3 border-primary-6 text-primary-12 hover:bg-primary-4",
        error:
          "border-transparent bg-error-3 border-error-6 text-error-12 hover:bg-error-4",
        warning:
          "border-transparent bg-warning-3 border-warning-6 text-warning-12 hover:bg-warning-4",
        info: "border-transparent bg-info-3 border-info-6 text-info-12 hover:bg-info-4",
        success:
          "border-transparent bg-success-3 border-success-6 text-success-12 hover:bg-success-4",
        outline:
          "bg-base-1 border-base-7 hover:bg-base-2 text-base-12 hover:border-base-8",
      },
    },
    defaultVariants: {
      variant: "base",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
