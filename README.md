inserir bootstrap no projeto
https://getbootstrap.com

Vamos gerar dois componentes, para realizar
o cadastro do produto, no backand que está nos
aguardando...

Criar componente
ng g c cadastrar-produtos

ng g c consultar-produtos
inserimos as rotas para que os links possam chegar até o componente

const routes: Routes = [
  { path: 'cadastrar-produtos', component: CadastrarProdutosComponent },
  { path: 'consultar-produtos', component: ConsultarProdutosComponent }
]

fazendo o app.module reconhecer as rotas criadas
  ],
  imports: [
   
    RouterModule.forRoot(routes)
  ]


Modificar o menu para exibir as páginas beaseado nas ROTAS mapeadas

Para implementarmos a edição, precisamos
criar uma página "Componente" novo para o projeto

ng g c editar-produtos

vamos ao app.module.ts.. configurar a rota para a página de edição de produtos.















