# 🚨 SafeZone - Global Solution 🚨

## 🎥 Link do vídeo de apresentação

👉 \[Adicione aqui o link do vídeo no YouTube]

---

## 🧠 Descrição da Solução

O **SafeZone** é um aplicativo mobile desenvolvido na disciplina de **Mobile Application Development** como parte da **Global Solution da FIAP**.

### 🎯 Objetivo:

Oferecer uma solução rápida e acessível para situações de emergência, permitindo que o usuário registre informações pessoais importantes, acione serviços, consulte locais seguros e se proteja **de forma prática e instantânea.**

**Sem login, sem barreiras. É abrir e usar.**

---

## 🚀 Funcionalidades Implementadas

* 🏠 **Tela Home** — Central de acesso rápido às funções principais.
* 👤 **Tela Usuário** — Cadastro de informações pessoais (nome, contato, dados de saúde, alergias, etc.).
* 🆘 **Tela de Emergência (SOS)** — Acionamento imediato de ajuda e acesso a informações críticas.
* 🗺️ **Tela de Mapa** — Exibe locais seguros e traça rotas até eles.
* 📍 **Tela de Locais Seguros** — Lista dos pontos de apoio mais próximos.

---

## 🔗 Tecnologias Utilizadas

* ⚛️ React Native + Expo
* 🔥 Expo Router (Navegação)
* 🔗 Axios (Consumo de API)
* 🎨 CSS-in-JS (Estilização)
* ☕ Backend em Java (API própria)

---

## 🗺️ Arquitetura do Projeto

```
/SafeZone
├── app
│   ├── (tabs)        # Navegação principal com abas
│   │   ├── index     # Tela inicial (Home)
│   │   ├── usuario   # Tela de informações do usuário
│   │   ├── mapa      # Tela de mapa com locais seguros
│   │   ├── locais    # Lista de locais seguros
│   │   └── sos       # Tela de emergência (SOS)
├── assets            # Imagens e recursos visuais
├── components        # Componentes reutilizáveis
├── services          # Comunicação com a API
├── styles            # Estilização global
├── README.md
```

---

## 👥 Integrantes do Grupo

* Cauan da Cruz Ferreira - 558238
* Renan Dorneles Barboza Boucault - 557820
* Igor Dias Barrocal - 555217

---

## ⚙️ Como Rodar o Projeto Localmente

1. Clone o repositório:

```bash
git clone https://github.com/Cruz-011/SafeZone.git
```

2. Acesse a pasta do projeto:

```bash
cd SafeZone
```

3. Instale as dependências:

```bash
npm install
# ou
yarn install
```

4. Execute o app:

```bash
npx expo start
```

---

## 🔧 Configuração da API

No arquivo `/services/api.js`, configure o endpoint da API:

```javascript
export const API_URL = "http://SEU_IP:PORTA";
```

---

## ✅ Entregáveis Atendidos

* ✅ 5 telas com navegação funcional (Home, Emergência, Usuário, Locais Seguros, Mapa)
* ✅ CRUD completo dos dados do usuário e locais
* ✅ Estilização alinhada ao propósito (simples, clara, objetiva)
* ✅ Integração com API backend em Java
* ✅ Vídeo de apresentação da solução

---

## 💡 Considerações Finais

O **SafeZone** é um app criado com propósito e foco em emergências. Uma ferramenta prática, direta, **onde cada segundo conta.** Interface intuitiva, sem burocracia, sem login. É abrir e agir.
