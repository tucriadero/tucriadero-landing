import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>TuCriadero - Próximamente</title>
        <meta name="description" content="TuCriadero - Encuentra a tu compañero ideal. Solo criadores con núcleo zoológico." />
      </Head>
      <div
        className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white px-4"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg text-center">
          PRÓXIMAMENTE
        </h1>

        {/* Logo debajo de "PRÓXIMAMENTE" */}
        <Image
          src="/logo-criador.png"
          alt="Logo TuCriadero"
          width={100}
          height={100}
          className="mb-4"
        />

        {/* Título con color verde personalizado */}
        <h2
          className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg text-center"
          style={{ color: '#9ee0c6' }}
        >
          TuCriadero
        </h2>

        <p className="text-lg md:text-xl mb-6 text-white drop-shadow text-center">
          Encuentra a tu compañero ideal. Solo criadores con núcleo zoológico.
        </p>

        <p className="mb-2 text-sm text-white text-center">
          Déjanos tu correo y serás el primero en enterarte de todo
        </p>

        <form
          action="https://formspree.io/f/mvgqpoel"
          method="POST"
          className="flex flex-col sm:flex-row gap-2 w-full max-w-md"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Introduce tu email"
            className="p-2 rounded-md w-full text-black"
          />
          <button
            type="submit"
            className="hover:opacity-90 text-black px-4 py-2 rounded-md transition"
            style={{ backgroundColor: '#9ee0c6' }}
          >
            Notificarme
          </button>
        </form>

        <div className="flex gap-4 mt-8">
  <a href="https://instagram.com/tucriadero_es" target="_blank" rel="noopener noreferrer">
    <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
  </a>
  <a href="https://twitter.com/tucriadero" target="_blank" rel="noopener noreferrer">
    <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" />
  </a>
  <a href="https://tiktok.com/@tucriadero" target="_blank" rel="noopener noreferrer">
    <img src="/tiktok.svg" alt="TikTok" className="w-6 h-6" />
  </a>
  {/* Nuevo icono de Facebook */}
  <a href="https://www.facebook.com/profile.php?id=61578085180300" target="_blank" rel="noopener noreferrer">
    <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
  </a>
</div>
      </div>
    </>
  )
}
