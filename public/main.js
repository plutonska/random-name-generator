function generator() {
    let input = document.getElementById("qty").value;

    for (let i = 0; i < input; i++) {
      let name = `${faker.name.firstName()} ${faker.name.lastName()}`;
      document.getElementById("result").innerHTML  += name + "<br/>";
    }
    input = document.getElementById('qty');
    input.value = '';
    
  }