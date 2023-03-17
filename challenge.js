class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  add(number) {
    const new_node = new Node(number);
    if(!this.head){
      this.head = new_node;
      this.tail = new_node;
    } else {
      this.tail.next_node = new_node;
      this.tail = new_node;
    }
  }

  get(index) {
    let current_node = this.head;
    let current_index = 0;
    while(current_node){
      if(current_index === index){
        return current_node.value;
      }
      current_node=current_node.next_node;
      current_index++;
    }
    return null;
  }
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// => 5

module.exports = LinkedList;
