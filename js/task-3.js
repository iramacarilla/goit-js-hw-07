const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
 

  const createList = image => {
      const listRef = document.createElement('li');
      const imageRef = document.createElement('img');
      imageRef.setAttribute('scr', `${image.url}`);
      imageRef.setAttribute('alt', `${image.alt}`);
      listRef.appendChild(imageRef);
      return listRef;
  }
  const createImageList = images.map(image => createList(image));
console.log(createImageList);
const imageList = document.querySelector('#gallery');

imageList.append(...createImageList)
