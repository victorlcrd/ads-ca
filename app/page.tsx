// app/page.tsx

import { IdeaForm } from '@/components/IdeaForm';
import { SocialMediaSection } from '@/components/SocialMediaSection';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-zinc-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Plataforma Digital
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Centro Acadêmico de Análise e Desenvolvimento de Sistemas - IFSC
        </p>
      </div>

      <SocialMediaSection />

      <IdeaForm />

    </main>
  );
}