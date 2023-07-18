<p align="center">
<img src="mini-projects/tailwindcss.png" width="200" height="125"></p>

# 💡 Taiwind CSS

### 🌟 Initial Requirements

```shell
  "tailwindcss": "^3.3.2"
```

```shell
  "prettier": "3.0.0",
```

```shell
  "prettier-plugin-tailwindcss": "^0.4.0",
```

## 📚 Descrever aprendizados

- Novas ideias
  
  Detalhes quando on hover, exemplo: aparecer a borda inferior; deslocar o botão para cima, para que pareça estar se movendo; transições com duração de tempo;


- Otimizações

  De escrita de classes, sempre iniciar pelo mobile e ir escalando as responsividades em diferentes tamanhos de telas. 

  Sobre posicionamento, principalmente utilizando `position: relative` e `position: absolute`.

- Atenção aos detalhes

  Nas imagens tentar fazer um tratamento utilizando gradiente em imagens.
  Como utilizar a classe `group`, para que determinadas classes sejam acionadas ao mesmo tempo.

  Tudo dentro da `div` irá escalar on hover. Exemplo:

```shell
  <div class="group item">
    <img src="images/desktop/image-fisheye.jpg" alt="Earth" class="group-hover:scale-110">
    <img src="images/mobile/image-fisheye.jpg" alt="Earth" class="md:hidden w-full">
    <div class="item-gradient"></div>
    <h5>Make it Fisheye</h5>
  </div>
```

### 📚 boas práticas

Plugin `Prettier `para organizar as classes
Para instalar como uma dependência de desenvolvimento

```shell
  npm install -D prettier prettier-plugin-tailwindcss
```

Para aplicar no in the file `prettier.config.js`

```shell
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
}
```

## 💻 Possíveis Otimizações

- Atualizar classes de todas as páginas, remover itens desnecessários.
- Atualizar `nav` (Home page)
- Remover imagem de fundo do início e trocar por um vector (Home page)
- Remover SVGs do html e fazer arquivos de svg no public (mais leve e organizado)
- Inseri-los usando a tag `img`
- Padronizar páginas internas, seguir mesmo estilo de código e padrão de cores
- Remover imagens do `head` das páginas internas
- Inserir DarkMode

