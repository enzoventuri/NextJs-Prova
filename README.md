# Prova Next com TailwindCSS

### Foco em transformar a versão antiga de uma interface de um site e modelar um novo utilizando tecnologias da Next.js e TailwindCSS

Prova desenvolvida sozinha com duração de 3 horas e 30 minutos

## 1. Preparação do projeto 
O estudante deverá preparar uma aplicação em Next.js para receber a migração da 
interface fornecida.  
A aplicação deverá ser executável no ambiente de desenvolvimento e permitir visualização 
no navegador.  
O projeto deverá conter organização compatível com uma aplicação Next.js, contemplando 
páginas, rotas, componentes, estilos e arquivos de apoio.  
A entrega deverá permitir que outra pessoa instale e execute o projeto a partir das 
instruções registradas no repositório.  
## 2. Migração da interface estática 
O estudante deverá migrar a interface estática fornecida para uma aplicação em Next.js.  
A versão final deverá preservar o design minimalista da base, incluindo:  
● cabeçalho com logo e navegação;  
● área inicial de apresentação da WEG Academy;  
● seção de cursos;  
● cards com imagem, título, descrição, preço, data, vagas, local e link de detalhes;  
● página de detalhes de curso;  
● página institucional sobre a WEG;  
● rodapé.  
A aplicação final não deverá depender dos arquivos HTML originais para funcionar. As 
páginas deverão ser recriadas dentro da estrutura do Next.js.  
## 3. Estrutura global da aplicação 
O estudante deverá organizar a aplicação para que elementos comuns estejam disponíveis 
de forma global.  
O cabeçalho e o rodapé deverão aparecer nas páginas da aplicação sem necessidade de 
repetição manual em cada página.  
A navegação principal deverá permitir acesso à página inicial, à página sobre a WEG e à 
página de detalhes dos cursos.  
A estrutura global deverá manter a identidade visual da WEG Academy e a padronização 
entre as páginas.  
## 4. Componentização da interface 
O estudante deverá transformar elementos recorrentes da interface em componentes 
reutilizáveis.  
A aplicação deverá conter componentes para estruturas como:  
● cabeçalho;  
● rodapé;  
● card de curso;  
● botão ou link de ação;  
● blocos de conteúdo reutilizáveis, quando aplicável.  
Os componentes deverão estar integrados às páginas e gerar resultado visível na aplicação 
em execução.  
A criação de arquivos de componentes sem uso real na interface não será considerada 
evidência suficiente.  
## 5. Consumo da API 
O estudante deverá consumir a API fornecida pelo docente para alimentar a interface da 
aplicação.  
Na versão final em Next.js, os cards de cursos não deverão permanecer escritos 
manualmente no JSX. A listagem deverá ser construída a partir dos dados retornados pela 
API.  
Os componentes responsáveis pela apresentação dos cursos deverão receber dados e 
renderizar informações conforme cada item retornado pela API.  
A interface deverá apresentar informações compatíveis com a estrutura de resposta da API, 
incluindo nome, descrição, preço, data, local, vagas disponíveis, categoria, imagem e 
indicação de destaque, quando disponível.  
## 6. Listagem dos cursos 
A página inicial deverá apresentar a WEG Academy e exibir a seção de cursos com base no 
layout fornecido.  
Na base HTML, os cards estão mockados. Na versão em Next.js, a listagem deverá ser 
gerada a partir dos dados retornados pela API.  
A página inicial deverá exibir apenas os itens pertencentes à categoria Cursos. Registros 
de outras categorias, como Treinamentos, Workshops ou Feiras, não deverão aparecer 
na listagem principal.  
Os cards exibidos deverão manter o padrão visual do projeto base e apresentar as 
informações de forma legível e organizada.  
## 7. Página de detalhes do curso 
A aplicação deverá possuir uma página de detalhes para os cursos.  
A base HTML contém uma página fixa de detalhes, utilizada apenas como referência visual. 
Na versão em Next.js, essa página deverá utilizar uma rota dinâmica para exibir os dados 
de um curso específico a partir do identificador presente na URL.  
Ao acessar a página de um curso, deverão ser exibidas as informações correspondentes ao 
item selecionado na API.  
A página não deverá apresentar sempre o mesmo curso quando a rota indicar cursos 
diferentes.  
A página de detalhes deverá manter o padrão visual da aplicação e apresentar as 
informações principais do curso de forma clara.  
## 8. Página estática sobre a WEG 
A aplicação deverá conter uma página institucional estática sobre a WEG, em rota própria. 
Essa página deverá manter o conteúdo e a proposta visual do projeto base.  
A página deverá ser acessível pela navegação principal e funcionar dentro da estrutura da 
aplicação Next.js.  
## 9. Estilização da interface 
O estudante deverá manter a estilização de acordo com o design final fornecido. 
A interface deverá permanecer simples, limpa e funcional, evitando adição de elementos 
visuais desnecessários, efeitos excessivos ou mudanças que descaracterizem o projeto 
base.  
A aplicação deverá manter responsividade mínima, permitindo navegação e leitura 
adequadas em diferentes larguras de tela.  
Caso o estudante utilize Tailwind CSS na versão Next.js, a configuração deverá estar 
integrada ao projeto, sem depender de CDN.  
## 10. Recursos do Next.js 
O estudante deverá utilizar recursos próprios do Next.js compatíveis com o escopo da 
atividade.  
As imagens utilizadas na interface deverão ser tratadas com recurso próprio do framework 
para otimização de imagens.  
As fontes da aplicação deverão ser configuradas utilizando recurso próprio do Next.js para 
carregamento e otimização.  
A aplicação deverá demonstrar organização compatível com os recursos do framework, 
como rotas, páginas, layout global e componentes.  
## 11. Procedimentos de segurança no processo de programação 
O estudante deverá aplicar cuidados básicos de segurança e organização no processo de 
programação e entrega.  
O repositório não deverá conter pastas ou arquivos que não devem ser versionados, como:  
● node_modules;  
● .next;  
● arquivos temporários;  
● arquivos sensíveis;  
● configurações locais indevidas.  
A entrega deverá conter a pasta .history, conforme orientação da avaliação, para 
possibilitar a análise do processo de desenvolvimento.  
Caso sejam utilizadas variáveis de ambiente para armazenar endereço da API ou 
configurações do projeto, o estudante não deverá expor arquivos locais sensíveis no 
repositório.  
## 12. Versionamento e entrega 
O projeto final deverá ser salvo em um repositório no GitHub.  
O repositório deverá conter os arquivos necessários para instalação, execução e avaliação 
da aplicação.  
A entrega deverá apresentar organização clara, histórico mínimo de desenvolvimento e 
instruções básicas para que outra pessoa consiga executar o projeto.  
O estudante deverá disponibilizar o link do repositório como entrega final da atividade. 
## 14. Condições de aceite da entrega 
A entrega será considerada avaliável quando o projeto puder ser acessado no repositório, 
instalado, executado e analisado pelo docente.  
A aplicação deverá permitir a verificação das páginas solicitadas, da estrutura em Next.js, 
dos componentes utilizados, do layout global, da navegação, da estilização e da 
organização do repositório.  
Também deverá ser possível verificar o consumo da API, a montagem da listagem de 
cursos a partir dos dados retornados, o filtro da categoria Cursos e a página de detalhes 
baseada no curso selecionado.  
Arquivos, componentes ou funções que existam no projeto, mas não estejam integrados à 
aplicação ou não produzam resultado observável durante a execução, não serão 
considerados evidência plena de atendimento aos critérios avaliativos. 
