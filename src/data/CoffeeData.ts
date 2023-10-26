import { Coffee } from '../reducers/cart/reducer'
import arabeSvg from '../assets/coffeeImages/arabe.svg'
import cafeComLeiteSvg from '../assets/coffeeImages/cafe-com-leite.svg'
import capuccinoSvg from '../assets/coffeeImages/capuccino.svg'
import chocolateQuenteSvg from '../assets/coffeeImages/chocolate-quente.svg'
import cubanoSvg from '../assets/coffeeImages/cubano.svg'
import expressoAmericanoSvg from '../assets/coffeeImages/expresso-americano.svg'
import expressoCremosoSvg from '../assets/coffeeImages/expresso-cremoso.svg'
import expressoGeladoSvg from '../assets/coffeeImages/expresso-gelado.svg'
import expressoTradicionalSvg from '../assets/coffeeImages/expresso-tradicional.svg'
import havaianoSvg from '../assets/coffeeImages/havaiano.svg'
import irlandersSvg from '../assets/coffeeImages/irlandes.svg'
import latteSvg from '../assets/coffeeImages/latte.svg'
import macchiatoSvg from '../assets/coffeeImages/macchiato.svg'
import mocaccinoSvg from '../assets/coffeeImages/mocaccino.svg'

export const coffeeData: Coffee[] = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    img: expressoTradicionalSvg,
    price: 9.9,
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    img: expressoAmericanoSvg,
    price: 9.9,
  },
  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    img: expressoCremosoSvg,
    price: 9.9,
  },
  {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    img: expressoGeladoSvg,
    price: 9.9,
  },
  {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    img: cafeComLeiteSvg,
    price: 9.9,
  },
  {
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    img: latteSvg,
    price: 9.9,
  },
  {
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    img: capuccinoSvg,
    price: 9.9,
  },
  {
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    img: macchiatoSvg,
    price: 9.9,
  },
  {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'com leite'],
    img: mocaccinoSvg,
    price: 9.9,
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    img: chocolateQuenteSvg,
    price: 9.9,
  },
  {
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'gelado'],
    img: cubanoSvg,
    price: 9.9,
  },
  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    img: havaianoSvg,
    price: 9.9,
  },
  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    img: arabeSvg,
    price: 9.9,
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
    img: irlandersSvg,
    price: 9.9,
  },
]
