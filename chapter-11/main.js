function linkList(){
   let links = ['https://google.com', 'http://software.af', 'communitytaught.org']
   // links.map(x => x.startsWith != 'https://' || x.startsWith != 'http://' ? x = `https://${x}` : console.log(x))
   // for(x of links){
   //    if(x.startsWith != 'https://' || x.startsWith != 'http://'){
   //       x.filter
   //    } else{
   //       x = x
   //    }
   //    console.log(x)
   // }
   let uncompletedLinks = links.filter(x => x.startsWith != 'https://' || x.startsWith != 'http://')
   uncompletedLinks.startsWith = `https//`;
   console.log(uncompletedLinks)
}
linkList()
// function ask1(){
//    let an1 = 9
//    while (an1 != 0) {
//       an1 = Number(
//          prompt(
//             "choose a option: 1: Show links 2: Add a link 3: Remove a link 0: Quit"
//          )
//       );
//    }
// }
// ask1()