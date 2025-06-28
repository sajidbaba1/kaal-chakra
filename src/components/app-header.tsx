import Link from 'next/link';
import { Sun, BookOpenText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Sun className="h-6 w-6 mr-3 text-primary" />
          <Link
            href="/"
            className="font-bold text-xl font-headline tracking-tighter"
          >
            Kaal Chakra
          </Link>
        </div>
        <nav className="flex flex-1 items-center space-x-2 justify-end">
          <Button variant="ghost" asChild>
            <Link
              href="/"
              className={cn(
                'text-sm font-medium text-muted-foreground transition-colors hover:text-accent'
              )}
            >
              Calendar
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link
              href="/history"
              className={cn(
                'text-sm font-medium text-muted-foreground transition-colors hover:text-accent'
              )}
            >
              History
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
