# MINICURSO GITHUB

Uma Introdução com foco na colaboração.
- Tutor: Prof. MsC. Cloves Rocha.

1. Começando... 
- Sobre Controle de Versão.

De forma resumida, abordaremos aqui como começar com o Git. 
Nós vamos começar explicando sobre algumas ferramentas de controle da versão, então vamos falar de como ter o Git rodando no seu sistema e finalmente como configurado para começar a trabalhar com ele. 

- Sobre Controle de Versão.

O que é "controle de versão", e porque eu deveria me importar?

- Controle de versão é um sistema que registra alterações em um arquivo ou conjunto de arquivos ao longo do tempo para que você possa lembrar as versões específicas mais tarde. 
Para os exemplos neste livro você irá utilizar o código-fonte de software com arquivos que possui o controle da versão, embora na realidade você possa fazer isso com quase qualquer tipo de arquivo em um computador.

- Sistemas Locais de Controle de Versão
O método de controle de versão de muitas pessoas é copiar os arquivos para outro diretório (talvez um diretório com carimbo de tempo, se eles forem espertos). 
Esta abordagem é muito comum porque é muito simples, mas também é incrivelmente propensa a erros. É fácil esquecer em qual diretório você está e acidentalmente sobreescrever o arquivo errado ou copiar arquivos que não quer.

