// components/IdeaForm.tsx
'use client'; // Importante: Marca como um Componente de Cliente para interatividade

import { useState } from 'react';

export function IdeaForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // Estados para feedback ao usuário
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      // Chama a nossa API que criamos
      const response = await fetch('/api/ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Algo deu errado.');
      }

      // Limpa o formulário e mostra a mensagem de sucesso
      setStatus('success');
      setMessage(data.message);
      setTitle('');
      setDescription('');
    } catch (error: any) {
      // Mostra a mensagem de erro
      setStatus('error');
      setMessage(error.message);
    }
  };

  return (
    <section className="w-full max-w-2xl p-8 mt-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Envie sua Ideia para o CA
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Título da Ideia
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Descreva sua ideia
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400"
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar Ideia'}
          </button>
        </div>
      </form>
      {message && (
        <p className={`mt-4 text-center p-2 rounded ${
          status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {message}
        </p>
      )}
    </section>
  );
}