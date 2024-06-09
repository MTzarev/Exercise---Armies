function armies(input) {
//let list = input.join(`, `)
let armyInfo={};
for (let info of input) {
    let [leader, armyName, armyCount] = info.split(':');
    if (!armyInfo.hasOwnProperty(leader)) {
        armyInfo[leader] = [];
    }
    armyInfo[leader].push(armyName, armyCount);
    for (let leader in armyInfo) {
        console.log(`leader one ${leader}`);
        for (let carInfo of garageInfo[garageNum]) {
            let attributes = carInfo.split(', ').map(attribute => attribute.replace(':', ' -')).join(', ');
            console.log(`--- ${attributes}`);
        }
    }
    
    
    console.log(list);
}
armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);
armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);