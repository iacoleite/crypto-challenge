![Thumbnails GitHub (2)](https://github.com/iacoleite/crypto-challenge/assets/154355940/1e56332e-4e35-499c-896a-80905512fe39)
## Sobre
Projeto desenvolvido no programa ONE - Oracle Next Education realizado pela Alura em parceria com a Oracle. O projeto foi desenvolvido no decorrer dos cursos voltados à Lógica de programação com o uso de JavaScript, HTML, CSS e GitHub.

### Habilidades desenvolvidas:
- Ambientes de desenvolvimento, estrutura de arquivos e tags;
- Lógica de programação;
- Classes, posicionamento, Flexbox;
- Header, footer e variáveis CSS;
- Responsividade de publicação de projetos.

### Proposta
Aplicação que criptografa e descriptografa textos utilizando as "chaves" a seguir:
- A letra "e" é convertida para "enter"
- A letra "i" é convertida para "imes"
- A letra "a" é convertida para "ai"
- A letra "o" é convertida para "ober"
- A letra "u" é convertida para "ufat"

Requisitos:
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

O usuário tem a disposição um campo para inserção do texto a ser criptografado ou descriptografado e deve poder escolher entre as duas opções.
O resultado é exibido na tela junto à um botão que copia o texto gerado.

### Observações:
- Foi implementado o tratamento da input do usuário, de modo que os caracteres maiúsculos e/ou acentuados sejam substituídos por suas versões minúsculas e sem acentos.
- Para a função criptografar foi utilizado um algoritmo que faz a iteração dos caracteres e verifica se deve ou não ser substituído pela correspondente sequência, o caractere, substituído ou não, é então concatenado em uma string fazia, criando, assim, a versão criptografada da input.
- Para a função descriptografar, foi implementada uma solução diversa, utilizando o método split para dividir e substituir as sequências de caracteres pelo caractere correspondente de acordo com o que foi proposto.

<img src="https://github.com/iacoleite/crypto-challenge/assets/154355940/fe1c4492-afa6-4493-bb4e-e46ddca35d2f" width="250px">

