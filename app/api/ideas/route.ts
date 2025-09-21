// app/api/ideas/route.ts

import { createPool } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // CORREÇÃO APLICADA AQUI:
  const pool = createPool({
    connectionString: process.env.adss_POSTGRES_URL, // Usando o nome correto que você passou
  });

  try {
    const { title, description } = await request.json();

    if (!title || !description) {
      return NextResponse.json(
        { error: 'Título e descrição são obrigatórios.' },
        { status: 400 }
      );
    }

    // Usamos pool.sql para executar o comando
    await pool.sql`
      INSERT INTO ideas (title, description)
      VALUES (${title}, ${description});
    `;

    return NextResponse.json(
      { message: 'Ideia enviada com sucesso!' },
      { status: 201 }
    );

  } catch (error) {
    console.error('Falha ao inserir ideia no banco:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.' },
      { status: 500 }
    );
  }
}