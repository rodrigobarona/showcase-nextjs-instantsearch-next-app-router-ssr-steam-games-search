import Header from "@/components/header";
import Search from "@/components/search";
import { searchParamsCache } from "@/providers/nuqs-cache";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default function Page({ searchParams }: PageProps) {
  // Parse the search params at the page level
  const parsedParams = searchParamsCache.parse(searchParams);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="fixed inset-0 z-[-2] bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(161,161,170,0.2),rgba(255,255,255,0))]" />
      <main className="flex-1 container mx-auto items-start gap-10 py-8 md:px-0">
        <div className="items-center text-center py-10 gap-3 flex flex-col">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            Properties Catalog Search
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Blazingly fast search, powered by Typesense and Next.js App Router.
          </p>
        </div>
        <Search initialParams={parsedParams} />
      </main>
    </div>
  );
}
