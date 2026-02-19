# Guia de Deploy no GitHub Pages com Domínio Personalizado

## 1. Criar Repositório no GitHub
1. Acesse [github.com/new](https://github.com/new).
2. Dê um nome ao repositório (ex: `uebi-v2`).
3. Deixe como **Public** (para o GitHub Pages funcionar na conta gratuita).
4. Não adicione README, .gitignore ou license (já temos).
5. Clique em **Create repository**.

## 2. Enviar Código Local
Abra o terminal na pasta do projeto e rode os comandos abaixo (substitua `SEU_USUARIO` e `NOME_REPO`):

```bash
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_REPO.git
git push -u origin main
```

## 3. Configurar GitHub Pages
1. No repositório, vá em **Settings** > **Pages**.
2. Em **Source**, selecione **GitHub Actions** (já configurei o workflow para você).
3. Aguarde alguns minutos para o processo (Action) rodar. Você pode acompanhar na aba **Actions**.

## 4. Configurar DNS (no Registro.br ou onde comprou o domínio)
Para que `uebistudio.com.br` funcione, você precisa configurar os apontamentos DNS:

### Tipo A
Crie 4 entradas do tipo **A** apontando para estes IPs do GitHub:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### Tipo CNAME (opcional, para www)
Se quiser usar `www.uebistudio.com.br`, crie uma entrada:
- Tipo: `CNAME`
- Nome: `www`
- Destino: `SEU_USUARIO.github.io`

Depois dessas configurações, pode levar algumas horas para o domínio propagar.
