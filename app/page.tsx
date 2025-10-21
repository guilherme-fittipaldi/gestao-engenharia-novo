import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import {
  BiBuildingHouse,
  BiCheck,
  BiFile,
  BiLayer,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoLinkedinSquare,
  BiLogoWhatsapp,
  BiLogoYoutube,
  BiSearchAlt,
} from "react-icons/bi";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <div className="flex items-center">
            <Link href="#">
              <Image
                src="/logo-small.png"
                alt="Gestão Engenharia"
                width={100}
                height={100}
                className="mr-2"
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-blue-800">
            {/* <Link
              href="/"
              className="text-xs font-medium uppercase hover:text-blue-600">
              Home
            </Link> */}
            <Link
              href="#servicos"
              className="text-xs font-medium uppercase hover:text-blue-600">
              Serviços
            </Link>
            {/* <Link
              href="#galeria"
              className="text-xs font-medium uppercase hover:text-blue-600">
              Galeria
            </Link> */}
            <Link
              href="#sobre-nos"
              className="text-xs font-medium uppercase hover:text-blue-600">
              Sobre Nós
            </Link>
            <Link
              href="#clientes"
              className="text-xs font-medium uppercase hover:text-blue-600">
              Clientes
            </Link>
            <Link
              href="#contato"
              className="text-xs font-medium uppercase hover:text-blue-600">
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
              className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] bg-gradient-to-t from-cyan-100 to-blue-300">
          <div className="absolute inset-0 z-0">
            <Image
              src="/buildings-background.png"
              alt="Background"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
            <div className="max-w-md">
              <Image
                src="/logo-small.png"
                alt="Gestão Engenharia"
                width={400}
                height={150}
                className="mx-auto"
              />
              <p className="mt-4 text-sm text-blue-800">Serviços</p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto" id="aaaaa">
            <h2 className="mb-12 text-2xl font-medium text-center uppercase text-navy-800">
              O Que Fazemos
            </h2>
            <div className="max-w-[530px] mx-auto text-center">
              <p className="text-sm leading-relaxed text-gray-700">
                Atuamos no mercado de construção civil, proporcionando aos
                nossos clientes soluções em engenharia e arquitetura voltadas à
                melhoria da construção, dos edifícios e imóveis de forma a
                trazer os melhores resultados.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 bg-gray-200" id="servicos">
          <div className="flex flex-col items-center container px-4 mx-auto">
            <h2 className="mb-12 text-2xl font-medium text-center uppercase text-navy-800">
              Nossos Serviços
            </h2>
            <div className="flex gap-8 w-3/4 flex-wrap justify-evenly">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-white rounded-full shadow-md">
                  <BiCheck className="text-blue-800" size={36} />
                </div>
                <h3 className="mb-2 text-xs font-medium text-center uppercase text-navy-800">
                  Inspeção Predial
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-white rounded-full shadow-md">
                  <BiFile className="text-blue-800" size={36} />
                </div>
                <h3 className="mb-2 text-xs font-medium text-center uppercase text-navy-800">
                  Laudo de Entrega e<br />
                  Recebimento de Obra
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-white rounded-full shadow-md">
                  <BiBuildingHouse className="text-blue-800" size={36} />
                </div>
                <h3 className="mb-2 text-xs font-medium text-center uppercase text-navy-800">
                  Avaliação Imobiliária
                </h3>
              </div>
            </div>

            <div className="flex gap-8 w-3/4 flex-wrap justify-evenly mt-8">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-white rounded-full shadow-md">
                  <BiSearchAlt className="text-blue-800" size={36} />
                </div>
                <h3 className="mb-2 text-xs font-medium text-center uppercase text-navy-800">
                  Perícia Judicial
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-white rounded-full shadow-md">
                  <BiLayer className="text-blue-800" size={36} />
                </div>
                <h3 className="mb-2 text-xs font-medium text-center uppercase text-navy-800">
                  Patologia Construtiva
                </h3>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <Link
                href="https://api.whatsapp.com/send/?phone=5511913078121&text=Ol%C3%A1%20%F0%9F%91%8B%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais!"
                target="_blank"
                className="px-6 py-2 text-xs font-medium text-white uppercase bg-blue-800 rounded hover:bg-blue-700">
                ENTRE EM CONTATO
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-2xl font-medium text-center uppercase text-navy-800">
              Trabalhos Realizados
            </h2>
            <p className="max-w-3xl mx-auto mb-10 text-sm text-center text-gray-700">
              Conheça um pouco sobre nossos trabalhos realizados em nossos
              projetos
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden bg-gray-100 rounded-md">
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
                className="px-6 py-2 text-xs font-medium text-white uppercase bg-blue-800 rounded hover:bg-blue-700">
                Ver Galeria
              </Link>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-200" id="#sobre-nos">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-2xl font-medium text-center uppercase text-navy-800">
              Conheça Nosso Time
            </h2>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="flex flex-col items-center">
                <a
                  className="w-32 h-32 mb-4 overflow-hidden rounded-full"
                  href="https://br.linkedin.com/in/luciana-palermo-dos-reis-b9b36065"
                  target="_blank">
                  <Image
                    src="/Luciana.png"
                    alt="Luciana Reis"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </a>
                <h3 className="text-sm font-semibold text-navy-800 flex text-center items-center gap-1">
                  <BiLogoLinkedinSquare className="text-blue-800" />
                  LUCIANA REIS
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <a
                  className="w-32 h-32 mb-4 overflow-hidden rounded-full"
                  href="https://br.linkedin.com/in/givaldo-reis"
                  target="_blank">
                  <Image
                    src="/givaldo.jpeg"
                    alt="Givaldo Reis"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </a>
                <h3 className="text-sm font-semibold text-navy-800 flex text-center items-center gap-1">
                  <BiLogoLinkedinSquare className="text-blue-800" />
                  GIVALDO REIS
                </h3>
              </div>
            </div>
            <div className="max-w-3xl mx-auto mt-10 text-sm text-center text-gray-700">
              <p className="mb-4">
                Nossa equipe é liderada por dois profissionais altamente
                qualificados. A Arquiteta e Urbanista Luciana Reis é
                especialista em inspeção predial, avaliação imobiliária,
                consultorias e laudos técnicos em construções residenciais,
                comerciais e industriais. Enquanto isso, o Engenheiro Givaldo
                Reis especialista em gerenciamento de equipes multifuncionais,
                análise técnica e execução de projetos, incluindo inspeção
                elétrica em equipamentos. Juntos, eles combinam seus
                conhecimentos e experiências para oferecer serviços abrangentes
                e de alta qualidade para nossos clientes.
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <Link
                href="/sobre-nos"
                className="px-6 py-2 text-xs font-medium text-white uppercase bg-blue-800 rounded hover:bg-blue-700">
                Saiba Mais
              </Link>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 bg-white" id="#clientes">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-2xl font-medium text-center uppercase text-navy-800">
              Clientes Com Quem Trabalhamos
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <Image src="/itau.png" alt="Itaú" width={100} height={50} />
              <Image
                src="/banco-do-brasil.png"
                alt="Banco do Brasil"
                width={100}
                height={50}
              />
              <Image src="/bndes.png" alt="BNDES" width={100} height={50} />
              <Image
                src="/bradesco.png"
                alt="Bradesco"
                width={100}
                height={50}
              />
              <Image src="/caixa.png" alt="Caixa" width={100} height={50} />
              <Image src="/FHE.jpeg" alt="FHE" width={100} height={50} />
              <Image
                src="/santander.png"
                alt="Santander"
                width={100}
                height={50}
              />
              <Image src="/TJSP.png" alt="Governo" width={100} height={50} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-200" id="contato">
          <div className="container px-4 mx-auto max-w-5xl">
            <h2 className="mb-12 text-2xl font-medium text-center uppercase text-navy-800">
              Contate-Nos
            </h2>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <MapPin className="flex-shrink-0 text-blue-800" />
                  <p className="text-sm text-gray-700">Jundiaí/SP e Região</p>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="flex-shrink-0 text-blue-800" />
                  <p className="text-sm text-gray-700">
                    contato@gestaoengenharia.com.br
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="flex-shrink-0 text-blue-800" />
                  <div className=" flex flex-col gap-1">
                    <p className="text-sm text-gray-700">(13) 99155 - 5054</p>
                    <p className="text-sm text-gray-700">(13) 99773 - 9759</p>
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
            <p className="text-xs text-gray-600">
              © 2025 Gestão Engenharia, todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="Instagram">
                <BiLogoInstagram
                  className="hover:text-cyan-600 text-blue-800"
                  size={20}
                />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <BiLogoLinkedin
                  className="hover:text-cyan-600 text-blue-800"
                  size={20}
                />
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=5511913078121&text=Ol%C3%A1%20%F0%9F%91%8B%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais!"
                aria-label="Whatsapp">
                <BiLogoWhatsapp
                  className="hover:text-cyan-600 text-blue-800"
                  size={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
