import sorriso from "./sorriso.png"
import "./App.css"
function App() {
  return(
  <div className="App" >
    <meta charset="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    Github:<a class="url" href="https://github.com/PedroAFSantos">github.com/PedroAFSantos</a><p/>
<h1>Hello, World</h1>
<img src={sorriso} title="Chorando de Rir" className="foto" alt="sorriso"/>
<div className="Texto2">
<p> Clique no emoji para exibir o nome dele </p>
</div>
<div className="emoji">
<section class="emoji">
<button onclick="CarConteudo()" title="Sorriso" >😀</button> 
<span id="conteudo"></span>
</section>
<section class="emoji">
<button title="Soltando Confetes">🎉</button>
</section>
<section class="emoji">
<button title="Dançando">💃</button>
</section>
</div>
</div>
);
}
export default App;