### Exercício 1
Minha principal dificuldade foi entender onde rodar os comandos, se era para ser no meu terminal, no da aws, do mysql... E também entender o que deveria ser substituido nos comandos apartir do login do root

### Exercício 2
1. Primeiro é necessário entrar na máquina da EC2, depois clonar o repositório e instalá-lo.

3. 
```
$ ssh -i "nome-do-arquivo.pem" ubuntu@DNS-ou-IP-do-EC2
```

4. 
´´´
git clone link-do-repositorio.com
npm install
npm run start
´´´

6. 
```
npm run build
cd build/
sudo apt update
sudo apt install python
sudo python -mSimpleHTTPServer 80
```

7. Ao meu ver foi igual a aula, só mudou o repositório.