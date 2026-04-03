import { Separator } from "@/components/ui/separator";
import { portfolioConfig } from "@/config/portfolio";

export function FooterSection(): React.JSX.Element {
  return (
    <footer className="px-4 pb-8 md:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <Separator className="mb-5" />
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>{portfolioConfig.profile.name} - {new Date().getFullYear()}</p>
          <p className="font-pixel text-neonCyan">Built with Next.js, TypeScript, Tailwind, Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
