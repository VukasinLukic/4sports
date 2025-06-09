
import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "glass-card-hover",
        "flex flex-col rounded-xl",
        "p-6 text-start",
        "max-w-[350px] min-w-[350px]",
        "transition-all duration-300",
        "border border-primary/20",
        className
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="h-12 w-12 border-2 border-primary/30">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback className="bg-primary/20 text-primary font-bold">
            {author.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-bold text-white leading-none">
            {author.name}
          </h3>
          <p className="text-sm text-primary font-medium">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="text-base text-gray-300 leading-relaxed">
        "{text}"
      </p>
    </Card>
  )
}
