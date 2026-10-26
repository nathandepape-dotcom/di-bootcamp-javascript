let names = ["john", "sarah", 23, "Rudolf", 34];

for (let i = 0; i < names.length; i++) {
    let name = names[i];

    if (typeof name !== "string") {
        break;
    }

        name = name[0].toUpperCase() + name.slice(1)
        console.log(name)
    
    


}