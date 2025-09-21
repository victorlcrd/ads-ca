// app/api/ideas/route.ts

import { NextResponse } from 'next/server';

// Função de depuração temporária para requisições GET
export async function GET() {
  // Tentamos ler a variável de ambiente diretamente
  const postgresUrl = process.env.POSTGRES_URL;

  if (postgresUrl) {
    // Se encontrarmos, retornamos uma mensagem de sucesso
    return NextResponse.json({
      status: "SUCESSO",
      message: "A variável de ambiente POSTGRES_URL foi ENCONTRADA.",
      // Mostramos apenas o início da URL por segurança
      value: `O valor começa com: ${postgresUrl.substring(0, 20)}...`
    });
  } else {
    // Se não encontrarmos, retornamos uma mensagem de erro clara
    return NextResponse.json({
      status: "FALHA",
      message: "A variável de ambiente POSTGRES_URL NÃO FOI ENCONTRADA no servidor."
    }, { status: 500 });
  }
}


/*
// CÓDIGO ANTIGO COMENTADO PARA NÃO PERDERMOS

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
*/