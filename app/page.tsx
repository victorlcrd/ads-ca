// app/page.tsx

import { IdeaForm } from '@/components/IdeaForm';
import { SocialMediaSection } from '@/components/SocialMediaSection';
import { PalestrasList } from '@/components/PalestrasList'; // Novo componente que vamos criar
import { client } from '@/sanity/client'; // Nosso cliente de conexão

// Definimos o "formato" dos dados que esperamos receber do Sanity
interface Palestra {
  _id: string;
  titulo: string;
  palestrante: string;
  dataHora: string;
}

// Função para buscar os dados do Sanity
async function getPalestras() {
  // Escrevemos a consulta na linguagem do Sanity (GROQ)
  // Pedimos todas as palestras, ordenadas pela data e hora
  const query = `*[_type == "palestra"] | order(dataHora asc)`;
  
  const palestras: Palestra[] = await client.fetch(query);
  return palestras;
}

// Transformamos o componente da página em um componente "async" (assíncrono)
export default async function HomePage() {
  // Chamamos a função para buscar os dados no servidor
  const palestras = await getPalestras();

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-zinc-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          CALA
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Centro Acadêmico de Análise e Desenvolvimento de Sistemas - IFSC
        </p>
      </div>

      {/* Passamos os dados buscados para o componente de exibição */}
      <PalestrasList palestras={palestras} />

      <SocialMediaSection />
      <IdeaForm />
    </main>
  );
}