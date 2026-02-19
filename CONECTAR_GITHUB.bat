@echo off
echo Ola! Vamos conectar este projeto ao seu GitHub.
echo.
echo Antes de continuar, certifique-se de ter criado um repositorio novo no GitHub.
echo Se ainda nao criou, acesse: https://github.com/new
echo Deixe o repositorio como PUBLICO.
echo NAO crie README, .gitignore ou License (ja temos).
echo.
set /p REPO_URL=Cole a URL do repositorio (ex: https://github.com/seu-usuario/uebi-v2.git): 
echo.
echo Conectando ao GitHub...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main
echo.
echo Enviando arquivos... (pode pedir seu login)
git push -u origin main
echo.
echo Pronto! Se tudo deu certo, seu codigo esta no GitHub.
echo Agora configure o GitHub Pages em Settings -> Pages -> GitHub Actions.
pause
