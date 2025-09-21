// app/api/ideas/route.ts

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { title, description } = await request.json();

    if (!title || !description) {
      return NextResponse.json(
        { error: 'Título e descrição são obrigatórios.' },
        { status: 400 }
      );
    }

    await sql`
      INSERT INTO ideas (title, description)
      VALUES (${title}, ${description});
    `;

    return NextResponse.json(
      { message: 'Ideia enviada com sucesso!' },
      { status: 201 }
    );

  } catch (error) {
    // Este é o bloco catch correto para o back-end
    console.error('Falha ao inserir ideia no banco:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.' },
      { status: 500 }
    );
  }
}