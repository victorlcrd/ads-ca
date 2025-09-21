

export function SocialMediaSection() {
  // No futuro, esses dados podem vir de um CMS. Por agora, vamos deixá-los aqui.
  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'GitHub', url: 'https://github.com' },
  ];

  return (
    <section className="w-full max-w-5xl p-8 bg-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Siga-nos nas Redes Sociais
      </h2>
      <ul className="flex justify-center gap-6">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}