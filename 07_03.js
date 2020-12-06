class PGroup{
  constructor(){
    this.content = [];
  }

  add(value){
    let newPGroup = PGroup.empty;

    for(let item of this.content){
      newPGroup.content.push(item);
    };

    if(!newPGroup.has(value)){
      newPGroup.content.push(value);
    }

    return newPGroup;
  }

  delete(value){
    let newPGroup = PGroup.empty;

    for(let item of this.content){
      if(item !== value){
        newPGroup.content.push(item);
      }
    }

    return newPGroup;
  }

  has(value){
    return this.content.includes(value);
  }

  static get empty(){
    return new PGroup();
  }
}
