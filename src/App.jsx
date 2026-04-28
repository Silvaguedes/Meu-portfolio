import React from "react";
import { color, hover, motion } from "framer-motion";
import imagem from './assets/img/eu-perfil.jpeg';
import { span, style } from "framer-motion/client";


export default function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold text-lg">Aldair.dev</h1>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="/cv-aldair.pdf" download  className="hover:text-green-500">
            📄 Baixar CV 
            </a>

            <a href="#projetos" className="hover:text-white">Projetos</a>
            <a href="#contato" className="hover:text-white">Contato</a>

          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 pt-32 pb-20 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Aldair Guedes <br></br>
          Desenvolvedor Full-Stack
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 mt-6 text-lg"
        >
          Construo interfaces modernas, rápidas e focadas em resultado usando React, JavaScript e boas práticas.        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a href="#projetos">
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-lg shadow-lg shadow-blue-600/20">
              Ver Projetos
            </button>
          </a>
        </motion.div>
      </section>

      {/* SOBRE */}
      <section className="px-6 py-20 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold">Sobre mim</h2>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
          Sou desenvolvedor web focado na construção de aplicações completas, atuando tanto no front-end quanto no back-end. Tenho experiência na criação de interfaces modernas, integração com APIs e gerenciamento de banco de dados, sempre priorizando código limpo, organizado e escalável.

          Desenvolvo projetos práticos voltados para problemas reais, com autenticação de usuários, consumo de APIs e visualização de dados, demonstrando na prática minhas habilidades técnicas e minha capacidade de entregar soluções funcionais.

          Atualmente, estou em constante evolução, aprofundando meus conhecimentos em JavaScript e tecnologias do ecossistema web, com foco em me tornar um desenvolvedor cada vez mais preparado para ambientes profissionais.

          Busco minha primeira oportunidade na área para contribuir com soluções eficientes, aprender com times experientes e crescer dentro da tecnologia.
        </p>

        <img
          src={imagem}
          alt="Foto Aldair"
          className="w-80 h-70 rounded-full mx-auto mt-8"
        />

      </section>

      {/* PROJETOS */}
      <section id="projetos" className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Projetos</h2>

        <div className="grid md:grid-cols-3 gap-10 text-blue-700 " >
          {[
            {
              title: "Controlador financeiro",
              desc: "Gerenciador de Gastos Pessoais Aplicação completa para controle financeiro, permitindo gerenciar receitas e despesas com categorização e visualização de dados.Desenvolvida com foco em usabilidade e organização, simulando um sistema real utilizado no dia a dia.",
              link: "https://gastosfinanceiros.netlify.app",
              github: "https://github.com/Silvaguedes/Gerenciador-financeiro.git"
            },

            {
              title: "Cadastro de Usuários",
              desc: "Sistema de Cadastro de Usuários Aplicação fullstack para gerenciamento de usuários, com cadastro, listagem e integração com banco de dados. Desenvolvida com foco em organização, estrutura de API e fluxo completo entre front-end e back-end, simulando um ambiente real de aplicação.",
              link: "https://cadastro-online.netlify.app",
              github: "https://github.com/Silvaguedes/cadastro-online.git"
            },

            {
              title: "Cardápio online",
              desc: "Cardápio Online Sistema completo de cardápio digital com painel administrativo para gerenciamento de produtos, carrinho de compras e integração com WhatsApp para envio de pedidos. Desenvolvido com foco em usabilidade e aplicação real para negócios do setor alimentício.",

              link: "http://cardapio-onlin.netlify.app",
              github: "https://github.com/Silvaguedes/cardapio-online.git"
            },

            {
              title: "Conversor de moedas",
              desc: "Conversor de Moedas Aplicação web com integração a API de câmbio em tempo real, realizando conversões dinâmicas entre moedas. Desenvolvida com foco no consumo de APIs externas e tratamento de dados em tempo real.",
              link: "http://convertvalue.netlify.app",
              github: "https://github.com/Silvaguedes/conversor-de-moedas.git"
            },


            {
              title: "Previsão do tempo",
              desc: "Previsor do Tempo Aplicação web com consumo de API de clima em tempo real, exibindo dados meteorológicos atualizados de diferentes localidades. Desenvolvida com foco na integração com APIs externas e tratamento de dados dinâmicos.revisor de clima, ainda falta organizar a estilização ",
              link: "https://previsor-tempo.netlify.app",
              github: "https://github.com/Silvaguedes/previsor-do-tempo.git"
            },

          ].map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:-translate-y-2 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-gray-400 mt-3">{proj.desc}</p>

              <div className="mt-6 flex gap-4">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  Ver Projeto
                </a>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:underline"
                >
                  Ver Código
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* CONTATO */}
      <section id="contato" className="px-6 py-20 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold">Contato</h2>
        <p className="text-gray-400 mt-4">Vamos trabalhar juntos</p>

        <div className="mt-8 flex justify-center gap-6">





          <button className="bg-blue-600 hover:bg-blue-700 hover: px-6 py-3 rounded-xl">
            <a href="https://www.linkedin.com/in/aldair-guedess/" target="_blank">LinkedIn</a>
          </button>

          <button className="bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-xl">
            <a href="https://github.com/Silvaguedes" target="_blank">GitHub</a>
          </button>

          <button className="bg-green-700 hover:bg-green-900 px-6 py-3 rounded-xl">
            <a href="https://wa.me/5511957735271" target="_blank"> Meu WhatsZap</a>
          </button>


        </div>
      </section>
    </div>
  );
}
