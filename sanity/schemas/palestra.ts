// studio/schemas/palestra.ts

export default {
  name: 'palestra',
  title: 'Palestra',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título da Palestra',
      type: 'string',
      description: 'O nome principal da palestra.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'palestrante',
      title: 'Nome do(a) Palestrante',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Simplificada (Slug)',
      type: 'slug',
      options: {
        source: 'titulo', // Gera o slug a partir do título
        maxLength: 96,
      },
      description: 'Usado para criar um link amigável. Clique em "Generate".',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'dataHora',
      title: 'Data e Hora',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'descricao',
      title: 'Descrição Curta',
      type: 'text',
      description: 'Um resumo sobre o que será a palestra.',
    },
  ],
};