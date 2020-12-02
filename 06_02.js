class Group{
	constructor(){
		this.content = [];
	}

	add(value){
		if(!this.has(value)){
			this.content.push(value);
		}
	}

	delete(value){
		if(this.has(value)){
			let index = this.content.indexOf(value);
			delete this.content[index];
		}
	}

	has(value){
		return this.content.includes(value);
	}

	static from(iterable){
		let group = new Group();

		for(let element of iterable){
			group.add(element);
		}

		return group;
	}
}
