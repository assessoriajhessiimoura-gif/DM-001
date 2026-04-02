# Checklist de Deploy - DIM Retífica

## Antes de Fazer Deploy

### ✅ Verificações Técnicas
- [x] Projeto compila sem erros (`npm run build`)
- [x] Nenhum aviso de type errors (`npm run typecheck`)
- [x] Todos os componentes funcionam localmente
- [x] Imagens e vídeos no `public/` estão acessíveis
- [x] Responsiveness testado (mobile, tablet, desktop)
- [x] Performance adequada

### ✅ Configurações Netlify
- [x] `netlify.toml` configurado
- [x] `public/_redirects` implementado
- [x] Build command: `npm run build`
- [x] Publish directory: `dist`
- [x] Vite config otimizado para produção

### ✅ Estrutura de Pastas
```
✓ index.html na raiz
✓ src/ com todos componentes
✓ public/ com mídia
✓ dist/ gerado no build
✓ node_modules/ (ignorado no git)
```

### ✅ Caminhos e Links
- [x] Logo: `/Picsart_26-04-01_22-07-15-322.png`
- [x] WhatsApp: `https://wa.me/553131973228099`
- [x] Instagram: `https://www.instagram.com/dm_retifica`
- [x] Facebook: `https://www.facebook.com/share/1AshtwjuLz/`
- [x] Todos os links estão funcionando

### ✅ Componentes
- [x] Hero section com logo
- [x] About company
- [x] Services (4 serviços)
- [x] Differentials (6 diferenciais)
- [x] Gallery
- [x] Reviews (carrossel com 6 avaliações)
- [x] CTA section
- [x] Contact section
- [x] Floating buttons (WhatsApp + Orçamento)

### ✅ Animações e Interatividade
- [x] Scroll animations funcionando
- [x] Hover effects nos botões
- [x] Carrossel de avaliações automático
- [x] Botões flutuantes aparecem ao rolar

### ✅ Design e Branding
- [x] Cores corretas (preto, laranja, branco, cinza metálico)
- [x] Typography profissional
- [x] Logo em destaque na Hero
- [x] Visual industrial moderno
- [x] Tonalidade técnica e confiável

## Passos para Deploy

### 1. Preparar Repositório Git
```bash
cd /path/to/project
git init
git add .
git commit -m "Initial commit: DIM Retífica website"
git remote add origin https://github.com/seu-usuario/seu-repo.git
git push -u origin main
```

### 2. Conectar na Netlify
- Acesse https://app.netlify.com
- Clique "Add new site" → "Import an existing project"
- Selecione GitHub
- Autorize e escolha o repositório

### 3. Configurar Build Settings
```
Base directory: . (deixar em branco)
Build command: npm run build
Publish directory: dist
```

### 4. Deploy
- Clique "Deploy site"
- Aguarde a compilação (2-3 minutos)
- Receba URL automática (subdomain.netlify.app)

### 5. Adicionar Domínio Customizado (Opcional)
- "Domain management" → "Add custom domain"
- Seguir instruções DNS
- Esperar propagação (até 24 horas)

## Depois do Deploy

### ✅ Testes em Produção
- [ ] Homepage carrega sem erros
- [ ] Logo exibida corretamente
- [ ] Todas as seções visíveis
- [ ] Imagens e vídeos carreguem
- [ ] Links funcionam
- [ ] Formulários responsivos
- [ ] Mobile layout correto
- [ ] Sem erros no console (F12)
- [ ] Performance adequada (Lighthouse)
- [ ] WhatsApp button funciona

### ✅ Performance Checks
- [ ] Lighthouse Score > 80
- [ ] Time to First Byte < 1s
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 3s

### ✅ SEO Básico
- [ ] Title correto
- [ ] Meta description
- [ ] Open Graph tags
- [ ] Mobile viewport configurado
- [ ] Sitemap (opcional)

### ✅ Monitoramento Pós-Deploy
- [ ] Verificar logs de erro (Netlify > Analytics)
- [ ] Monitorar uptime
- [ ] Testar em diferentes navegadores
- [ ] Testar em diferentes dispositivos

## URLs e Credenciais

### Netlify
- URL Deploy: https://app.netlify.com
- Site gerado: `seu-site.netlify.app`
- Domínio customizado: (será adicionado)

### Redes Sociais
- WhatsApp: https://wa.me/553131973228099
- Instagram: https://www.instagram.com/dm_retifica
- Facebook: https://www.facebook.com/share/1AshtwjuLz/

## Troubleshooting Rápido

### "404 em rotas específicas"
✓ Já resolvido com `_redirects` e `netlify.toml`

### "Imagens não aparecem"
✓ Verificar se estão em `public/`
✓ Usar caminhos com `/`

### "Build falhando"
```bash
npm run typecheck  # Verificar tipos
npm run build      # Testar build local
npm run lint       # Verificar linting
```

### "CSS/JS não carregam em produção"
✓ Verificar versões dos assets em `dist/assets/`
✓ Limpar cache do navegador (Ctrl+Shift+Del)
✓ Redeployar (force deploy)

## Documentação Útil

- [Vite Docs](https://vitejs.dev)
- [Netlify Docs](https://docs.netlify.com)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

---

**Status: ✅ Pronto para Deploy**

Projeto 100% configurado e otimizado para Netlify!
