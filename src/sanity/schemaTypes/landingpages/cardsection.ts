// export default {
//     name: 'comment',
//     type: 'document',
//     title: 'Comment',
//     fields: [
//       {
//         name: 'name',
//         type: 'string',
//         title: 'Name',
//       },
//       {
//         name: 'comment',
//         type: 'text',
//         title: 'Comment',
//       },
//     ],

import { title } from "process";

    
//   };
  

// export default 
  
//   {
//   title:'card section',
//       name:'cardsection',
//       type:'object',
//       fields:[
         

//           //bar bar use cards in pictures
//           {
//               title:'card sections',
//               name:'card',
//               type:'array',
//               of:[
//                   {
//                       type:'object',
//                       fields:[
                          
//                     {title:'Image', name:'image', type:'image'},
//                     {title:'date', name:'date', type:'date'},                  
//                     {title:'Heading', name:'heading', type:'string'},
//                     {title:'Description', name:'description', type:'string'}, 
//                     { title:'Link', name:'link', type:'string'},                 
                     
//                       ]
//                     }
//               ]
//           }
    
//         ]
//     }
export default {
    title: 'card section',
    name: 'cardsection',
    type: 'object',
    fields: [
      {
        title: 'card sections', 
        name: 'cards',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { title: 'Image', name: 'image', type: 'image' },
              { title: 'date', name: 'date', type: 'date' },
              { title: 'Heading', name: 'heading', type: 'string' },
              { title: 'Description', name: 'description', type: 'string' },
              { title: 'Link', name: 'link', type: 'string' }
            ]
          }
        ]
      }
    ]
  }

    //           //ak dafa use heading
//           {
//               title:"card heading",
//               name:"cardHeading",
//               type:"string"
  
//           },
  