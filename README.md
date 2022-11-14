# MINICURSO GITHUB

Uma Introdução com foco na colaboração.
- Tutor: Prof. MsC. Cloves Rocha.

1. Começando 
- Sobre Controle de Versão
De forma resumida, abordaremos aqui como começar com o Git. 
Nós vamos começar explicando sobre algumas ferramentas de controle da versão, então vamos falar de como ter o Git rodando no seu sistema e finalmente como configurado para começar a trabalhar com ele. 

- Sobre Controle de Versão
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

Fonte: https://git-scm.com/book/pt-br/v2
