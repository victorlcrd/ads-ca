
import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

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
    setStatus('error');
    if (error instanceof Error) {
      setMessage(error.message);
    } else {
      setMessage('Ocorreu um erro desconhecido.');
    }
  }
}
