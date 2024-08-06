import * as React from "react"
import * as RadixScrollArea from "@radix-ui/react-scroll-area"

function ScrollArea({ children }: { children: React.ReactNode }) {
  return (
    <RadixScrollArea.Root className="ScrollAreaRoot">
      <RadixScrollArea.Viewport className="h-[10em] w-[10em]">
        {children}
      </RadixScrollArea.Viewport>
      <RadixScrollArea.Scrollbar
        className="ScrollAreaScrollbar"
        orientation="vertical"
      >
        <RadixScrollArea.Thumb className="ScrollAreaThumb" />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Scrollbar
        className="ScrollAreaScrollbar"
        orientation="horizontal"
      >
        <RadixScrollArea.Thumb className="ScrollAreaThumb" />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Corner className="ScrollAreaCorner" />
    </RadixScrollArea.Root>
  )
}

export { ScrollArea }
