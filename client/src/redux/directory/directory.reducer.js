const INITIAL_STATE = {
  sections: [
    {
      title: 'bathroom',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/ecommerce-7fec4.appspot.com/o/plants%2Fbathroom.jpg?alt=media&token=3066f185-d6da-4f46-b85b-1514072c8589',
      id: 1,
      linkUrl: 'shop/bathroom'
    },
    {
      title: 'bedroom',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/ecommerce-7fec4.appspot.com/o/plants%2Fbedroom.jpg?alt=media&token=9f9fc3d3-f458-4b1c-9366-dee24c2177a5',
      id: 2,
      linkUrl: 'shop/bedroom'
    },
    {
      title: 'kitchen',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/ecommerce-7fec4.appspot.com/o/plants%2Fkitchen.jpg?alt=media&token=e92330c6-2261-447c-8bd3-1b731810f655',
      id: 3,
      linkUrl: 'shop/kitchen'
    },
    {
      title: 'living room',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/ecommerce-7fec4.appspot.com/o/plants%2Fliving-room.jpg?alt=media&token=850a8b01-cd15-4dc6-ab7d-d024e0654fbd',
      size: 'large',
      id: 4,
      linkUrl: 'shop/living%20room'
    },
    {
      title: 'study',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/ecommerce-7fec4.appspot.com/o/plants%2Fstudy.jpg?alt=media&token=9c85baea-4485-4de2-a35b-f73655ae866b',
      size: 'large',
      id: 5,
      linkUrl: 'shop/study'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
