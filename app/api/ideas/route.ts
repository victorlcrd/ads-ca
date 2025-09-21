// app/api/ideas/route.ts

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Função que lida com requisições POST para /api/ideas
export async function POST(request: Request) {
  try {
    // 1. Pega os dados enviados pelo formulário (no formato JSON)
    const { title, description } = await request.json();

    // 2. Validação simples para garantir que os campos não estão vazios
    if (!title || !description) {
      return NextResponse.json(
        { error: 'Título e descrição são obrigatórios.' },
        { status: 400 } // Bad Request
      );
    }

    // 3. Insere os dados na nossa tabela 'ideas' no banco de dados
    await sql`
      INSERT INTO ideas (title, description)
      VALUES (${title}, ${description});
    `;

    // 4. Retorna uma mensagem de sucesso
    return NextResponse.json(
      { message: 'Ideia enviada com sucesso!' },
      { status: 201 } // Created
    );

  } catch (error) {
    // 5. Em caso de qualquer outro erro, retorna uma mensagem genérica
    console.error('Falha ao enviar ideia:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.' },
      { status: 500 } // Internal Server Error
    );
  }
}