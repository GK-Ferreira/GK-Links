//buscando links salvos
export async function saveLinks(key){
    const links = await localStorage.getItem(key);

    let linksSave = JSON.parse(links) || [];

    return linksSave

}

//salvando links no storage
export async function savelink(key,newlink){
    let linkstored =  await saveLinks(key);

    //se existir um link salvo com ID não vou duplicar
    const haslink = linkstored.some(link => link.id === newlink.id)

    if(haslink){
        console.log('ja existe')
        return;
    }
    //adicionando novo link na lista
    linkstored.push(newlink);
    await localStorage.setItem(key , JSON.stringify(linkstored));
    console.log("salvo")
}

export function deleteLink(links,id){
    let myLinks = links.filter(item => {
        return (item.id !== id)
    })

    localStorage.setItem('@gklink',JSON.stringify(myLinks))

    return myLinks;
}
