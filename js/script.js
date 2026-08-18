function agregarCarrito(b)
{let t=b.textContent;
    b.textContent='✔ Agregado';
    b.style.background='#28a745';setTimeout(()=>{
        b.textContent=t;
        b.style.background='#ff2d7a';
    },
    1500);
}