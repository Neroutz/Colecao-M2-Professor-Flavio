Integrantes do Grupo - M2

• Leonardo Nunes dos Santos — RGM: 11261103601
• Gabriel Henrique Costa Silva — RGM: 11261103659
• Larissa Ferreira Dias — RGM: 11261104062
• Ian Oliveira de Castro — RGM: 11261103710
• Danilo Cesar Costa Gonçalves — RGM: 11261102792


================INSTRUÇÕES PARA RODAR O CÓDIGO!========================

!!!!!!!!!!!AVISO!!!!!!!

• Caso o arquivo esteja em zip, pode ocorrer uma "duplicação" de PASTAS onde você precisa dar CD na correta, Coleção

--> cd coleção ou cd com tab

cd .\Coleção\

cd Coleção

--> Conferindo DEPENDÊNCIAS • Passo 1

• Confira se seu DJANGO está INSTALADO.

pip install django
pip install django-cors-headers

--> Criação do Banco • Passo 2

• Após isso crie o banco de dados

python manage.py makemigrations
python manage.py migrate

--> Logando no Banco de Dados • Passo 3

• Com o banco de dados criado, crie um usuário para ter acesso.

python manage.py createsuperuser

--> Abrindo o servidor • Passo Final - BackEnd

• Abra o terminal e digite o comando abaixo.

python manage.py runserver

• Abra um novo terminal, SEM FECHAR o BackEnd que está rodando, precisamos que ele esteja em outro terminal com o servidor aberto.

================FRONTEND========================

--> Entrando na pasta do FrontEnd • Passo 1

• Entre na pasta do FrontEnd para poder rodar ele.

cd frontend

• Outra forma de acessar a pasta sem precisar escrever "frontend" é escrevendo "cd" é clicando TAB.

-->  Conferindo DEPENDÊNCIAS • Passo 2

• Baixe as DEPENDÊNCIAS do projeto.

npm install

--> FrontEnd • Passo Final

• Digite o comando abaixo no terminal, após verificar que está na pasta correta (cd frontend)

npm run dev

 