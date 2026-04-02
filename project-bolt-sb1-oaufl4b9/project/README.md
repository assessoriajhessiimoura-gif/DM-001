# DIM Retífica de Motores e Cabeçotes

Site profissional moderno e altamente persuasivo para DIM Retífica de Motores e Cabeçotes.

## Estrutura do Projeto

```
├── index.html              # Arquivo principal do HTML
├── src/
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Ponto de entrada
│   ├── index.css          # Estilos globais
│   ├── components/        # Componentes React
│   └── hooks/             # Custom hooks
├── public/                # Arquivos estáticos (imagens, vídeos)
├── dist/                  # Build gerado (produção)
├── vite.config.ts         # Configuração Vite
├── netlify.toml          # Configuração Netlify
└── package.json          # Dependências e scripts
```

## Deploy na Netlify

### Opção 1: Usando GitHub (Recomendado)

1. Faça push do projeto para GitHub
2. Acesse [Netlify App](https://app.netlify.com)
3. Clique em "New site from Git"
4. Conecte seu repositório GitHub
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Clique em "Deploy"

### Opção 2: Deploy Manual

```bash
# 1. Instale Netlify CLI globalmente
npm install -g netlify-cli

# 2. Faça login
netlify login

# 3. Deploy
netlify deploy --prod
```

## Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Otimizações para Netlify

- ✅ Arquivo `netlify.toml` configurado
- ✅ Arquivo `public/_redirects` para SPA routing
- ✅ Vite configurado para otimização de produção
- ✅ Sourcemaps desabilitados em produção
- ✅ Todos os assets estáticos no `public/`
- ✅ Caminhos de assets usando `/` (absolutos)

## Características do Site

- Design industrial moderno com preto, laranja e branco
- Animações suaves em scroll
- Hero section com logo DIM destacada
- Seção de serviços com 4 categorias
- Seção de diferenciais com 6 pontos
- Galeria de trabalhos
- Carrossel de avaliações de clientes
- CTA persuasiva
- Seção de contato com redes sociais
- Botões flutuantes de WhatsApp e orçamento
- Totalmente responsivo
- Performance otimizada

## Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (ícones)
- Supabase (banco de dados)

## Contato

- WhatsApp: [Link](https://wa.me/553131973228099)
- Instagram: [@dm_retifica](https://www.instagram.com/dm_retifica)
- Facebook: [DIM Retífica](https://www.facebook.com/share/1AshtwjuLz/)
