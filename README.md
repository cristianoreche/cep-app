# 📦 CEP App

Este é um aplicativo simples para **consulta e gerenciamento de endereços** baseado no **CEP**. O projeto permite que você:

✅ Adicione novos endereços  
✅ Edite endereços existentes  
✅ Exclua endereços salvos  
✅ Busque automaticamente os detalhes do endereço via **ViaCEP**  
✅ Salve os dados no **localStorage** para persistência  

---

## 🚀 **Tecnologias utilizadas**
- **React** (v19)
- **TypeScript**
- **Axios** (para chamadas HTTP ao ViaCEP)
- **TailwindCSS** (para estilização)
- **LocalStorage** (para armazenar os endereços)

---

## 🛠 **Como instalar e rodar o projeto**

### 1️⃣ **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/cep-app.git
```

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/cep-app.git
cd cep-app
```

### 2️⃣ Instale as dependências

Se estiver usando npm:

```bash
npm install
```

### 3️⃣ Rodar o projeto

Se estiver usando npm:

```bash
npm start
```
O projeto será iniciado e estará acessível em http://localhost:3000.

### Estrutura do projeto

📦 cep-app
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 AddressForm.tsx   # Formulário para adicionar/editar endereços
 ┃ ┃ ┣ 📜 AddressList.tsx   # Lista de endereços salvos
 ┃ ┣ 📜 types.ts            # Definição da interface Address
 ┃ ┣ 📜 App.tsx             # Componente principal da aplicação
 ┃ ┣ 📜 index.tsx           # Ponto de entrada da aplicação
 ┣ 📜 package.json          # Dependências do projeto
 ┣ 📜 README.md             # Documentação do projeto

