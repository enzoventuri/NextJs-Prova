"use client"; 
 
import { useState, useEffect, SetStateAction } from "react";
import CardCurso from "@/components/CardCurso";

interface CursoAPI {
    id: string,
    nome: string,
    titulo: string,
    descricao: string,
    preco: number,
    categoria: string,
    imagem: string
}
 
export default function Home() { 
  const [cursos, setCursos] = useState<CursoAPI[]>([]);
  const [busca, setBusca] = useState<string>("");
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<any>(null);
  
  useEffect(() => {
        let res;

        const fetchModel = async () => {
            try {
                res = await fetch(`https://dynamic-events-api.onrender.com/api/eventos`)
                
                if (!res.ok) {
                    setErro("Erro ao fazer o fetch.");
                }
                const data = await res.json();

                const filteredCursos = data.filter((curso: any) => curso.categoria.includes("Cursos") 
                || curso.categoria.includes("Curso"));
                
                setCursos(filteredCursos);
                setErro(null)
            } catch(e) {
                setErro(`Erro ao fazer o fetch: ${e} `);
            } finally {
                setCarregando(false)
            }
        }

        fetchModel();
    }, []);

  const cursosBuscaFiltrado = cursos.filter(c => c.nome.toLowerCase().includes(busca.toLowerCase()) || 
  c.descricao.toLowerCase().includes(busca.toLowerCase()));
  
  return ( 
    <main className="p-8"> 
      <div className="mx-auto max-w-5xl"> 
        <section className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center 
sm:justify-between"> 
          <div> 
            <h1 className="text-3xl font-extrabold text-blue-600">Catálogo de Cursos</h1> 
            <p className="mt-1 text-sm text-slate-500"> 
              Treinamentos e capacitações técnicas exclusivas 
            </p> 
          </div> 
 
          <div className="relative w-full sm:w-72"> 
            <input 
              type="text" 
              placeholder="Buscar curso..." 
              onChange={(e) => setBusca(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm 
text-slate-800 outline-none transition-all focus:border-blue-600 focus:ring-2 
focus:ring-blue-100" 
            /> 
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 
hover:text-slate-600"> 
              {busca.length === 0 ? "" : "✕"} 
            </button> 
          </div> 
        </section> 
          
        <div>
          <span>{erro != null ? "ERRO" : ""}</span>
          <span>{carregando ? "Carregando catálogo" : ""}</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> 
          {cursosBuscaFiltrado.map((curso => (
              <CardCurso
                key={curso.id}
                id={curso.id}
                title={curso.nome}
                description={curso.descricao}
                category={curso.categoria}
                price={curso.preco}
                image={curso.imagem}
              />
          )))}
        </div> 
      </div> 
    </main> 
  ); 
} 