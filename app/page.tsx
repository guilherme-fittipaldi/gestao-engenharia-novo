import Image from "next/image"
import Link from "next/link"
import { MapPin, Mail, Phone, Facebook, Linkedin, Instagram, Youtube } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <div className="flex items-center">
            <Image src="/logo-small.png" alt="Gestão Engenharia" width={40} height={40} className="mr-2" />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-xs font-medium uppercase hover:text-blue-800">
              Home
            </Link>
            <Link href="/servicos" className="text-xs font-medium uppercase hover:text-blue-800">
              Serviços
            </Link>
            <Link href="/galeria" className="text-xs font-medium uppercase hover:text-blue-800">
              Galeria
            </Link>
            <Link href="/sobre-nos" className="text-xs font-medium uppercase hover:text-blue-800">
              Sobre Nós
            </Link>
            <Link href="/clientes" className="text-xs font-medium uppercase hover:text-blue-800">
              Clientes
            </Link>
            <Link href="/blog" className="text-xs font-medium uppercase hover:text-blue-800">
              Blog
            </Link>
            <Link href="/contato" className="text-xs font-medium uppercase hover:text-blue-800">
              Contato
            </Link>
          </nav>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] bg-gradient-to-r from-cyan-500 to-blue-900">
          <div className="absolute inset-0 z-0">
            <Image src="/buildings-background.jpg" alt="Background" fill className="object-cover opacity-30" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
            <div className="max-w-md">
              <Image src="/logo-small.png" alt="Gestão Engenharia" width={400} height={150} className="mx-auto" />
              <p className="mt-4 text-sm text-white">Serviços</p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-2xl font-medium text-center uppercase text-navy-800">O Que Fazemos</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm leading-relaxed text-gray-700">
                Atuamos no mercado de construção civil, proporcionando aos nossos clientes soluções em engenharia e
                arquitetura voltadas à melhoria da construção, dos edifícios e imóveis de forma a trazer os melhores
                resultados.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 bg-gray-200">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-2xl font-medium text-center uppercase text-navy-800">Nossos Serviços</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-white rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-800"
                  >
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xs font-medium text-center uppercase text-navy-800">Inspeção Predial</h3>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-white rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-800"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h.01" />
                    <path d="M17 7h.01" />
                    <path d="M7 17h.01" />
                    <path d="M17 17h.01" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xs font-medium text-center uppercase text-navy-800">
                  Laudo de Entrega e<br />
                  Recebimento de Obra
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-white rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-800"
                  >
                    <path d="M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" />
                    <path d="M2 13h10" />
                    <path d="m9 16 3-3-3-3" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xs font-medium text-center uppercase text-navy-800">Avaliação Imobiliária</h3>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-white rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-800"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xs font-medium text-center uppercase text-navy-800">Perícia Judicial</h3>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-white rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-800"
                  >
                    <path d="M2 12h20" />
                    <path d="M2 20h20" />
                    <path d="M2 4h20" />
                    <path d="M6 12v8" />
                    <path d="M18 12v8" />
                    <path d="M12 4v16" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xs font-medium text-center uppercase text-navy-800">Patologia Construtiva</h3>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <Link
                href="/servicos"
                className="px-6 py-2 text-xs font-medium text-white uppercase bg-blue-800 rounded hover:bg-blue-700"
              >
                Ver Serviços
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-2xl font-medium text-center uppercase text-navy-800">Trabalhos Realizados</h2>
            <p className="max-w-3xl mx-auto mb-10 text-sm text-center text-gray-700">
              Conheça um pouco sobre nossos trabalhos realizados em nossos projetos
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="overflow-hidden bg-gray-100 rounded-md">
                  <Image
                    src={`/project-${item}.jpg`}
                    alt={`Project ${item}`}
                    width={300}
                    height={200}
                    className="object-cover w-full h-48"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Link
                href="/galeria"
                className="px-6 py-2 text-xs font-medium text-white uppercase bg-blue-800 rounded hover:bg-blue-700"
              >
                Ver Galeria
              </Link>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-200">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-2xl font-medium text-center uppercase text-navy-800">Conheça Nosso Time</h2>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/team-1.jpg"
                    alt="Luciana Reis"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-sm font-medium text-navy-800">LUCIANA REIS</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/team-2.jpg"
                    alt="Divaldo Reis"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-sm font-medium text-navy-800">DIVALDO REIS</h3>
              </div>
            </div>
            <div className="max-w-3xl mx-auto mt-10 text-sm text-center text-gray-700">
              <p className="mb-4">
                Nosso equipe é formada por dois profissionais qualificados, qualificados e com experiência comprovada
                superior a 20 anos de atuação no mercado, atuando em empresas, construtoras, incorporadoras e órgãos
                públicos em construções residenciais, comerciais e industriais. Engenheiro Civil e Engenheira Divaldo
                Reis é especialista em gerenciamento de projetos, Patologias Construtivas, Gestão técnica e avaliação de
                imóveis, Perícias Judiciais, Inspeção Predial, Avaliação de Imóveis e Consultoria. Engenheira Luciana
                Reis é especialista em projetos estruturais e de instalações prediais.
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <Link
                href="/sobre-nos"
                className="px-6 py-2 text-xs font-medium text-white uppercase bg-blue-800 rounded hover:bg-blue-700"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-2xl font-medium text-center uppercase text-navy-800">
              Clientes Com Quem Trabalhamos
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <Image src="/client-1.png" alt="Itaú" width={100} height={50} />
              <Image src="/client-2.png" alt="Banco do Brasil" width={100} height={50} />
              <Image src="/client-3.png" alt="BNDES" width={100} height={50} />
              <Image src="/client-4.png" alt="Bradesco" width={100} height={50} />
              <Image src="/client-5.png" alt="Caixa" width={100} height={50} />
              <Image src="/client-6.png" alt="FHE" width={100} height={50} />
              <Image src="/client-7.png" alt="Santander" width={100} height={50} />
              <Image src="/client-8.png" alt="Governo" width={100} height={50} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-200">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-2xl font-medium text-center uppercase text-navy-800">Contate-Nos</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <form className="grid gap-4">
                  <input
                    type="text"
                    placeholder="Seu Nome*"
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                  />
                  <textarea
                    placeholder="Mensagem*"
                    className="w-full h-40 p-3 border border-gray-300 rounded"
                    required
                  ></textarea>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="px-6 py-2 text-xs font-medium text-white uppercase bg-blue-800 rounded hover:bg-blue-700"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <MapPin className="flex-shrink-0 text-blue-800" />
                  <p className="text-sm text-gray-700">
                    Rua Secundária, nº 123 CEP 12345-678
                    <br />
                    Cidade, Estado - Brasil/BR
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="flex-shrink-0 text-blue-800" />
                  <p className="text-sm text-gray-700">contato@gestaoengenharia.com.br</p>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="flex-shrink-0 text-blue-800" />
                  <div>
                    <p className="text-sm text-gray-700">+55 (00) 0000 - 0000</p>
                    <p className="text-sm text-gray-700">+55 (00) 0000 - 0000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-600">© 2023 Gestão Engenharia, todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="Language">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-600 hover:text-blue-800"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m12 2 3.44 11 1.89-5.56 5.56-1.89L12 2Z" />
                  <path d="m19.65 14.65-8.48 4.85" />
                  <path d="m14.7 8.7-2.2 2.2" />
                  <path d="m8.7 14.7 2.2-2.2" />
                </svg>
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="text-gray-600 hover:text-blue-800" size={20} />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="text-gray-600 hover:text-blue-800" size={20} />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="text-gray-600 hover:text-blue-800" size={20} />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Youtube className="text-gray-600 hover:text-blue-800" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
