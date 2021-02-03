const messages = [
  
  { // single image
    type: 'image',
    fromUser: false,
    payload: {
      image: "https://s3-directus-orientador-fundacion-latam-pro.s3.amazonaws.com/public/uploads/_/originals/00000000149.png"
    }
  },
  { // carousel
    type: 'carousel',
    fromUser: false,
    payload: {
      items: [
        {
          type: 'card',
          payload: {
            title: 'Programación con Java Standard (7.ª edición)',
            image: "https://s3-directus-orientador-fundacion-latam-pro.s3.amazonaws.com/public/uploads/_/originals/00000000149.png",
            buttons: [{
              title: 'Más información',
              value: 'Más información',
              action: null,
              type: null
            },
            {
              title: 'Más información',
              value: 'Más información',
              action: null,
              type: null
            }]
          }
        },
        {
          type: 'card',
          payload: {
            title: 'Programación con Java Standard (7.ª edición)',
            image: "https://s3-directus-orientador-fundacion-latam-pro.s3.amazonaws.com/public/uploads/_/originals/00000000149.png",
            buttons: [{
              title: 'Más información',
              value: 'Más información',
              action: null,
              type: null
            }]
          }
        },
        {
          type: 'card',
          payload: {
            title: 'Programación con Java Standard (7.ª edición)',
            image: "https://s3-directus-orientador-fundacion-latam-pro.s3.amazonaws.com/public/uploads/_/originals/00000000149.png",
            buttons: [{
              title: 'Más información',
              value: 'Más información',
              action: null,
              type: null
            }]
          }
        }
      ]
    } 
  },
  { // single card
    type: 'card',
    payload: {
      title: 'Programación con Java Standard (7.ª edición)',
      image: "https://s3-directus-orientador-fundacion-latam-pro.s3.amazonaws.com/public/uploads/_/originals/00000000149.png",
      buttons: [{
        title: 'Más información',
        value: 'Más información',
        action: null,
        type: null
      }]
    }
  },
  { // image carousel
    type: 'carousel',
    fromUser: false,
    payload: {
      items: [
        {        
          type: 'image',
          fromUser: false,
          payload: {
            image: "https://s3-directus-orientador-fundacion-latam-pro.s3.amazonaws.com/public/uploads/_/originals/00000000149.png"
          }
        },
        {
          type: 'image',
          fromUser: false,
          payload: {
            image: "https://s3-directus-orientador-fundacion-latam-pro.s3.amazonaws.com/public/uploads/_/originals/00000000149.png"
          }
        },
        {              
          type: 'image',
          fromUser: false,
          payload: {
            image: "https://s3-directus-orientador-fundacion-latam-pro.s3.amazonaws.com/public/uploads/_/originals/00000000149.png"
          }
        },
        {     
          type: 'image',
          fromUser: false,
          payload: {
            image: "https://s3-directus-orientador-fundacion-latam-pro.s3.amazonaws.com/public/uploads/_/originals/00000000149.png"
          }
        }
      ]
    }
  }
]

export default messages;
