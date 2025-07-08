// -------------------------------------------------------- +
//
// Este mock fue reemplazado por Firebase 
//
// Contiene un array "productos" para simular una base de datos
// y dos funciones asíncronas: getProductos() y getUnProducto(id)
// 
// La llamamos desde "ItemListContainer.jsx" para mostrar los productos
// y desde "ItemDetailContainer.jsx" para mostrar el detalle de un producto
//
// -------------------------------------------------------- +

export const productos=[
    
  // En "categNom" coloqué nuevamente el "nombreCateg" sin espacios, para ser utilizado en lugar de usar el número de "categoria"
  // Lo hice así a pedido de la profe que no desea que se utilice los número de categoría y que en su lugar use "palabras mas descriptivas"
  
  // 'Ropa Bebe'  
  {categoria:'01',nombreCateg:'Ropa Bebe',categNom:'RopaBebe',prodNro:'01',stock:50,precio:22885,     descripcion:'Body Manga Larga Bebé Pack X 3                                 ',imagen:'../imgShop/0101 Body Manga Larga Bebe Pack X 3 _171x221px.png            ',nombre:'Body Manga Larga Bebé'},
  {categoria:'01',nombreCateg:'Ropa Bebe',categNom:'RopaBebe',prodNro:'02',stock:40,precio:20000,     descripcion:'Enterito Para Recién Nacido De Polar Soft.                     ',imagen:'../imgShop/0102 Enterito Para Recien Nacido De Polar Soft _171x221px.png ',nombre:'Enterito Para Recién Nacido'},
  {categoria:'01',nombreCateg:'Ropa Bebe',categNom:'RopaBebe',prodNro:'03',stock:10,precio:18850,     descripcion:'Campera Bebe Polar Soft - Piel - Corderito                     ',imagen:'../imgShop/0103 Campera Bebe Polar Soft - Piel - Corderito _171x221px.png',nombre:'Campera Bebe Polar'},
  {categoria:'01',nombreCateg:'Ropa Bebe',categNom:'RopaBebe',prodNro:'04',stock:8,precio:23850,     descripcion:'Ajuar Conjunto Invierno Plush                                  ',imagen:'../imgShop/0104 Ajuar Conjunto Invierno Plush _171x221px.png             ',nombre:'Ajuar Conjunto Invierno'},
  {categoria:'01',nombreCateg:'Ropa Bebe',categNom:'RopaBebe',prodNro:'05',stock:6,precio:177000,    descripcion:'Ajuar Bebé Set 7 - 13 Piezas Batita, Ranita, Toallón, Manta Etc',imagen:'../imgShop/0105 Ajuar Bebe Set 7 -recien Nacido _171x221px.png           ',nombre:'Ajuar Bebé Set n Piezas'},
   
// 'Ropa Mujer'   
  {categoria:'02',nombreCateg:'Ropa Mujer',categNom:'RopaMujer',prodNro:'01',stock:50,precio:13999,    descripcion:'Buzo Mujer Peluche Elastizado Bifaz Varios Colores Canguro     ',imagen:'../imgShop/0201 Buzo Mujer Peluche Elastizado _171x221px.png             ',nombre:'Buzo Mujer Peluche'},
  {categoria:'02',nombreCateg:'Ropa Mujer',categNom:'RopaMujer',prodNro:'02',stock:40,precio:32000,    descripcion:'Jean Mujer Dama Oxford Elastizado Calce Perfecto               ',imagen:'../imgShop/0202 Jean Mujer Dama Oxford _171x221px.png                    ',nombre:'Jean Mujer Dama'},
  {categoria:'02',nombreCateg:'Ropa Mujer',categNom:'RopaMujer',prodNro:'03',stock:30,precio:99990,    descripcion:'Campera De Abrigo Parka Mujer Impermeable                      ',imagen:'../imgShop/0203 Campera De Abrigo Parka _171x221px.png                   ',nombre:'Campera De Abrigo'},
  {categoria:'02',nombreCateg:'Ropa Mujer',categNom:'RopaMujer',prodNro:'04',stock:20,precio:55000,    descripcion:'Conjunto Deportivo Jogging Pantalón Buzo Canguro Capucha       ',imagen:'../imgShop/0204 Conjunto Deportivo _171x221px.png                        ',nombre:'Conjunto Deportivo'},
  {categoria:'02',nombreCateg:'Ropa Mujer',categNom:'RopaMujer',prodNro:'05',stock:10,precio:49000,    descripcion:'Pollera Falda Jean De Mujer Larga Rigida Tajo Cenitho Jeans    ',imagen:'../imgShop/0205 Pollera Falda Jean _171x221px.png                        ',nombre:'Pollera Falda Jean'},
 
// 'Ropa Hombre'   
  {categoria:'03',nombreCateg:'Ropa Hombre',categNom:'RopaHombre',prodNro:'01',stock:50,precio:31500,   descripcion:'Campera Inflable Super Abrigada Con Capucha Desmontable        ',imagen:'../imgShop/0301 Campera Inflable _171x221px.png                          ',nombre:'Campera Inflable'},
  {categoria:'03',nombreCateg:'Ropa Hombre',categNom:'RopaHombre',prodNro:'02',stock:40,precio:24575,   descripcion:'Campera Friza Con Piel Corderito Por Dentro Varios Colores     ',imagen:'../imgShop/0302 Campera Friza Con Piel Corderito _171x221px.png          ',nombre:'Campera Friza'},
  {categoria:'03',nombreCateg:'Ropa Hombre',categNom:'RopaHombre',prodNro:'03',stock:30,precio:31999,   descripcion:'Pack X 5 Remeras Algodon Premium Lisas Varios Colores          ',imagen:'../imgShop/0303 Pack X 5 Remeras Algodon _171x221px.png                  ',nombre:'Remeras Algodon'},
  {categoria:'03',nombreCateg:'Ropa Hombre',categNom:'RopaHombre',prodNro:'04',stock:20,precio:35100,   descripcion:'Pack 3 Camiseta Musculosa Tres Ases Algodon Morley             ',imagen:'../imgShop/0304 Pack 3 Camiseta Musculosa _171x221px.png                 ',nombre:'Camiseta Musculosa'},
  {categoria:'03',nombreCateg:'Ropa Hombre',categNom:'RopaHombre',prodNro:'05',stock:10,precio:55000,   descripcion:'Pantalón De Gabardina Pinzado Clásico Hombre Pierre Cardin     ',imagen:'../imgShop/0305 Pantalon De Gabardina Pinzado _171x221px.png             ',nombre:'Pantalón De Gabardina'},

// 'Herramientas' 
  {categoria:'04',nombreCateg:'Herramientas',categNom:'Herramientas',prodNro:'01',stock:50,precio:17600,  descripcion:'Prensa Sargento 50 X 200 Carpinteria X4 Unidades               ',imagen:'../imgShop/0401 Prensa Sargento _171x221px.png                           ',nombre:'Prensa Sargento'},
  {categoria:'04',nombreCateg:'Herramientas',categNom:'Herramientas',prodNro:'02',stock:40,precio:129300, descripcion:'Fresadora Router Tupi Rebajador 1400w Lusqtoff 3 Boquillas 220V',imagen:'../imgShop/0402 Fresadora Router Tupi _171x221px.png                     ',nombre:'Fresadora'},
  {categoria:'04',nombreCateg:'Herramientas',categNom:'Herramientas',prodNro:'03',stock:30,precio:110500, descripcion:'Gamma G1930ar sierra circular 1300w 220V                       ',imagen:'../imgShop/0403 Gamma G1930ar sierra circular _171x221px.png             ',nombre:'Sierra circular'},
  {categoria:'04',nombreCateg:'Herramientas',categNom:'Herramientas',prodNro:'04',stock:20,precio:7200,   descripcion:'Formón 1 Mango Comfort Grip, Truper                            ',imagen:'../imgShop/0404 Formon 1 Mango Comfort _171x221px.png                    ',nombre:'Formón'},
  {categoria:'04',nombreCateg:'Herramientas',categNom:'Herramientas',prodNro:'05',stock:18,precio:63400,  descripcion:'Sierra Caladora Skil 4400jb 400w Velocidad Variable + Hoja     ',imagen:'../imgShop/0405 Sierra Caladora Skil _171x221px.png                      ',nombre:'Sierra Caladora'},
  {categoria:'04',nombreCateg:'Herramientas',categNom:'Herramientas',prodNro:'06',stock:14,precio:10300,  descripcion:'Serrucho Carpintero Tipo Aleman Acero 40 Cm. 16 Pulgadas       ',imagen:'../imgShop/0406 Serrucho Carpintero _171x221px.png                       ',nombre:'Serrucho'},
  {categoria:'04',nombreCateg:'Herramientas',categNom:'Herramientas',prodNro:'07',stock:10,precio:7800,   descripcion:'Escuadra Con Nivel 30cm Combinada Corrediza Carpinteria Acer   ',imagen:'../imgShop/0407 Escuadra Con Nivel _171x221px.png                        ',nombre:'Escuadra Con Nivel'}

]

export const getProductos = () => {
    let error = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (error) {
            reject('Hubo un error, intente más tarde*2*');
        } else {
            resolve(productos);
        }
        }, 2000); // 2000 = Simulating a 2-second delay
    });
    }


export const getUnProducto = (id) => {
    let error = false;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (error) {
            reject('Hubo un error, intente más tarde*1*');
        } else {
            let pr = productos.find((prod)=> prod.id === id)
            resolve(pr);
        }
        }, 2000); // 2000 = Simulating a 2-second delay
    });
    }