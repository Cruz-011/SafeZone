# 🚨 SafeZone - Global Solution 🚨

## 🎥 Link do vídeo de apresentação

https://youtube.com/shorts/iXE0GYO6HXg?feature=share

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
* ☕ Backend em **Java + Spring Boot** (API própria com CRUD)
* 💾 Banco H2 (em memória)

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
│   └── api.js        # Arquivo de configuração da URL base da API
├── styles            # Estilização global
├── README.md
```

---

## 👥 Integrantes do Grupo

* Cauan da Cruz Ferreira - 558238
* Renan Dorneles Barboza Boucault - 557820
* Igor Dias Barrocal - 555217

---

## ⚙️ Como Rodar o Projeto Mobile (React Native)

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

4. Inicie o app:

```bash
npx expo start
```

---

## ☕ Como Rodar o Backend Java (Spring Boot)

1. Vá até a pasta `safezone-backend` (adicionada à raiz).
2. No terminal, execute:

```bash
./mvnw spring-boot:run
```

> Ou, se estiver usando VS Code com extensões Java/Spring Boot:
>
> * Abra a pasta `safezone-backend`
> * Rode pelo **Spring Boot Dashboard** com um clique

3. A API será iniciada em:

```
http://localhost:8080
```

Acesse o console do banco em:

```
http://localhost:8080/h2-console
```

**JDBC URL:** `jdbc:h2:mem:testdb`
**Usuário:** `sa`
**Senha:** *(em branco)*

---

## 🔧 Configuração do Frontend com a API

No arquivo `/services/api.js`, defina o IP da sua máquina (se estiver rodando o backend local):

```js
export const API_URL = "http://192.168.X.X:8080";
```

Substitua `192.168.X.X` pelo IP local (ou use `localhost` se estiver rodando no emulador).

---

## ✅ Entregáveis Atendidos

* ✅ 5 telas com navegação funcional (Home, Emergência, Usuário, Locais Seguros, Mapa)
* ✅ CRUD completo dos dados do usuário (via Java Spring Boot)
* ✅ Estilização clara e objetiva
* ✅ Integração com backend real
* ✅ Vídeo de apresentação da solução

---

## 💡 Considerações Finais

O **SafeZone** é mais que um app. É uma iniciativa de impacto, feita pra funcionar **onde cada segundo conta**.
Com backend robusto em Java e front em React Native, unimos tecnologia e propósito.

---

