# portfolio-pessoal

Portfólio pessoal em Next.js com export estático, servido por nginx numa VM da Oracle Cloud.

## Desenvolvimento

```bash
npm i
npm run dev
```

Abra http://localhost:3000/pt/ (também `/en/` e `/de/`).

Todo o conteúdo do site (textos, links, projetos, caminhos de imagem) fica em `content/`:

- `content/site.ts`: português (fonte principal, define o formato)
- `content/en.ts`: inglês
- `content/de.ts`: alemão

Ao mudar um texto em `site.ts`, mude também em `en.ts` e `de.ts`. O TypeScript acusa erro se a estrutura divergir.
Na raiz `/`, o nginx redireciona para o idioma do navegador (`deploy/nginx.conf`).

## Assets

```bash
./scripts/fetch-assets.sh
```

Baixa o avatar do GitHub para `public/avatar.jpg` e os cards de cada repositório para `public/projects/`. Rode da raiz do repo.

## Build

```bash
npm run build
```

Gera o site estático em `out/`.

## Deploy na Oracle Cloud

Na VM (Ubuntu):

```bash
sudo apt update && sudo apt install -y nginx certbot python3-certbot-nginx
sudo mkdir -p /var/www/portfolio && sudo chown "$USER" /var/www/portfolio
```

Copie `deploy/nginx.conf` para a VM, troque `seu-dominio.com.br` pelo seu domínio e ative:

```bash
sudo cp nginx.conf /etc/nginx/sites-available/portfolio
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

(Ou copie direto para `/etc/nginx/conf.d/portfolio.conf`.)

Libere as portas 80 e 443 em dois lugares:

1. Na Security List da VCN no console da OCI (Ingress, TCP, origem `0.0.0.0/0`).
2. No firewall da própria VM, pois as imagens Ubuntu da Oracle usam iptables:

```bash
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 443 -j ACCEPT
sudo netfilter-persistent save
```

Com o DNS do domínio apontando para o IP da VM, gere o certificado (o certbot adiciona o bloco 443):

```bash
sudo certbot --nginx -d seu-dominio.com.br
```

Da sua máquina, publique:

```bash
DEPLOY_HOST=usuario@ip ./deploy.sh
```

O script roda `npm run build` e sincroniza `out/` para `/var/www/portfolio/` via rsync.
