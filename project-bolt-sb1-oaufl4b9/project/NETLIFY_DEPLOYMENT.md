# Guia de Deploy na Netlify

## Status do Projeto

✅ **Projeto pronto para deploy na Netlify**

Todas as configurações necessárias foram implementadas para garantir um deploy sem problemas.

## Configurações Implementadas

### 1. `netlify.toml`
- Build command: `npm run build`
- Publish directory: `dist`
- Redirect rules para SPA (Single Page Application)

### 2. `public/_redirects`
- Redireciona todas as rotas para `index.html` para suportar routing no React
- Necessário para que rotas do React funcionem corretamente

### 3. `vite.config.ts`
- Otimizado para produção
- Saída na pasta `dist`
- Sourcemaps desabilitados para reduzir tamanho
- Minificação automática

### 4. Estrutura de Arquivos
```
project/
├── index.html              ← Ponto de entrada (raiz)
├── src/                    ← Código-fonte React
├── public/                 ← Arquivos estáticos
│   ├── Picsart_26-04-01_22-07-15-322.png
│   ├── WhatsApp_Image_*.jpeg
│   ├── WhatsApp_Video_*.mp4
│   └── _redirects          ← Importante para Netlify
├── dist/                   ← Gerado pelo build (não enviar)
├── netlify.toml            ← Configuração Netlify
├── vite.config.ts          ← Configuração build
├── package.json
└── README.md
```

## Como Fazer Deploy

### Opção 1: Via GitHub (Recomendado)

1. **Prepare o repositório:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/seu-usuario/seu-repo.git
   git push -u origin main
   ```

2. **No painel Netlify:**
   - Vá para https://app.netlify.com
   - Clique em "Add new site" → "Import an existing project"
   - Conecte com GitHub
   - Selecione o repositório
   - Configure:
     - Base directory: `.` (deixar em branco)
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Clique em "Deploy site"

### Opção 2: Deploy Manual via Netlify CLI

```bash
# 1. Instalar CLI
npm install -g netlify-cli

# 2. Fazer login
netlify login

# 3. Deploy (escolha "Create & configure a new site")
netlify deploy

# 4. Deploy para produção
netlify deploy --prod
```

### Opção 3: Arraste e Solte (Teste Rápido)

1. Acesse https://app.netlify.com/drop
2. Arraste a pasta `dist/` para fazer upload

## Verificação Pós-Deploy

Após o deploy, verifique:

- ✅ Home page carrega corretamente
- ✅ Logo DIM aparece no Hero
- ✅ Imagens e vídeos estão visíveis
- ✅ Animações funcionam ao rolar
- ✅ Links de navegação funcionam
- ✅ Botões flutuantes (WhatsApp/Orçamento) estão visíveis
- ✅ Formulário de contato está funcional
- ✅ Responsive em mobile
- ✅ Performance adequada (use Lighthouse)

## Variáveis de Ambiente

Se precisar de variáveis de ambiente (ex: API keys), configure na página de settings do Netlify:
- Vá em "Site settings" → "Build & deploy" → "Environment"
- Adicione as variáveis necessárias

Atualmente, o `.env` não possui dados sensíveis.

## Troubleshooting

### Erro 404 em páginas específicas
- ✅ Resolvido com `_redirects` e `netlify.toml`

### Imagens/vídeos não carregam
- Verificar se estão em `public/`
- Usar caminhos com `/` (exemplo: `/Picsart_26-04-01_22-07-15-322.png`)

### Build falha
- Executar localmente: `npm run build`
- Verificar erros TypeScript: `npm run typecheck`
- Limpar node_modules: `rm -rf node_modules && npm install`

### Assets não carregam em produção
- Verificar aba "Network" no DevTools
- Verificar path em `dist/assets/`

## Performance

O site atual tem:
- CSS: 24.30 kB (gzip: 4.36 kB)
- JavaScript: 175.76 kB (gzip: 53.00 kB)
- Imagens: ~5.2 MB (públicas, não minificadas)

Para melhorar performance:
- Compactar imagens (usar TinyPNG ou similar)
- Converter vídeos para formatos mais eficientes
- Usar lazy loading para imagens

## Domínio Customizado

Para usar domínio próprio (ex: www.dimretifica.com.br):

1. No painel Netlify: "Site settings" → "Domain management"
2. Clique em "Add custom domain"
3. Siga as instruções para atualizar DNS
4. Esperar propagação (até 24 horas)

## Certificado SSL

✅ Netlify fornece SSL automático e gratuito (HTTPS)

## Suporte

Para dúvidas sobre Netlify:
- https://docs.netlify.com/
- https://community.netlify.com/

---

**Projeto configurado e pronto para deploy! 🚀**