![image](https://user-images.githubusercontent.com/2080592/201734448-7b23b784-ac9b-4501-85b8-4c7878a41343.png)
Figure 1. Controle de versão local. 
- O método de controle de versão de muitas pessoas é copiar os arquivos para outro diretório (talvez um diretório com carimbo de tempo, se eles forem espertos). Esta abordagem é muito comum porque é muito simples, mas também é incrivelmente propensa a erros. 
É fácil esquecer em qual diretório você está e acidentalmente sobreescrever o arquivo errado ou copiar arquivos que não quer.

2. Uma Breve História do Git

Como muitas coisas na vida, o Git começou com um pouco de destruição criativa e uma ardente controvérsia.

O núcleo (kernel) do Linux é um projeto de código aberto com um escopo bastante grande. A maior parte da vida da manutenção do núcleo o Linux (1991-2002), as mudanças no código eram compartilhadas como correções e arquivos. Em 2002, o projeto do núcleo do Linux começou usar uma DVCS proprietária chamada BitKeeper.

Em 2005, a relação entre a comunidade que desenvolveu o núcleo do Linux e a empresa que desenvolveu BitKeeper quebrou em pedaços, e a ferramenta passou a ser paga. Isto alertou a comunidade que desenvolvia o Linux (e especialmente Linux Torvalds, o criador do Linux) a desenvolver a sua própria ferramenta baseada em lições aprendidas ao usar o BitKeeper. Algumas metas do novo sistema era os seguintes:

- Velocidade

- Projeto simples

- Forte suporte para desenvolvimento não-linear (milhares de ramos paralelos)

- Completamente distribuído

- Capaz de lidar com projetos grandes como o núcleo o Linux com eficiência (velocidade e tamanho dos dados)

Desde seu nascimento em 2005, Git evoluiu e amadureceu para ser fácil de usar e ainda reter essas qualidades iniciais. Ele é incrivelmente rápido, é muito eficiente com projetos grandes, e ele tem um incrível sistema de ramos para desenvolvimento não linear.

3. O Básico do Git
- Então, em poucas palavras, o que é o Git ? 
Esta é uma parte que é importante aprender, porque se você entender o que o Git é e os fundamentos de como ele funciona, em seguida, provavelmente usar efetivamente o Git será muito mais fácil para você. 
Enquanto você estiver aprendendo sobre o Git, tente esquecer das coisas que você pode saber sobre outros VCSs, como Subversion e Perforce; isso vai ajudá-lo a evitar a confusão sutil ao usar a ferramenta. 
O Git armazena e vê informações de forma muito diferente do que esses outros sistemas, mesmo que a interface do usuário seja bem semelhante, e entender essas diferenças o ajudará a não ficar confuso. (Perforce)

4. Fundamentos do Git - Obtendo um Repositório Git
- Você pode obter um projeto Git utilizando duas formas principais. 1. Você pode pegar um diretório local que atualmente não está sob controle de versão e transformá-lo em um repositório Git, ou 2. Você pode fazer um clone de um repositório Git existente em outro lugar.

- Inicializando um Repositório em um Diretório Existente
Para você começar a monitorar um projeto existente com Git, você deve ir para o diretório desse projeto. Se você nunca fez isso, use o comando a seguir, que terá uma pequena diferença dependendo do sistema em que está executando:

para Linux:

$ cd /home/user/your_repository
para Mac:

$ cd /Users/user/your_repository
para Windows:

$ cd /c/user/your_repository
depois digite:

$ git init
- Isso cria um novo subdiretório chamado .git que contém todos os arquivos necessários de seu repositório – um esqueleto de repositório Git. Neste ponto, nada em seu projeto é monitorado ainda. (Veja [ch10-git-internals] para mais informações sobre quais arquivos estão contidos no diretório .git que foi criado.)

- Se você quer começar a controlar o versionamento dos arquivos existentes (ao contrário de um diretório vazio), você provavelmente deve começar a monitorar esses arquivos e fazer um commit inicial. Você pode fazer isso com alguns comandos git add que especificam os arquivos que você quer monitorar, seguido de um git commit:

$ git add *.c
$ git add LICENSE
$ git commit -m 'initial project version'
Nós já veremos o que esses comandos fazem. 
Mas neste ponto você já tem um repositório Git com arquivos monitorados e um commit inicial.

Clonando um Repositório Existente
- Caso você queira obter a cópia de um repositório Git existente – por exemplo, um projeto que você queira contribuir – o comando para isso é git clone. Se você estiver familiarizado com outros sistemas VCS, tal como Subversion, você vai notar que o comando é clone e não checkout. Essa é uma diferença importante – em vez de receber apenas uma cópia para trabalho, o Git recebe uma cópia completa de praticamente todos os dados que o servidor possui. Cada versão de cada arquivo no histórico do projeto é obtida por padrão quando você executa git clone. De fato, se o disco do servidor ficar corrompido, em geral você pode usar qualquer uma das cópias de qualquer um dos clientes para reverter o servidor ao estado em que estava quando foi clonado (talvez você perca algumas configurações do servidor, mas todos os dados versionados estarão lá — veja Getting Git on a Server para mais detalhes).

Você clona um repositório com git clone [url]. 
Por exemplo, caso você queria clonar a biblioteca Git Linkable chamada libgit2, você pode fazer da seguinte forma:

$ git clone https://github.com/libgit2/libgit2
- Isso cria um diretório chamado libgit2, inicializa um diretório .git dentro dele, recebe todos os dados deste repositório e deixa disponível para trabalho a cópia da última versão. Se você entrar no novo diretório libgit2, você verá os arquivos do projeto nele, pronto para serem editados ou utilizados. Caso você queira clonar o repositório em um diretório diferente de libgit2, é possível especificar esse diretório utilizando a opção abaixo:

$ git clone https://github.com/libgit2/libgit2 mylibgit
- Este comando faz exatamente a mesma coisa que o anterior, mas o diretório de destino será chamado mylibgit.

O Git possui diversos protocolos de transferência que você pode utilizar. O exemplo anterior usa o protocolo https://, mas você também pode ver git:// ou user@server:path/to/repo.git, que usam o protocolo de transferência SSH. Em Getting Git on a Server é apresentado todas as opções disponíveis com as quais o servidor pode ser configurado para acessar o seu repositório Git, e os prós e contras de cada uma.

5. Pedindo Ajuda
- Se você precisar de ajuda para usar o Git, há três formas de acessar a página do manual de ajuda (manpage) para qualquer um dos comandos Git:

$ git help <verb>
$ git <verb> --help
$ man git-<verb>
- Por exemplo, você pode ver a manpage do commando config rodando

$ git help config 
- Estes comandos podem ser acessados de qualquer lugar, mesmo desconectado. Se as manpages e este livro não forem suficientes e você precisar de ajuda personalizada, você pode tentar os canais #git ou #github no servidor IRC Freenode (irc.freenode.net). Estes canais estão sempre cheios com centenas de pessoas que são bem versadas com o Git e dispostas a ajudar.

Fonte: https://git-scm.com/book/pt-br/v2

6. GitHub - Contribuindo em um projeto na prática...
  - Este conteúdo será aplicado na prática no laboratório da Softex Recife.
