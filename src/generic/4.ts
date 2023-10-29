/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface T<TTitle> {
title:TTitle
}

class Component {
  constructor (public props:T<string>) {
    
  }
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};