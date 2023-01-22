 
    swal.fire({
        title: "¿Eres anestesiologo o residente de anestesiologia?",
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `no`
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Ingresa!', '', 'Esta herramienta es para anestesiologos')
          let usuario= result.isConfirmed
          sessionStorage.setItem("usuario", usuario)
        };
         if (result.isDenied) {
          Swal.fire("esta herramienta es para anestesiologos")
        
      }
    }
    )
    let usuario;
let usuariostorage= sessionStorage.getItem("usuario")
if (usuariostorage){
    usuario=usuariostorage;
    let mensaje= "bienvenido";
    swal.fire ("Bienvenido")}


    fetch ()