// components/PalestrasList.tsx

// Replicamos a definição de tipo para que o componente saiba o que esperar
interface Palestra {
  _id: string;
  titulo: string;
  palestrante: string;
  dataHora: string;
}

interface Props {
  palestras: Palestra[];
}

export function PalestrasList({ palestras }: Props) {
  return (
    <section className="w-full max-w-4xl p-8 mb-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Programação da Semana Acadêmica
      </h2>
      <div className="space-y-6">
        {palestras && palestras.length > 0 ? (
          palestras.map((palestra) => (
            <div key={palestra._id} className="p-4 border rounded-md shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700">{palestra.titulo}</h3>
              <p className="text-md text-gray-600">
                <strong>Palestrante:</strong> {palestra.palestrante}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Quando:</strong>{' '}
                {new Date(palestra.dataHora).toLocaleString('pt-BR', {
                  dateStyle: 'short',
                  timeStyle: 'short',
                })}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Nenhuma palestra cadastrada ainda.</p>
        )}
      </div>
    </section>
  )
}